import { Mom as TMom } from "../api/mom/Mom";

export const MOM_TITLE_FIELD = "nnk";

export const MomTitle = (record: TMom): string => {
  return record.nnk?.toString() || String(record.id);
};
