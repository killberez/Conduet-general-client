import React, { useContext } from "react";
import styled from "styled-components";
import GraphContext from "../../../context/GraphContext";
import { CHART_PROPERTIES } from "../../../Constants";
import ColorSelector from "../../../UIElements/ColorSelector";

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

export default () => {
  const context = useContext(GraphContext);
  return (
    <SideBarContainer>
      <Div>
        <h1>Color Settings</h1>
        {
          CHART_PROPERTIES[context.settings.selectedChartType].backgroundColor && 
          <ColorSelector
            title={"Background Color"}
            color={context.settings.backgroundColor}
            onChange={(d: string) => context.updateBackgroundColor(d)}
          />
        }
        {
          CHART_PROPERTIES[context.settings.selectedChartType].baseColor && 
          <ColorSelector
            title={"Base Color"}
            color={context.settings.baseColor}
            onChange={(d: string) => context.updateBaseColor(d)}
          />
        }
      </Div>
    </SideBarContainer>
  );
};
