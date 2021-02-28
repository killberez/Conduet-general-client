import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  placeHolder: string;
  value?: string;
  onChange: any;
}

const Input = styled.input`
  width: calc(100% - 10px);
`;

const InputArea =  (props: Props) => {
  return (
    <>
      <h2>{props.title}</h2>
      <Input
        type="text"
        placeholder={props.placeHolder}
        value={props.value ? props.value : ""}
        onChange={(event: any) => {
          props.onChange(event?.target.value);
        }}
      />
    </>
  );
};

export default InputArea;