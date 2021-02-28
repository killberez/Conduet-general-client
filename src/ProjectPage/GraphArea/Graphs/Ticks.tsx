import React, { useContext } from "react";
import GraphContext from "../../../context/GraphContext";
import FormatNumbers from "../../../utils/FormatNumbers";

interface Props {
  tickValues: number[];
  tickPosition: number[];
}

export const XTicks = (props: any) => {
  const context = useContext(GraphContext);
  const bottomMargin = 20;
  const left = context.settings.showTicks ? 50 : 5;
  const margin = { top: 20, right: 5, bottom: bottomMargin, left };
  const height = context.settings.graphHeight - margin.top - margin.bottom;
  if (context.settings.showTicks === false) return null;
  const tickLabel = props.tickValues.map((d: number, i: number) => {
    return (
      <text
        key={i}
        x={props.tickPosition[i]}
        y={height + 15}
        fontSize={12}
        textAnchor={"middle"}
        fill={context.settings.labelColor}
        fontFamily={'IBM Plex Mono'}
      >
        {FormatNumbers(d, context.settings.tickFormat)}
      </text>
    );
  });
  const tickAxis = context.settings.showTicks
    ? props.tickValues.map((d: number, i: number) => (
        <line
          key={i}
          y1={0}
          x1={props.tickPosition[i]}
          y2={context.settings.graphHeight}
          x2={props.tickPosition[i]}
          stroke={context.settings.gridColor}
          strokeWidth={1}
        />
      ))
    : null;
  return (
    <g>
      {tickAxis}
      {tickLabel}
    </g>
  );
};

export const YTicks = (props: Props) => {
  const context = useContext(GraphContext);

  if (context.settings.showTicks === false) return null;
  const tickLabel = props.tickValues.map((d: number, i: number) => {
    return (
      <text
        key={i}
        x={context.settings.labelPositionInside ? 5 : 45}
        y={props.tickPosition[i]}
        fontSize={12}
        textAnchor={context.settings.labelPositionInside ? "start" : "end"}
        fill={context.settings.labelColor}
        dy={context.settings.labelPositionInside ? -5 : 3}
        fontFamily={'IBM Plex Mono'}
      >
        {FormatNumbers(d, context.settings.tickFormat)}
      </text>
    );
  });
  const tickAxis = context.settings.showTicks
    ? props.tickValues.map((d: number, i: number) => (
        <line
          key={i}
          x1={context.settings.labelPositionInside ? 5 : 50}
          y1={props.tickPosition[i]}
          x2={context.settings.graphWidth}
          y2={props.tickPosition[i]}
          stroke={context.settings.gridColor}
          strokeWidth={1}
        />
      ))
    : null;
  return (
    <g>
      {tickAxis}
      {tickLabel}
    </g>
  );
};
