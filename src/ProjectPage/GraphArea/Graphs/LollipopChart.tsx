/* eslint-disable no-eval */
import React, { useContext } from "react";
import * as d3 from "d3";
import GraphContext from "../../../context/GraphContext";
import GetDataFromArray from "../../../utils/FormatDataForViz";
import { YTicks } from "./Ticks";

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
  );

  const labelMaxLength = Math.max(
    ...dataArr.map((el: any) => (el.label ? el.label.split('.').join('').length : 0))
  );
  const bottomMargin = context.settings.showLabels ? 20 : 0;
  const left = context.settings.showTicks ? 50 : 5;
  const multiplier = 10;
  const margin =
      context.settings.rotateLabel && context.settings.showLabels
        ? { top: 20, right: 5, bottom: labelMaxLength * multiplier, left }
        : { top: 20, right: 5, bottom: bottomMargin, left };
  const width = context.settings.graphWidth - margin.left - margin.right;
  const height = context.settings.graphHeight - margin.top - margin.bottom;
  const xScale = d3
    .scaleBand()
    .range([0, width])
    .padding(context.settings.barPadding / 100);
  const yScale = d3.scaleLinear().range([height, 0]);

  const maxVal =
    context.settings.primaryAxisMax !== null
      ? context.settings.primaryAxisMax
      : Math.max(...dataArr.map((d: any) => d.value));
  const minVal = context.settings.primaryAxisMin !== null ? context.settings.primaryAxisMin : 0;
  yScale.domain([minVal, maxVal]);
  xScale.domain(dataArr.map((d: any) => d.labelIndex));
  const Bars = dataArr.map((d: any, i: number) => {
    const xPos = xScale(d.labelIndex) as number;
    return (
      <circle
        key={i}
        cx={ xPos + xScale.bandwidth() / 2}
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
  const Labels = context.settings.showLabels
    ? dataArr.map((d: any, i: number) => {
        const xPos = xScale(d.labelIndex) as number;
        const width = xScale.bandwidth();
        const labelMaxWidth = labelMaxLength * multiplier;
        const labelIndexToShow = labelMaxWidth / width < 0.8 ? 1 : Math.round(labelMaxWidth / width) + 1;
        if(context.settings.rotateLabel || i % labelIndexToShow === 0 )
          return (
            <text
              key={i}
              x={0}
              y={0}
              transform={`translate(${xScale.bandwidth() / 2 + xPos},${
                height + 15
              }) rotate(${context.settings.rotateLabel ? 90 : 0})`}
              fontSize={12}
              textAnchor={context.settings.rotateLabel ? "start" : "middle"}
              fill={context.settings.labelColor}
              dy={context.settings.rotateLabel ? 4 : 0}
              dx={context.settings.rotateLabel ? -10 : 0}
              fontFamily={'IBM Plex Mono'}
            >
              {d.label}
            </text>
          );
        return null;
      })
    : null;

  const tickValue = yScale.ticks(5);
  const tickPos = tickValue.map((d: any) => yScale(d));
  return (
    <g transform={`translate(0,${margin.top})`}>
      {context.settings.showTicks ? (
        <YTicks tickValues={tickValue} tickPosition={tickPos} />
      ) : null}
      <g transform={`translate(${margin.left},0)`}>
        {Bars}
        {Labels}
      </g>
    </g>
  );
};
