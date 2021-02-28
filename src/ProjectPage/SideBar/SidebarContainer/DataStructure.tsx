import React, { useContext } from "react";
import styled from "styled-components";
import GraphContext from "../../../context/GraphContext";
import Tags from "../../../UIElements/Tags";

interface ListDiv {
  margin?: number;
}

interface KeyDetail {
  keyName: string;
  type: string;
}

const SideBarContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const Div = styled.div`
  background-color: var(--white);
  width: 100%;
  overflow: auto;
  padding: 10px;
  height: calc(100vh - 166px);
`;

const List = styled.div<ListDiv>`
  display: flex;
  align-items: center;
  margin: 10px 0;
  margin-left: ${(props) => (props.margin ? `${props.margin * 15}px` : "0px")};
`;

const Key = styled.div`
  font-size: 14px;
`;

export default () => {
  const context = useContext(GraphContext);
  let list = null;
  if (context.settings.keyList.length > 0) {
    list = context.settings.keyList.map((d: KeyDetail, indx: number) => {
      const spaces = d.keyName.split(".").length - 1;
      const keyName = d.keyName.split(".")[spaces];
      return (
        <List key={indx} margin={spaces}>
          <Key>
            {keyName.substr(-2) === "[]"
              ? keyName.substring(0, keyName.length - 2)
              : keyName}
          </Key>
          <Tags text={d.type} />
        </List>
      );
    });
  }
  return (
    <SideBarContainer>
      <Div>{list}</Div>
    </SideBarContainer>
  );
};
