import _ from 'lodash';

export default (data: any, key?: string) => {
  const keyList = key?.split(".");
  let dataString = "";
  keyList?.forEach((s: string) => {
    if (s !== "") dataString = `${dataString}["${s}"]`;
  });
  return _.get(data,dataString);
};
