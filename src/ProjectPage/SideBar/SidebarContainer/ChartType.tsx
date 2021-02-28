import React, { useContext } from "react";
import styled from "styled-components";
import GraphContext from "../../../context/GraphContext";
import {
  BarGraphIcon,
  LineGraphIcon,
  LineAndBarChartIcon,
} from "../../../icons";
import BarGraph from "../ChartSpecificSettings/BarGraph";
import ScatterPlot from "../ChartSpecificSettings/ScatterPlot";

interface Selection {
  selected: boolean;
}

const SideBarContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const Div = styled.div`
  background-color: var(--white);
  width: 100%;
  padding: 10px;
  overflow: auto;
  height: calc(100vh - 166px);
`;

const Container = styled.div`
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  display: flex;
`;

const GraphSelectionDiv = styled.div<Selection>`
  background-color: ${(props) =>
    props.selected ? "var(--primary-color)" : "var(--very-light-gray)"};
  font-size: 14px;
  color: ${(props) => (props.selected ? "var(--white)" : "var(--black)")};
  display: flex;
  align-items: center;
  padding: 7px;
  margin-top: 5px;
  width: 100%;
`;

const Label = styled.div`
  margin-left: 5px;
`;

export default () => {
  const context = useContext(GraphContext);
  const graphTypesAvailable = ["Bar", "Lines", "Scatter Plot", "Lines + Bars"];
  const graphSelection = graphTypesAvailable.map((d: string, i: number) => {
    let icon;
    switch (d) {
      case "Bar":
        icon = (
          <BarGraphIcon
            width={16}
            height={16}
            color={context.settings.selectedChartType === "Bar" ? "#fff" : "#AD9BFF"}
          />
        );
        break;
      case "Lines":
        icon = (
          <LineGraphIcon
            width={16}
            height={16}
            color={context.settings.selectedChartType === "Lines" ? "#fff" : "#AD9BFF"}
          />
        );
        break;
      case "Scatter Plot":
        icon = (
          <LineAndBarChartIcon
            width={16}
            height={16}
            color={
              context.settings.selectedChartType === "Scatter Plot" ? "#fff" : "#AD9BFF"
            }
          />
        );
        break;
      case "Lines + Bars":
        icon = (
          <LineAndBarChartIcon
            width={16}
            height={16}
            color={
              context.settings.selectedChartType === "Lines + Bars" ? "#fff" : "#AD9BFF"
            }
          />
        );
        break;
      default:
        break;
    }
    return (
      <GraphSelectionDiv
        selected={context.settings.selectedChartType === d ? true : false}
        key={i}
        onClick={() => {
          context.updateSelectedChartType(d);
        }}
      >
        {icon}
        <Label>{d}</Label>
      </GraphSelectionDiv>
    );
  });
  let options = <BarGraph/>
  switch(context.settings.selectedChartType) {
    case "Bar":
      options = <BarGraph />;
      break;
    case "Scatter Plot":
      options = <ScatterPlot />;
      break;
    default:
      options = <BarGraph />;
      break;
  }
  return (
    <SideBarContainer>
      <Div>
        <Container>{graphSelection}</Container>
        <hr />
        {options}
      </Div>
    </SideBarContainer>
  );
};
