import React, { useReducer, useEffect, useState } from "react";
import styled from "styled-components";
import GraphContext from "../context/GraphContext";
import APIRequestView from "./APIRequestView";
import ProjectHeader from "./ProjectHeader";
import GraphReducer from "../context/GraphReducer";
import Sidebar from "./SideBar";
import GraphArea from "./GraphArea";

interface PassedProps {
  projectTitle: string;
  settings: any;
  setSettings: (d: any) => void;
  setProjectTitle: (d: string) => void;
  saving: boolean;
}

const Body = styled.div`
  display: flex;
`;

const ProjectPage = (props: PassedProps) => {
  const { projectTitle, settings, setSettings, saving, setProjectTitle } = props;
  const [errorFetchingData, setErrorFetchingData] = useState(false);
  const [error, setError] = useState("");
  const initialState = {
    data: [],
    tooltip: {
      isVisible: false,
      position: {x:0, y:0},
      value: {},
    },
    settings,
  }

  const [state, dispatch] = useReducer(GraphReducer, initialState);

  const updateData = (data: any) => {
    dispatch({
      type: "UPDATE_DATA",
      payload: data,
    });
  };

  const updateSelectedChartType = (data: string[]) => {
    dispatch({
      type: "UPDATE_SELECTED_CHART_TYPE",
      payload: data,
    });
  };

  const updateSecondaryAxisKey = (data: any) => {
    dispatch({
      type: "UPDATE_SECONDARY_AXIS_KEY",
      payload: data,
    });
  };

  const updatePrimaryAxisKey = (data: any) => {
    dispatch({
      type: "UPDATE_PRIMARY_AXIS_KEY",
      payload: data,
    });
  };

  const updateSecondaryAxisKeyType = (data: string) => {
    dispatch({
      type: "UPDATE_SECONDARY_AXIS_KEY_TYPE",
      payload: data,
    });
  };

  const updatePrimaryAxisKeyType = (data: string) => {
    dispatch({
      type: "UPDATE_PRIMARY_AXIS_KEY_TYPE",
      payload: data,
    });
  };

  const updateColorKey = (data: any) => {
    dispatch({
      type: "UPDATE_COLOR_KEY",
      payload: data,
    });
  };

  const updateSecondaryAxisMin = (data: number) => {
    dispatch({
      type: "UPDATE_SECONDARY_AXIS_MIN",
      payload: data,
    });
  };

  const updatePrimaryAxisMin = (data: number) => {
    dispatch({
      type: "UPDATE_PRIMARY_AXIS_MIN",
      payload: data,
    });
  };

  const updateSecondaryAxisMax = (data: number) => {
    dispatch({
      type: "UPDATE_SECONDARY_AXIS_MAX",
      payload: data,
    });
  };

  const updatePrimaryAxisMax = (data: number) => {
    dispatch({
      type: "UPDATE_PRIMARY_AXIS_MAX",
      payload: data,
    });
  };

  const updateColorRange = (data: any) => {
    dispatch({
      type: "UPDATE_COLOR_RANGE",
      payload: data,
    });
  };

  const updateParentKey = (data: any) => {
    dispatch({
      type: "UPDATE_PARENT_KEY",
      payload: data,
    });
  };

  const updateGraphHeight = (data: boolean) => {
    dispatch({
      type: "UPDATE_GRAPH_HEIGHT",
      payload: data,
    });
  };

  const updateGraphWidth = (data: boolean) => {
    dispatch({
      type: "UPDATE_GRAPH_WIDTH",
      payload: data,
    });
  };

  const updateMarkRadius = (data: number) => {
    dispatch({
      type: "UPDATE_MARK_RADIUS",
      payload: data,
    });
  };

  const updateTitle = (data: string) => {
    dispatch({
      type: "UPDATE_TITLE",
      payload: data,
    });
  };

  const updateDescription = (data: string) => {
    dispatch({
      type: "UPDATE_DESCRIPTION",
      payload: data,
    });
  };

  const updateNote = (data: string) => {
    dispatch({
      type: "UPDATE_NOTE",
      payload: data,
    });
  };

  const updateFooter = (data: string) => {
    dispatch({
      type: "UPDATE_FOOTER",
      payload: data,
    });
  };

  const updateShowTicks = (data: boolean) => {
    dispatch({
      type: "UPDATE_SHOW_TICKS",
      payload: data,
    });
  };

  const updateShowLabels = (data: boolean) => {
    dispatch({
      type: "UPDATE_SHOW_LABELS",
      payload: data,
    });
  };

  const updateShowValues = (data: boolean) => {
    dispatch({
      type: "UPDATE_SHOW_VALUES",
      payload: data,
    });
  };

  const updateShowKeys = (data: boolean) => {
    dispatch({
      type: "UPDATE_SHOW_KEYS",
      payload: data,
    });
  };

  const updateGridColor = (data: string) => {
    dispatch({
      type: "UPDATE_GRID_COLOR",
      payload: data,
    });
  };

  const updateLabelColor = (data: string) => {
    dispatch({
      type: "UPDATE_LABEL_COLOR",
      payload: data,
    });
  };

  const updateBaseColor = (data: string) => {
    dispatch({
      type: "UPDATE_BASE_COLOR",
      payload: data,
    });
  };

  const updateBackgroundColor = (data: string) => {
    dispatch({
      type: "UPDATE_BACKGROUND_COLOR",
      payload: data,
    });
  };

  const updateRequestURL = (data: string) => {
    dispatch({
      type: "UPDATE_REQUESTURL",
      payload: data,
    });
  };

  const updateRotateLabel = (data: boolean) => {
    dispatch({
      type: "UPDATE_ROTATE_LABEL",
      payload: data,
    });
  };

  const updateLabelPositionInside = (data: boolean) => {
    dispatch({
      type: "UPDATE_LABEL_POSITION_INSIDE",
      payload: data,
    });
  };

  const updateReverse = (data: boolean) => {
    dispatch({
      type: "UPDATE_REVERSE",
      payload: data,
    });
  };

  const updateSort = (data: boolean) => {
    dispatch({
      type: "UPDATE_SORT",
      payload: data,
    });
  };

  const updateKeysToUse = (data: string[]) => {
    dispatch({
      type: "UPDATE_KEYS_TO_USE",
      payload: data,
    });
  };

  const updateLabelsArray = (data: string[]) => {
    dispatch({
      type: "UPDATE_LABELS_ARRAY",
      payload: data,
    });
  };

  const updateTooltip = (data: any) => {
    dispatch({
      type: "UPDATE_TOOLTIP",
      payload: data,
    });
  };

  const updateKeyList = (data: any) => {
    dispatch({
      type: "UPDATE_KEY_LIST",
      payload: data,
    });
  };

  const updateTickFormat = (data: string) => {
    dispatch({
      type: "UPDATE_TICK_FORMAT",
      payload: data,
    });
  };

  const updateBarPadding = (data: number) => {
    dispatch({
      type: "UPDATE_BAR_PADDING",
      payload: data,
    });
  };

  const updateRoundedCorner = (data: number) => {
    dispatch({
      type: "UPDATE_ROUNDED_CORNER",
      payload: data,
    });
  };

  const updateUseKeys = (data: any) => {
    dispatch({
      type: "UPDATE_USE_KEYS",
      payload: data,
    });
  };

  const updateMouseOverValueFormat = (data: string) => {
    dispatch({
      type: "UPDATE_MOUSE_OVER_VALUE_FORMAT",
      payload: data,
    });
  };

  const updateMouseOverValueSuffix = (data: string) => {
    dispatch({
      type: "UPDATE_MOUSE_OVER_VALUE_SUFFIX",
      payload: data,
    });
  };
  
  const updateMouseOverValuePrefix = (data: string) => {
    dispatch({
      type: "UPDATE_MOUSE_OVER_VALUE_PREFIX",
      payload: data,
    });
  };

  const updateMouseOverLabelFormat = (data: string) => {
    dispatch({
      type: "UPDATE_MOUSE_OVER_LABEL_FORMAT",
      payload: data,
    });
  };

  const updateMouseOverLabelSuffix = (data: string) => {
    dispatch({
      type: "UPDATE_MOUSE_OVER_LABEL_SUFFIX",
      payload: data,
    });
  };
  
  const updateMouseOverLabelPrefix = (data: string) => {
    dispatch({
      type: "UPDATE_MOUSE_OVER_LABEL_PREFIX",
      payload: data,
    });
  };

  const updateMarkOpacity = (data: number) => {
    dispatch({
      type: "UPDATE_MARK_OPACITY",
      payload: data,
    });
  };

  useEffect(() => {
    setSettings(state.settings);
  }, [state.settings, setSettings]);
  return (
    <>
      <GraphContext.Provider
        value={{
          data: state.data,
          tooltip: state.tooltip,
          settings: state.settings,
          updateSelectedChartType,
          updatePrimaryAxisKey,
          updateSecondaryAxisKey,
          updatePrimaryAxisKeyType,
          updateSecondaryAxisKeyType,
          updateColorKey,
          updatePrimaryAxisMin,
          updatePrimaryAxisMax,
          updateSecondaryAxisMin,
          updateSecondaryAxisMax,
          updateColorRange,
          updateParentKey,
          updateGraphHeight,
          updateGraphWidth,
          updateTitle,
          updateDescription,
          updateNote,
          updateFooter,
          updateShowTicks,
          updateShowLabels,
          updateShowValues,
          updateShowKeys,
          updateGridColor,
          updateLabelColor,
          updateBaseColor,
          updateBackgroundColor,
          updateRequestURL,
          updateRotateLabel,
          updateLabelPositionInside,
          updateReverse,
          updateSort,
          updateKeysToUse,
          updateLabelsArray,
          updateTooltip,
          updateTickFormat,
          updateBarPadding,
          updateRoundedCorner,
          updateKeyList,
          updateUseKeys,
          updateData,
          updateMouseOverValueFormat,
          updateMouseOverValueSuffix,
          updateMouseOverValuePrefix,
          updateMouseOverLabelFormat,
          updateMouseOverLabelSuffix,
          updateMouseOverLabelPrefix,
          updateMarkOpacity,
          updateMarkRadius,
        }}
      >
        <ProjectHeader projectTitle={projectTitle} saving={saving} setProjectTitle={setProjectTitle}/>
        <APIRequestView
          setErrorFetchingData={setErrorFetchingData}
          setError={setError}
        />
        <Body>
          <Sidebar />
          <GraphArea
            errorFetchingData={errorFetchingData}
            error={error}
          />
        </Body>
      </GraphContext.Provider>
    </>
  );
};

export default ProjectPage;
