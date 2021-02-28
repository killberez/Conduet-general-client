import GetDataValue from "./GetDataValue";
import _ from 'lodash';

export default (
  data: any,
  primaryKey: string,
  primaryKeyType: string,
  secondaryKey: string,
  parentKey: string,
  useKeys: boolean,
  keysToUse: string[]
) => {
  if (!useKeys) {
    const parentKeyFormatted =
      parentKey !== undefined
        ? parentKey.split("[]")[0].replace("_root_", "data")
        : "data";
    const parentKeyList = parentKeyFormatted.split(".");
    let arrString = "";
    parentKeyList.forEach((s: string, i: number) => {
      if (i !== 0) arrString = `${arrString}["${s}"]`;
    });

    const arr = _.get(data, arrString);
    const primaryChildKey = primaryKey
      ?.replace(parentKey, "")
      .replace("[]", "");

    const secondaryChildKey = secondaryKey
      ?.replace(parentKey, "")
      .replace("[]", "");
    if (Array.isArray(arr)) {
      const obj = arr.map((d: any, i: number) => {
        if (primaryKeyType === "string")
          return GetDataValue(d, primaryChildKey);

        const value =
          primaryKeyType === "["
            ? GetDataValue(d, primaryChildKey).length
            : GetDataValue(d, primaryChildKey);

        const label =
          primaryKeyType !== "string"
            ? secondaryKey
              ? `${GetDataValue(d, secondaryChildKey)}`
              : `index#${i}`
            : undefined;

        return {
          value,
          label,
          labelIndex: `${i}`,
        };
      });
      const counts = Object.create(null);
      // tslint:disable-next-line: no-shadowed-variable
      let dataObj = obj;
      if (primaryKeyType === "string") {
        obj.forEach((d) => {
          counts[d] = counts[d] ? counts[d] + 1 : 1;
        });
        dataObj = Object.keys(counts).map((d: string, i: number) => {
          return {
            value: counts[d],
            label: d,
            labelIndex: `${i}`,
          };
        });
      }
      return dataObj;
    } else {
      const pKey = primaryChildKey?.substr(1);
      // tslint:disable-next-line: no-shadowed-variable
      const dataObj = [
        {
          value: GetDataValue(arr, pKey),
          label: pKey,
          labelIndex: `${0}`,
        },
      ];
      return dataObj;
    }
  }
  const dataObj = keysToUse?.map((d: string, i: number) => {
    const pKey = d.replace("_root_.", "");
    return {
      value: GetDataValue(data, pKey),
      label: pKey,
      labelIndex: `${i}`,
    };
  });
  return dataObj;
};
