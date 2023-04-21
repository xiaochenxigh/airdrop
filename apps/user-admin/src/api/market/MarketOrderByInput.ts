import { SortOrder } from "../../util/SortOrder";

export type MarketOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  marketAll?: SortOrder;
  marketLevel?: SortOrder;
  marketMe?: SortOrder;
  marketMin?: SortOrder;
  marketRewardAll?: SortOrder;
  marketRewardAvailable?: SortOrder;
  marketRewardTaked?: SortOrder;
  updatedAt?: SortOrder;
};
