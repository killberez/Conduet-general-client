import React, { useContext } from "react";
import styled from "styled-components";
import GraphContext from "../../../context/GraphContext";
import TextArea from "../../../UIElements/TextArea";
import InputArea from "../../../UIElements/InputArea";
import ToggleButton from "../../../UIElements/ToggleSwitch";
import ColorSelector from "../../../UIElements/ColorSelector";
import Dropdown from "../../../UIElements/Dropdown";
import Slider from "../../../UIElements/Slider";
import { TICK_FORMAT_OPTIONS, CHART_PROPERTIES } from "../../../Constants";

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

export default () => {
  const context = useContext(GraphContext);
  return (
    <SideBarContainer>
      <Div>
        <h1>Title Settings</h1>
        {
          CHART_PROPERTIES[context.settings.selectedChartType].title && 
          <InputArea
            title={"Title"}
            placeHolder={"Insert title here"}
            value={context.settings.title ? context.settings.title : ""}
            onChange={(d:any) => {
              context.updateTitle(d);
            }}
          />
        }
        {
          CHART_PROPERTIES[context.settings.selectedChartType].description &&
          <TextArea
            title={"Description"}
            placeHolder={"Insert description here"}
            value={context.settings.description}
            onChange={(d: any) => {
              context.updateDescription(d);
            }}
          />
        }
        {
          CHART_PROPERTIES[context.settings.selectedChartType].note &&
            <TextArea
              title={"Note"}
              placeHolder={"Insert note here"}
              value={context.settings.note}
              onChange={(d: any) => {
                context.updateNote(d);
              }}
            />
        }
        {
          CHART_PROPERTIES[context.settings.selectedChartType].footer &&
          <TextArea
            title={"Footer"}
            placeHolder={"Insert footer here"}
            value={context.settings.footer}
            onChange={(d: any) => {
              context.updateFooter(d);
            }}
          />
        }
        <hr />
        <h1>General Settings</h1>
        {
          CHART_PROPERTIES[context.settings.selectedChartType].sortBars &&
          <ToggleButton
            title={"Sort Bars"}
            selected={context.settings.sort}
            onClick={() => {
              context.updateSort(!context.settings.sort);
            }}
          />
        }
        {
          CHART_PROPERTIES[context.settings.selectedChartType].reverseOrder &&
          <ToggleButton
            title={"Reverse Order"}
            selected={context.settings.reverse}
            onClick={() => {
              context.updateReverse(!context.settings.reverse);
            }}
          />
        }
        {
          CHART_PROPERTIES[context.settings.selectedChartType].showKeys &&
          <ToggleButton
            title={"Show Keys"}
            selected={context.settings.showKeys}
            onClick={() => {
              context.updateShowKeys(!context.settings.showKeys);
            }}
          />
        }
        {
          CHART_PROPERTIES[context.settings.selectedChartType].markOpacity &&
          <Slider
            title={"Mark Opacity"}
            value={context.settings.markOpacity}
            min={0}
            max={1}
            step={0.05}
            onChange={(d: any) => {
              context.updateMarkOpacity(d);
            }}
          />
        }
        {
          CHART_PROPERTIES[context.settings.selectedChartType].markRadius &&
          <Slider
            title={"Mark Radius"}
            value={context.settings.markRadius}
            min={3}
            max={15}
            step={1}
            onChange={(d: any) => {
              context.updateMarkRadius(d);
            }}
          />
        }
        {
          CHART_PROPERTIES[context.settings.selectedChartType].spacingBetweenBars &&
          <Slider
            title={"Spacing Between Bars"}
            value={context.settings.barPadding}
            min={0}
            max={100}
            step={1}
            onChange={(d: any) => {
              context.updateBarPadding(d);
            }}
          />
        }
        {
          CHART_PROPERTIES[context.settings.selectedChartType].roundedCorners &&
          <Slider
            title={"Rounded Corner"}
            value={context.settings.roundedCorner}
            min={0}
            max={50}
            step={1}
            onChange={(d: any) => {
              context.updateRoundedCorner(d);
            }}
          />
        }
        <hr />
        <h1>Tick Settings</h1>
        <h2>General Settings</h2>
        {
          CHART_PROPERTIES[context.settings.selectedChartType].showTicks &&
          <ToggleButton
            title={"Show Grid Line"}
            selected={context.settings.showTicks}
            onClick={() => {
              context.updateShowTicks(!context.settings.showTicks);
            }}
          />
        }
        {
          CHART_PROPERTIES[context.settings.selectedChartType].gridColor &&
          <ColorSelector
            title={"Grid Color"}
            color={context.settings.gridColor}
            onChange={(d: string) => context.updateGridColor(d)}
          />
        }
        {
          CHART_PROPERTIES[context.settings.selectedChartType].labelColor &&
          <ColorSelector
            title={"Label Color"}
            color={context.settings.labelColor}
            onChange={(d: string) => context.updateLabelColor(d)}
          />
        }
        {
          CHART_PROPERTIES[context.settings.selectedChartType].xAxesTicks.settings &&
          <>
            <h2>X-Axes</h2>
            {
              CHART_PROPERTIES[context.settings.selectedChartType].xAxesTicks.tickFormat && context.settings.secondaryAxisKeyType === "number" &&
              <Dropdown
              title={"Tick Format"}
              placeHolder={"No formatting"}
              value={context.settings.tickFormat}
              options={TICK_FORMAT_OPTIONS}
              onChange={(d: any) => {
                context.updateTickFormat(d);
              }}
              />
            }
            {
              CHART_PROPERTIES[context.settings.selectedChartType].xAxesTicks.showLabels &&
              <ToggleButton
                title={"Show Labels"}
                selected={context.settings.showLabels}
                onClick={() => {
                  context.updateShowLabels(!context.settings.showLabels);
                }}
              />
            }
            {
              CHART_PROPERTIES[context.settings.selectedChartType].xAxesTicks.rotateLabel && context.settings.secondaryAxisKeyType !== "number" &&
              <ToggleButton
                title={"Rotate X Labels"}
                selected={context.settings.rotateLabel}
                onClick={() => {
                  context.updateRotateLabel(!context.settings.rotateLabel);
                }}
              />
            }
            {
              CHART_PROPERTIES[context.settings.selectedChartType].xAxesTicks.showLabelInside &&
              <ToggleButton
                title={"Show Axes Labels Inside"}
                selected={context.settings.labelPositionInside}
                onClick={() => {
                  context.updateLabelPositionInside(!context.settings.labelPositionInside);
                }}
              />
            }
          </>
        }
        {
          CHART_PROPERTIES[context.settings.selectedChartType].yAxesTicks.settings &&
          <>
            <h2>Y-Axes</h2>
            {
              CHART_PROPERTIES[context.settings.selectedChartType].yAxesTicks.tickFormat &&
              <Dropdown
              title={"Tick Format"}
              placeHolder={"No formatting"}
              value={context.settings.tickFormat}
              options={TICK_FORMAT_OPTIONS}
              onChange={(d: any) => {
                context.updateTickFormat(d);
              }}
              />
            }
            {
              CHART_PROPERTIES[context.settings.selectedChartType].yAxesTicks.showLabelInside &&
              <ToggleButton
                title={"Show Axes Labels Inside"}
                selected={context.settings.labelPositionInside}
                onClick={() => {
                  context.updateLabelPositionInside(!context.settings.labelPositionInside);
                }}
              />
            }
          </>
        }
        <hr />
        <h1>Mouse Over Settings</h1>
        {
          CHART_PROPERTIES[context.settings.selectedChartType].mouseOver.label &&
          <>
            <h2>Lables on mouseover</h2>
            {
              CHART_PROPERTIES[context.settings.selectedChartType].mouseOver.label.prefix &&
              <InputArea
                title={"Prefix"}
                placeHolder={"Insert any prefix text"}
                value={context.settings.mouseOverLabelPrefix ? context.settings.mouseOverLabelPrefix : ""}
                onChange={(d:any) => {
                  context.updateMouseOverLabelPrefix(d);
                }}
              />
            }
            {
              CHART_PROPERTIES[context.settings.selectedChartType].mouseOver.label.suffix &&
              <InputArea
                title={"Suffix"}
                placeHolder={"Insert any suffix text"}
                value={context.settings.mouseOverLabelSuffix ? context.settings.mouseOverLabelSuffix : ""}
                onChange={(d:any) => {
                  context.updateMouseOverLabelSuffix(d);
                }}
              />
            }
            {
              CHART_PROPERTIES[context.settings.selectedChartType].mouseOver.label.format &&
              <Dropdown
                title={"Tick Format"}
                placeHolder={"No formatting"}
                value={context.settings.mouseOverLabelFormat}
                options={TICK_FORMAT_OPTIONS}
                onChange={(d: any) => {
                  context.updateMouseOverLabelFormat(d);
                }}
              />
            }
          </>
        }
        {
          CHART_PROPERTIES[context.settings.selectedChartType].mouseOver.value &&
          <>
            <h2>Value on mousever</h2>
            {
              CHART_PROPERTIES[context.settings.selectedChartType].mouseOver.value.prefix &&
              <InputArea
                title={"Prefix"}
                placeHolder={"Insert any prefix text"}
                value={context.settings.mouseOverValuePrefix ? context.settings.mouseOverValuePrefix : ""}
                onChange={(d:any) => {
                  context.updateMouseOverValuePrefix(d);
                }}
              />
            }
            {
              CHART_PROPERTIES[context.settings.selectedChartType].mouseOver.value.suffix &&
              <InputArea
                title={"Suffix"}
                placeHolder={"Insert any suffix text"}
                value={context.settings.mouseOverValueSuffix ? context.settings.mouseOverValueSuffix : ""}
                onChange={(d:any) => {
                  context.updateMouseOverValueSuffix(d);
                }}
              />
            }
            {
              CHART_PROPERTIES[context.settings.selectedChartType].mouseOver.value.format &&
              <Dropdown
                title={"Tick Format"}
                placeHolder={"No formatting"}
                value={context.settings.mouseOverValueFormat}
                options={TICK_FORMAT_OPTIONS}
                onChange={(d: any) => {
                  context.updateMouseOverValueFormat(d);
                }}
              />
            }
          </>
        }
      </Div>
    </SideBarContainer>
  );
};
