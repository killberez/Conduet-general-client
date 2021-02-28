import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import LoginContext from "../context/LoginContext";
import List from "./List";
import Axios from "axios";
import { INITIAL_SETTINGS } from "../Constants";
import * as dotenv from "dotenv";

dotenv.config();


const Body = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--very-light-gray);
  width: calc(100% - 40px);
  min-height: calc(100vh - 76px);
  padding: 56px 20px 20px;
`;

const Container = styled.div`
  width: 100%;
  max-width: 980px;
`;

const H1 = styled.h1`
  padding: 20px 0 10px 0;
  font-size: 30px;
  margin-bottom: 20px;
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 14px;
  font-weight: bold;
  background-color: var(--white);
  color: var(--primary-color);
  border-radius: 5px;
  border: 0;
  cursor: pointer;
`;

const ProjectList = () => {
  const { userData } = useContext(LoginContext);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getUserDetail = async () => {
      const token: string | null = userData.token;
      const allProjects = await Axios.get(
        `${process.env.REACT_APP_API_URL}/project/`,
        {
          headers: { authorization: token },
        }
      );
      setProjects(allProjects.data);
      setLoading(false);
    };

    // tslint:disable-next-line: no-floating-promises
    getUserDetail();
  }, [userData]);
  const createNewGraph = async () => {
    const project = await Axios.post(
      `${process.env.REACT_APP_API_URL}/project`,
      {
        name: "Untitled Project",
        settings: INITIAL_SETTINGS,
      },
      {
        headers: { authorization: userData.token },
      }
    );
    window.location.href = `/${project.data._id}`;
  };
  return (
    <>
      {!loading ? (
        <>
          <Body>
            <Container>
              <Head>
                <H1>All Projects</H1>
                <Button onClick={createNewGraph}>+ New Chart</Button>
              </Head>
              <List projects={projects} setProjects={setProjects}/>
            </Container>
          </Body>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default ProjectList;
