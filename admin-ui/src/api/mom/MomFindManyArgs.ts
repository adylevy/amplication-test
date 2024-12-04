import { MomWhereInput } from "./MomWhereInput";
import { MomOrderByInput } from "./MomOrderByInput";

export type MomFindManyArgs = {
  where?: MomWhereInput;
  orderBy?: Array<MomOrderByInput>;
  skip?: number;
  take?: number;
};
