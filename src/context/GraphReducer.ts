import CreateKeyList from "../utils/CreateKeyList";
import FormatData from "../utils/FormatData";
import _ from 'lodash';

export default (state: any, action: any) => {
  let newSettings = {...state.settings};
  let newTooltip = {...state.tooltip};
  switch (action.type) {
    case "UPDATE_DATA":
      const formattedData = FormatData(action.payload);
      const keyList = CreateKeyList(formattedData);
      if (!_.isEqual(state.settings.keyList, keyList)) {
        const parentKeyIndex = keyList.findIndex(
          (item, i) => item.type === "[object]"
        );
        const useKeys = parentKeyIndex === -1 ? true : false;
        let keysToUse: string[] | undefined = [];
        if (useKeys) {
          keyList.forEach((d: { keyName: string; type: string }) => {
            if (d.type === "number") keysToUse?.push(d.keyName);
          });
        }
        keysToUse = useKeys ? keysToUse : undefined;
        const parentKey =
          parentKeyIndex !== -1 ? keyList[parentKeyIndex].keyName : undefined;
        const filteredData = CreateKeyList(formattedData).filter(
          (el) => el.parentKey === parentKey
        );
        const primaryAxisIndex = filteredData.findIndex(
          (item, i) => item.type === "number"
        );
        const primaryAxisKey =
          primaryAxisIndex !== -1 ? filteredData[primaryAxisIndex].keyName : "";
        const primaryAxisKeyType =
          primaryAxisIndex !== -1 ? filteredData[primaryAxisIndex].type : "";
        const secondaryAxisIndex = filteredData.findIndex(
          (item, i) => item.type === "string" || item.type === "dateTime"
        );
        const secondaryAxisKey =
          secondaryAxisIndex !== -1
            ? filteredData[secondaryAxisIndex].keyName
            : "";
        const secondaryAxisKeyType =
          secondaryAxisIndex !== -1 ? filteredData[secondaryAxisIndex].type : "";
        newSettings = {...state.settings, 
          keyList,
          keysToUse,
          primaryAxisKey,
          parentKey,
          primaryAxisKeyType,
          secondaryAxisKey,
          secondaryAxisKeyType,
          useKeys, }
      }
      return {
        ...state,
        data: formattedData,
        settings: newSettings
      };
    case "UPDATE_KEY_LIST":
      newSettings = {...state.settings, keyList: action.payload };
      return { ...state, settings: newSettings };
    case "UPDATE_KEYS_TO_USE":
      newSettings = {...state.settings, keysToUse: action.payload };
      return { ...state, settings: newSettings };
    case "UPDATE_PARENT_KEY":
      newSettings = {...state.settings, parentKey: action.payload };
      return { ...state, settings: newSettings };
    case "UPDATE_USE_KEYS":
      newSettings = {...state.settings, useKeys: action.payload };
      return { ...state, settings: newSettings };
    case "UPDATE_SELECTED_CHART_TYPE":
      newSettings = {...state.settings, selectedChartType: action.payload };
      return { ...state, settings: newSettings };
    case "UPDATE_PRIMARY_AXIS_KEY":
      newSettings = {...state.settings, primaryAxisKey: action.payload };
      return { ...state, settings: newSettings };
    case "UPDATE_SECONDARY_AXIS_KEY":
      newSettings = {...state.settings, secondaryAxisKey: action.payload };
      return { ...state, settings: newSettings };
    case "UPDATE_PRIMARY_AXIS_KEY_TYPE":
      newSettings = {...state.settings, primaryAxisKeyType: action.payload };
      return { ...state, settings: newSettings };
    case "UPDATE_SECONDARY_AXIS_KEY_TYPE":
      newSettings = {...state.settings, secondaryAxisKeyType: action.payload };
      return { ...state, settings: newSettings };
    case "UPDATE_COLOR_KEY":
      newSettings = {...state.settings, colorKey: action.payload };
      return { ...state, settings: newSettings };
    case "UPDATE_PRIMARY_AXIS_MAX":
      newSettings = {...state.settings, primaryAxisMax: action.payload };
      return { ...state, settings: newSettings };
    case "UPDATE_SECONDARY_AXIS_MAX":
      newSettings = {...state.settings, secondaryAxisMax: action.payload };
      return { ...state, settings: newSettings };
    case "UPDATE_PRIMARY_AXIS_MIN":
      newSettings = {...state.settings, primaryAxisMin: action.payload };
      return { ...state, settings: newSettings };
    case "UPDATE_SECONDARY_AXIS_MIN":
      newSettings = {...state.settings, secondaryAxisMin: action.payload };
      return { ...state, settings: newSettings };
    case "UPDATE_COLOR_RANGE":
      newSettings = {...state.settings, colorRange: action.payload };
      return { ...state, settings: newSettings };
    case "UPDATE_DRAW_GRAPH_DISABLED":
      newSettings = {...state.settings, drawGraphDisabled: action.payload };
      return { ...state, settings: newSettings };
    case "UPDATE_GRAPH_HEIGHT":
      newSettings = {...state.settings, graphHeight: action.payload };
      return { ...state, settings: newSettings };
    case "UPDATE_GRAPH_WIDTH":
      newSettings = {...state.settings, graphWidth: action.payload };
      return { ...state, settings: newSettings };
    case "UPDATE_TITLE":
      newSettings = {...state.settings, title: action.payload };
      return { ...state, settings: newSettings };
    case "UPDATE_DESCRIPTION":
      newSettings = {...state.settings, description: action.payload };
      return { ...state, settings: newSettings };
    case "UPDATE_NOTE":
      newSettings = {...state.settings, note: action.payload };
      return { ...state, settings: newSettings };
    case "UPDATE_FOOTER":
      newSettings = {...state.settings, footer: action.payload };
      return { ...state, settings: newSettings };
    case "UPDATE_SHOW_TICKS":
      newSettings = {...state.settings, showTicks: action.payload };
      return { ...state, settings: newSettings };
    case "UPDATE_SHOW_LABELS":
      newSettings = {...state.settings, showLabels: action.payload };
      return { ...state, settings: newSettings };
    case "UPDATE_SHOW_VALUES":
      newSettings = {...state.settings, showValues: action.payload };
      return { ...state, settings: newSettings };
    case "UPDATE_SHOW_KEYS":
      newSettings = {...state.settings, showKeys: action.payload };
      return { ...state, settings: newSettings };
    case "UPDATE_GRID_COLOR":
      newSettings = {...state.settings, gridColor: action.payload };
      return { ...state, settings: newSettings };
    case "UPDATE_LABEL_COLOR":
      newSettings = {...state.settings, labelColor: action.payload };
      return { ...state, settings: newSettings };
    case "UPDATE_ROTATE_LABEL":
      newSettings = {...state.settings, rotateLabel: action.payload };
      return { ...state, settings: newSettings };
    case "UPDATE_BASE_COLOR":
      newSettings = {...state.settings, baseColor: action.payload };
      return { ...state, settings: newSettings };
    case "UPDATE_BACKGROUND_COLOR":
      newSettings = {...state.settings, backgroundColor: action.payload };
      return { ...state, settings: newSettings };
    case "UPDATE_REQUESTURL":
      newSettings = {...state.settings, requestURL: action.payload };
      return { ...state, settings: newSettings };
    case "UPDATE_LABEL_POSITION_INSIDE":
      newSettings = {...state.settings, labelPositionInside: action.payload };
      return { ...state, settings: newSettings };
    case "UPDATE_REVERSE":
      newSettings = {...state.settings, reverse: action.payload };
      return { ...state, settings: newSettings };
    case "UPDATE_SORT":
      newSettings = {...state.settings, sort: action.payload };
      return { ...state, settings: newSettings };
    case "UPDATE_LABELS_ARRAY":
      newSettings = {...state.settings, labelsArray: action.payload };
      return { ...state, settings: newSettings };
    case "UPDATE_TOOLTIP":
      newTooltip = {...state.tooltip, position: {x: action.payload.x, y:action.payload.y}, data: action.payload.data, isVisible: action.payload.isVisible };
      return { ...state, tooltip: newTooltip };
    case "UPDATE_TICK_FORMAT":
      newSettings = {...state.settings, tickFormat: action.payload };
      return { ...state, settings: newSettings };
    case "UPDATE_MOUSE_OVER_VALUE_FORMAT":
      newSettings = {...state.settings, mouseOverValueFormat: action.payload };
      return { ...state, settings: newSettings };
    case "UPDATE_MOUSE_OVER_VALUE_SUFFIX":
      newSettings = {...state.settings, mouseOverValueSuffix: action.payload };
      return { ...state, settings: newSettings };
    case "UPDATE_MOUSE_OVER_VALUE_PREFIX":
      newSettings = {...state.settings, mouseOverValuePrefix: action.payload };
      return { ...state, settings: newSettings };
    case "UPDATE_MOUSE_OVER_LABEL_FORMAT":
      newSettings = {...state.settings, mouseOverLabelFormat: action.payload };
      return { ...state, settings: newSettings };
    case "UPDATE_MOUSE_OVER_LABEL_SUFFIX":
      newSettings = {...state.settings, mouseOverLabelSuffix: action.payload };
      return { ...state, settings: newSettings };
    case "UPDATE_MOUSE_OVER_LABEL_PREFIX":
      newSettings = {...state.settings, mouseOverLabelPrefix: action.payload };
      return { ...state, settings: newSettings };
    case "UPDATE_BAR_PADDING":
      newSettings = {...state.settings, barPadding: action.payload };
      return { ...state, settings: newSettings };
    case "UPDATE_ROUNDED_CORNER":
      newSettings = {...state.settings, roundedCorner: action.payload };
      return { ...state, settings: newSettings };
    case "UPDATE_MARK_OPACITY":
      newSettings = {...state.settings, markOpacity: action.payload };
      return { ...state, settings: newSettings };
    case "UPDATE_MARK_RADIUS":
      newSettings = {...state.settings, markRadius: action.payload };
      return { ...state, settings: newSettings };
    default:
      return state;
  }
};
