import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GraphGeneric, DeleteIcon, DuplicateIcon } from '../icons';
import LoginContext from "../context/LoginContext";
import Axios from "axios";

interface PassedProps {
  projects: any;
  setProjects: (d: any) => void;
}

const ListEl = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ProjectContainer = styled.div`
  margin: 10px;
  background-color: var(--white);
  box-shadow: 2px 0 6px 0 rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(255, 255, 255, 0);
  width: 220px;
  :hover {
    border: 1px solid var(--primary-color);
  }
  a {
    color: var(--black);
    text-decoration: none;
  }
`;

const ImageContainer = styled.div`
  background-color: var(--white);
  border-bottom: 1px solid var(--light-gray);
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Project = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  border-radius: 2px;
  justify-content: flex-start;
  padding: 5px 10px 0 10px;
`;

const NoProjectsDiv = styled.div`
  background-color: var(--note-bg);
  text-align: center;
  padding: 10px 5px;
  border-radius: 5px;
  width: 100%;
  color: var(--black);
`;

const SubNote = styled.div`
  color: var(--gray);
  font-size: 12px;
  padding: 0 10px 10px 10px;
`;

const IconList = styled.div`
  margin: 0 10px 10px;
  display: flex;
`

const IconButton = styled.div`
  padding: 5px 5px 2px 5px;
  width: fit-content;
  cursor: pointer;
  :hover {
    background-color: var(--light-gray);
    border-radius: 3px;
  }
`

const List = (props: PassedProps) => {
  const { userData } = useContext(LoginContext);
  const { projects, setProjects } = props;
  
  const deleteGraph = async (id: any) => {
    await Axios.delete(
      `${process.env.REACT_APP_API_URL}/project/${id}`,
      {
        headers: { authorization: userData.token },
      }
    );
    const allProjects = await Axios.get(
      `${process.env.REACT_APP_API_URL}/project/`,
      {
        headers: { authorization: userData.token },
      }
    );
    setProjects(allProjects.data);
  };
  const duplicateGraph = async (name: string, settings: any) => {
    const project = await Axios.post(
      `${process.env.REACT_APP_API_URL}/project`,
      {
        name: `${name} copy`,
        settings,
      },
      {
        headers: { authorization: userData.token },
      }
    );
    window.location.href = `/${project.data._id}`;
  };
  return (
    <>
      <ListEl>
        {projects.map((d: any, i: number) => (
          <ProjectContainer key={i}>
            <Link to={`/${d._id}`}>
              <ImageContainer>
                {d.settings?.selectedChartType && d.settings?.requestURL ? (
                  <GraphGeneric width={200} height={50}/>
                ) : null}
              </ImageContainer>
              <Project>{d.name}</Project>
              <SubNote>Last Modified: {d.lastModifiedOn.split('T')[0].split('-')[2]}-{d.lastModifiedOn.split('T')[0].split('-')[1]}-{d.lastModifiedOn.split('T')[0].split('-')[0]} </SubNote>
            </Link>
            <IconList>
              <IconButton title="Delete this project" onClick={() => {deleteGraph(d._id)}}>
                <DeleteIcon width={20} height={20} color={'#fb6e5d'} />
              </IconButton>
              <IconButton title="Copy this project" onClick={() => {duplicateGraph(d.name, d.settings)}}>
                <DuplicateIcon width={20} height={20}/>
              </IconButton>
            </IconList>
          </ProjectContainer>
        ))}
        {projects.length === 0 ? (
          <NoProjectsDiv>
            No Projects Yet. Click here to add a new project
          </NoProjectsDiv>
        ) : null}
      </ListEl>
    </>
  );
};

export default List;
