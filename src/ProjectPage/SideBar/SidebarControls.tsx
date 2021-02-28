import React from "react";
import styled from "styled-components";
import {
  DataTableIcon,
  GraphStyleIcon,
  GraphTypeIcon,
  SettingsIcon,
} from "../../icons";

interface PassedProps {
  selectedSidetab: string;
  setSelectedSidetab: (d: string) => void;
}
interface IconProps {
  selected: boolean;
}

const Div = styled.div`
  background-color: var(--very-light-gray);
  width: 60px;
`;

const Icon = styled.div<IconProps>`
  height: 60px;
  width: 60px;
  border-bottom: 1px solid var(--light-gray);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.selected ? "var(--white)" : "none")};
`;

export default (props: PassedProps) => {
  const { selectedSidetab, setSelectedSidetab } = props;
  return (
    <Div>
      <Icon
        selected={selectedSidetab === "graphType" ? true : false}
        onClick={() => {
          setSelectedSidetab("graphType");
        }}
      >
        <GraphTypeIcon width={32} height={32} />
      </Icon>
      <Icon
        selected={selectedSidetab === "graphSettings" ? true : false}
        onClick={() => {
          setSelectedSidetab("graphSettings");
        }}
      >
        <SettingsIcon width={32} height={32} />
      </Icon>
      <Icon
        selected={selectedSidetab === "graphStyle" ? true : false}
        onClick={() => {
          setSelectedSidetab("graphStyle");
        }}
      >
        <GraphStyleIcon width={32} height={32} />
      </Icon>
      <Icon
        selected={selectedSidetab === "dataTable" ? true : false}
        onClick={() => {
          setSelectedSidetab("dataTable");
        }}
      >
        <DataTableIcon width={32} height={32} />
      </Icon>
    </Div>
  );
};
