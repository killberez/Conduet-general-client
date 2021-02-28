import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import GraphContext from "../context/GraphContext";
import axios from "axios";

interface PassedProps {
  setErrorFetchingData: (d: boolean) => void;
  setError: (d: string) => void;
}

interface ButtonStyle {
  opacity: number;
}

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.12);
  z-index: 100;
  position: relative;
`;

const InputBox = styled.input`
  padding: 10px 20px;
  background-color: #ffffff;
  margin: 0;
  border: 0;
  flex: 1 0;
  height: 30px;
  border-radius: 0;
`;

const SubmitButton = styled.div<ButtonStyle>`
  padding: 0 20px;
  background-color: #5c38ff;
  align-items: center;
  height: 50px;
  display: flex;
  color: #ffffff;
  margin: 0;
  width: 100vw;
  font-weight: bold;
  flex: 0 1 105px;
  opacity: ${(props) => props.opacity};
  cursor: pointer;
`;

export default (props: PassedProps) => {
  const graphContext = useContext(GraphContext);
  const [textField, setTextField] = useState(graphContext.settings.requestURL);
  const [requestURL, setRequestURL] = useState(graphContext.settings.requestURL);
  const { setErrorFetchingData, setError } = props;

  useEffect(() => {
    axios
      .get(requestURL)
      .then(async (res) => {
        setErrorFetchingData(false);
        setError("");
        graphContext.updateData(res.data);
      })
      .catch(async (err) => {
        setErrorFetchingData(true);
        setError(err);
        graphContext.updateData([]);
      });
    // eslint-disable-next-line
  }, [requestURL]);
  return (
    <Div>
      <InputBox
        type="text"
        placeholder={"Enter API request here"}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setTextField(event.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" && textField !== "") {
            graphContext.updateRequestURL(textField);
            setRequestURL(textField);
          }
        }}
        value={textField}
      />
      <SubmitButton
        opacity={textField === "" ? 0.5 : 1}
        onClick={() => {
          graphContext.updateRequestURL(textField);
          setRequestURL(textField);
        }}
      >
        Send Request
      </SubmitButton>
    </Div>
  );
};
