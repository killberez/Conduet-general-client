import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  placeHolder: string;
  value?: string;
  onChange: any;
}

const TextAreaEl = styled.textarea`
  background-color: var(--white);
  border: 1px solid var(--light-gray);
  border-radius: 5px;
  padding: 5px;
  width: calc(100% - 10px);
`;

const TextArea = (props: Props) => {
  return (
    <>
      <h2>{props.title}</h2>
      <TextAreaEl
        placeholder={props.placeHolder}
        value={props.value ? props.value : ""}
        onChange={(event: any) => {
          props.onChange(event?.target.value);
        }}
      />
    </>
  );
};

export default TextArea