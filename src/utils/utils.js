import numeral from "numeral";

export const formatNumber = (value) => {
  return numeral(value).format("0,0");
};
