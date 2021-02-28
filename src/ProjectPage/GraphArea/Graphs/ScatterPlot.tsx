/* eslint-disable no-eval */
import React, { useContext } from "react";
import * as d3 from "d3";
import GraphContext from "../../../context/GraphContext";
import GetDataFromArray from "../../../utils/FormatDataForViz";
import { YTicks, XTicks } from "./Ticks";

interface PassedProps {
  data: any;
}

export default (props: PassedProps) => {
  const context = useContext(GraphContext);

  if (context.settings.primaryAxisKey === "" && !context.settings.useKeys) return null;

  const { data } = props;

  const dataArr = GetDataFromArray(
    data,
    context.settings.primaryAxisKey,
    context.settings.primaryAxisKeyType,
    context.settings.secondaryAxisKey,
    context.settings.parentKey,
    context.settings.useKeys,
    context.settings.keysToUse
  )
  const labelMaxLength = Math.max(
    ...dataArr.map((el: any) => (el.label ? el.label.length : 0))
  );

  const bottomMargin = context.settings.showLabels ? 20 : 0;
  const left = context.settings.showTicks ? 50 : 5;
  const margin =
      context.settings.rotateLabel && context.settings.showLabels
        ? { top: 20, right: 5, bottom: labelMaxLength * 10, left }
        : { top: 20, right: 5, bottom: bottomMargin, left };
  const width = context.settings.graphWidth - margin.left - margin.right;
  const height = context.settings.graphHeight - margin.top - margin.bottom;
  const xScale =  d3.scaleLinear().range([0, width]);
  const yScale = d3.scaleLinear().range([height, 0]);

  const yMaxVal =
    context.settings.primaryAxisMax !== null
      ? context.settings.primaryAxisMax
      : Math.max(...dataArr.map((d: any) => d.value));
  const yMinVal = context.settings.primaryAxisMin !== null ? context.settings.primaryAxisMin : 0;
  yScale.domain([yMinVal, yMaxVal]);

  const xMaxVal =
    context.settings.secondaryAxisMax !== null
      ? context.settings.secondaryAxisMax
      : Math.max(...dataArr.map((d: any) => d.label));
  const xMinVal = context.settings.secondaryAxisMin !== null ? context.settings.secondaryAxisMin : 0;
  
  xScale.domain([xMinVal, xMaxVal]);
  
  const Bars = dataArr.map((d: any, i: number) => {
    return (
      <circle
        key={i}
        cx={xScale(d.labelIndex)}
        cy={yScale(d.value)}
        r={context.settings.markRadius}
        fill={context.settings.baseColor}
        opacity={context.settings.markOpacity}
        onMouseEnter={(event) => {
          context.updateTooltip({
            x: event?.clientX + 10,
            y: event?.clientY - 10,
            data: d,
            isVisible: true,
          });
        }}
        onMouseLeave={() => {
          context.updateTooltip({
            x: 0,
            y: 0,
            data: undefined,
            isVisible: false,
          });
        }}
        onMouseMove={(event) => {
          context.updateTooltip({
            x: event?.clientX + 10,
            y: event?.clientY - 10,
            data: d,
            isVisible: true,
          });
        }}
      />
    );
  });
  
  const yTickValue = yScale.ticks(5);
  const yTickPos = yTickValue.map((d: any) => yScale(d));
  const xTickValue = xScale.ticks(5);
  const xTickPos = xTickValue.map((d: any) => xScale(d));
  return (
    <g transform={`translate(0,${margin.top})`}>
      {context.settings.showTicks ? (
        <>
          <YTicks tickValues={yTickValue} tickPosition={yTickPos} />
          <XTicks tickValues={xTickValue} tickPosition={xTickPos} />
        </>
      ) : null}
      <g transform={`translate(${margin.left},0)`}>
        {Bars}
      </g>
    </g>
  );
};
