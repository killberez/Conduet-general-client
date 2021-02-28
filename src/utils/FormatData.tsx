export default (data: any) => {
  if (Array.isArray(data)) {
    if (data.length === 0) return data;
    const dataTypeArray: string[] = data.map((d: any) => {
      if (Array.isArray(d)) return "array";
      return typeof d;
    });
    const uniqueDataType = dataTypeArray.filter(
      (item, i, ar) => ar.indexOf(item) === i
    );
    if (uniqueDataType.length === 1) return data;
    else {
      const dataObj: any = {};
      data.forEach((d: any, i: number) => {
        dataObj[`item#${i}`] = d;
      });
      return dataObj;
    }
  } else return data;
};
