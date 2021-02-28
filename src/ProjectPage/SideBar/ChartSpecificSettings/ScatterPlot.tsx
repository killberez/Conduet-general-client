import React, { useContext } from "react";
import styled from "styled-components";
import GraphContext from "../../../context/GraphContext";
import RadioSelectionList from "../../../UIElements/RadioSelectionList";
import CheckBoxSelectionList from "../../../UIElements/CheckBoxSelectionList";
import Tags from "../../../UIElements/Tags";
import Notes from "../../../UIElements/Notes";

interface KeyDetail {
  keyName: string;
  type: string;
  isArray: boolean;
  parentKey?: string;
}

interface Width {
  width?: string;
}

const Input = styled.input<Width>`
  width: ${(props) => (props.width ? props.width : "100%")};
`;

const RangeInput = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  align-items: center;
`;

export default () => {
  const context = useContext(GraphContext);
  const columnOptions = context.settings.keyList.map((d: KeyDetail, i: number) => {
    let disabled =
      d.type === "object" ||
      d.type === "dateTime" ||
      d.type === "[boolean]" ||
      d.type === "[dateTime]"
        ? true
        : false;
    if (d.parentKey !== undefined && disabled === false) {
      disabled = d.parentKey.split("[]").length - 1 > 1 ? true : false;
    }
    if (context.settings.useKeys) {
      disabled = d.type === "number" ? false : true;
    }
    return {
      keyName: d.keyName,
      type: d.type,
      isArray: d.isArray,
      parentKey: d.parentKey,
      disabled,
    };
  });
  const labelOptions = context.settings.keyList.map((d: KeyDetail, i: number) => {
    const disabled =
      d.type === "object" ||
      context.settings.parentKey !== d.parentKey ||
      d.type[0] === "["
        ? true
        : false;
    return {
      keyName: d.keyName,
      type: d.type,
      isArray: d.isArray,
      parentKey: d.parentKey,
      disabled,
    };
  });
  return (
    <div>
      <>
        <h1>Y-Axes</h1>
        <h2>Column</h2>
        {context.settings.primaryAxisKeyType === "string" ? (
          <Notes
            type={"note"}
            text={"Count of different value will be used as height of the bar"}
          />
        ) : null}
        {context.settings.primaryAxisKeyType !== "" ? (
          context.settings.primaryAxisKeyType[0] === "[" ? (
            <Notes
              type={"note"}
              text={"Length of the array will be used as height of the bar"}
            />
          ) : null
        ) : null}
        {context.settings.useKeys ? (
          <Notes
            type={"note"}
            text={
              "The response has no object arrays; therefore select the keys you would like to use in the graph"
            }
          />
        ) : null}
        {!context.settings.useKeys ? (
          <RadioSelectionList
            list={columnOptions}
            selectedValue={context.settings.primaryAxisKey}
            onSelect={(key: string, keyType?: string, parentKey?: string) => {
              context.updatePrimaryAxisKey(key);
              if (parentKey !== context.settings.parentKey) {
                context.updateParentKey(parentKey);
                context.updateSecondaryAxisKey(undefined);
                context.updateSecondaryAxisKeyType(undefined);
              }
              context.updatePrimaryAxisKeyType(keyType);
            }}
          />
        ) : (
          <>
            <CheckBoxSelectionList
              list={columnOptions}
              selectedValue={context.settings.keysToUse}
              onSelect={(key: string, index: number) => {
                const keysToUse = context.settings.keysToUse as string[];
                if (index === -1) {
                  keysToUse.push(key);
                } else {
                  keysToUse.splice(index, 1);
                }
                context.updateKeysToUse(keysToUse);
              }}
            />
            <h2>Labels</h2>
            <Input
              type="text"
              value={
                context.settings.primaryAxisMin !== -Infinity
                  ? context.settings.primaryAxisMin
                  : ""
              }
              onChange={(event) => {
                context.updatePrimaryAxisMin(event?.target.value);
              }}
            />
          </>
        )}
        <h2>
          Range
          <Tags text={"not required"} />
        </h2>
        <RangeInput>
          <Input
            width={"40%"}
            type="number"
            placeholder="min"
            value={
              context.settings.primaryAxisMin !== -Infinity ? context.settings.primaryAxisMin : ""
            }
            onChange={(event) => {
              if (event?.target.value === "")
                context.updatePrimaryAxisMin(-Infinity);
              else context.updatePrimaryAxisMin(event?.target.value);
            }}
          />
          <>-</>
          <Input
            width={"40%"}
            type="number"
            placeholder="max"
            value={
              context.settings.primaryAxisMax !== Infinity ? context.settings.primaryAxisMax : ""
            }
            onChange={(event) => {
              if (event?.target.value === "")
                context.updatePrimaryAxisMax(Infinity);
              else context.updatePrimaryAxisMax(event?.target.value);
            }}
          />
        </RangeInput>
      </>
      {context.settings.useKeys ? (
        <Notes type={"note"} text={"Key name will be used as labels"} />
      ) : (
        <>
          <hr />
          <h1>X-Axes</h1>
          <h2>Column</h2>
          {context.settings.primaryAxisKey === "" ||
          context.settings.primaryAxisKeyType === "string" ? (
            context.settings.primaryAxisKeyType === "string" ? (
              <Notes
                type={"note"}
                text={"Different value will be used as X axes"}
              />
            ) : (
              <Notes
                type={"warning"}
                text={"Choose the Bar Height column first"}
              />
            )
          ) : context.settings.primaryAxisKey.includes("[]") === false ? (
            <Notes type={"warning"} text={"Key name will be used as X Axes"} />
          ) : (
            <>
              <RadioSelectionList
                list={labelOptions}
                selectedValue={context.settings.secondaryAxisKey}
                onSelect={(key: string) => {
                    context.updateSecondaryAxisKey(key);
                }}
              />
              {
                context.settings.secondaryAxisKeyType === "number" ?
                  <>
                    <h2>
                      Range
                      <Tags text={"not required"} />
                    </h2>
                    <RangeInput>
                      <Input
                        width={"40%"}
                        type="number"
                        placeholder="min"
                        value={
                          context.settings.secondaryAxisMin !== -Infinity ? context.settings.secondaryAxisMin : ""
                        }
                        onChange={(event) => {
                          if (event?.target.value === "")
                            context.updateSecondaryAxisMin(-Infinity);
                          else context.updateSecondaryAxisMin(event?.target.value);
                        }}
                      />
                      <>-</>
                      <Input
                        width={"40%"}
                        type="number"
                        placeholder="max"
                        value={
                          context.settings.secondaryAxisMax !== Infinity ? context.settings.secondaryAxisMax : ""
                        }
                        onChange={(event) => {
                          if (event?.target.value === "")
                            context.updateSecondaryAxisMax(Infinity);
                          else context.updateSecondaryAxisMax(event?.target.value);
                        }}
                      />
                    </RangeInput>
                  </>
                : null 
              }
            </>
          )}
        </>
      )}
    </div>
  );
};
