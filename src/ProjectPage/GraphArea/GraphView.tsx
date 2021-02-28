import React, { useContext } from "react";
import styled from "styled-components";
import domtoimage from "dom-to-image";
import GraphContext from "../../context/GraphContext";
import BarGraph from "./Graphs/BarGraph";
import ScatterPlot from "./Graphs/ScatterPlot";
import LollipopChart from "./Graphs/LollipopChart";
import Button from "../../UIElements/Button";

interface Dimensions {
  width: number;
}


const Div = styled.div`
  width: calc(100vw - 300px);
  height: calc(100vh - 196px);
`;

const TopBar = styled.div`
  background-color: #fff;
  border-bottom: 1px solid var(--light-gray);
  display: flex;
  height: 30px;
  padding: 10px 20px;
  align-items: center;
  justify-content: space-between;
  z-index: 5;
`;

const ContainerDiv = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 40px;
  margin-left: 10px;
`;

const SizeRange = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-items: center;
`;

const Label = styled.div`
  font-size: 12px;
  color: var(--gray);
  margin: 0 10px 0 5px;
`;

const GraphContainer = styled.div`
  display: flex;
  width: calc(100vw - 340px);
  height: calc(100vh - 291px);
  overflow: auto;
  padding: 20px;
`;

const GraphDiv = styled.div<Dimensions>`
  width: ${(props) => props.width}px;
  height: fit-content;
  padding: 20px;
  background-color: var(--white);
  box-shadow: 2px 0 6px 0 rgba(0, 0, 0, 0.12);
`;

const GraphTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
const Description = styled.div`
  font-size: 14px;
`;
const Note = styled.div`
  font-size: 14px;
`;
const Footer = styled.div`
  font-size: 14px;
  color: var(--gray);
`;

export default () => {
  const context = useContext(GraphContext);

  let graph = <BarGraph data={context.data} />

  switch(context.settings.selectedChartType){
    case "Bar":
      graph = <BarGraph data={context.data} />;
      break;
    case "Scatter Plot":
      graph = context.settings.secondaryAxisKeyType === "number" && context.settings.primaryAxisKeyType === "number" ? <ScatterPlot data={context.data} /> : <LollipopChart data={context.data} />
      break;
    default:
      graph = <BarGraph data={context.data} />;
      break;
  }
  return (
    <Div>
      <TopBar>
        <ContainerDiv>
          <h2>Chart Size</h2>
          <SizeRange>
            <Input
              type="number"
              value={context.settings.graphWidth}
              onChange={(event) => {
                context.updateGraphWidth(event.target.value);
              }}
            />
            <Label>px</Label>
            <>X</>
            <Input
              type="number"
              value={context.settings.graphHeight}
              onChange={(event) => {
                context.updateGraphHeight(event.target.value);
              }}
            />
            <Label>px</Label>
          </SizeRange>
        </ContainerDiv>
        <ContainerDiv>
          <h2>Save As</h2>
          <Button
            text={"SVG"}
            primary={true}
            onClick={() => {
              // tslint:disable-next-line: no-floating-promises
              domtoimage
                .toSvg(document.getElementById("graph-node") as HTMLElement)
                .then((dataUrl: any) => {
                  const link = document.createElement("a");
                  link.download = "graph.svg";
                  link.href = dataUrl;
                  link.click();
                });
            }}
            marginLeft={10}
          />
          <Button
            text={"PNG"}
            primary={true}
            onClick={() => {
              // tslint:disable-next-line: no-floating-promises
              domtoimage
                .toPng(document.getElementById("graph-node") as HTMLElement)
                .then((dataUrl: any) => {
                  const link = document.createElement("a");
                  link.download = "graph.png";
                  link.href = dataUrl;
                  link.click();
                });
            }}
          />
          <Button
            text={"Get Embed Code"}
            primary={false}
            onClick={() => {}}
            marginLeft={30}
          />
        </ContainerDiv>
      </TopBar>
      <GraphContainer>
        <GraphDiv width={context.settings.graphWidth} id="graph-node">
          <GraphTitle>{context.settings.title}</GraphTitle>
          <Description>{context.settings.description}</Description>
          <svg width={context.settings.graphWidth} height={context.settings.graphHeight}>
            {context.settings.backgroundColor === "#ffffff" ? null : (
              <rect
                x={0}
                y={0}
                width={context.settings.graphWidth}
                height={context.settings.graphHeight}
                fill={context.settings.backgroundColor}
              />
            )}
            {graph}
          </svg>
          <Note>{context.settings.note}</Note>
          <Footer>{context.settings.footer}</Footer>
        </GraphDiv>
      </GraphContainer>
    </Div>
  );
};
