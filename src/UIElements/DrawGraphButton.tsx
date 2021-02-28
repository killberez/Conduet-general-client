import React from "react";
import styled from "styled-components";

interface Disabled {
  disabled: boolean;
}

const PrimaryButton = styled.div<Disabled>`
  background-color: var(--primary-color);
  color: var(--white);
  font-weight: bold;
  width: 100%;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${(props) => (props.disabled ? "no-drop" : "pointer")};
`;

export default (props: Disabled) => {
  return <PrimaryButton disabled={props.disabled}>Draw Graph</PrimaryButton>;
};
