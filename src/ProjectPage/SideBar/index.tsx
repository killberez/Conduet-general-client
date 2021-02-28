import React, { useState } from "react";
import styled from "styled-components";
import SideMenu from "./SidebarControls";
import SideBarInfo from "./SidebarContainer/DataStructure";
import GraphTypeMenu from "./SidebarContainer/ChartType";
import GraphSettings from "./SidebarContainer/ChartSettings";
import ColorMenu from "./SidebarContainer/ColorSettings";

const Div = styled.div`
  display: flex;
  width: 299px;
  height: calc(100vh - 146px);
  box-shadow: 2px 0 6px 0 rgba(0, 0, 0, 0.12);
  z-index: 10;
`;

export default () => {
  const [selectedSidetab, setselectedSidetab] = useState("graphType");
  let sideBar;
  switch (selectedSidetab) {
    case "dataTable":
      sideBar = <SideBarInfo />;
      break;
    case "graphType":
      sideBar = <GraphTypeMenu />;
      break;
    case "graphStyle":
      sideBar = <ColorMenu />;
      break;
    case "graphSettings":
      sideBar = <GraphSettings />;
      break;
    default:
      break;
  }
  return (
    <Div>
      <SideMenu
        selectedSidetab={selectedSidetab}
        setSelectedSidetab={setselectedSidetab}
      />
      {sideBar}
    </Div>
  );
};
