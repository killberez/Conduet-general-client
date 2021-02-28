import React from "react";
import styled from "styled-components";
import ReactJson from "react-json-view";

interface PassedProps {
  data: any;
}

const Div = styled.div`
  display: flex;
  width: calc(100vw - 300px);
  height: calc(100vh - 196px);
  overflow: auto;
`;

const Container = styled.div`
  padding: 20px;
`;

export default (props: PassedProps) => {
  const { data } = props;
  return (
    <Div>
      <Container>
        <ReactJson src={data} />
      </Container>
    </Div>
  );
};
