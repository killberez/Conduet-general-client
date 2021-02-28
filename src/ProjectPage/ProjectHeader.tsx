import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
interface PassedProps {
  projectTitle: string;
  saving: boolean;
  setProjectTitle: (d: string) => void;
}

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  position: relative;
  background-color: var(--very-light-gray);
  padding: 56px 0 0;
`;

interface Alignment {
  alignment?: string
}

const NavButton = styled.div<Alignment>`
  width: 150px;
  text-align: ${props => props.alignment ? props.alignment : 'left'};
  padding: 0 10px;
  a {
    text-decoration: none;
    color: var(--gray);
    font-size: 14px;
  }
`;

const InputBox = styled.input`
  padding: 10px 20px;
  background-color: var(--very-light-gray);
  margin: 0;
  border: 0;
  color: var(--black);
  flex: 1 0;
  height: 20px;
  font-weight: regular;
  text-align: center;
  border-radius: 0;
  font-size: 16px;
`;

export default (props: PassedProps) => {
  const { projectTitle, saving, setProjectTitle } = props;
  return (
    <Div>
      <NavButton>
        <Link to={"/"}>{"<"} All Projects</Link>
      </NavButton>

      <InputBox
        type="text"
        placeholder={"Untitled Project"}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          if (event.target.value === "")
            setProjectTitle("Untitled Project");
          else 
            setProjectTitle(event.target.value);
        }}
        value={projectTitle === "Untitled Project" ? "" : projectTitle}
      />
      <NavButton alignment={'right'}>{saving ? "Saving ..." : "All changes Saved"}</NavButton>
    </Div>
  );
};
