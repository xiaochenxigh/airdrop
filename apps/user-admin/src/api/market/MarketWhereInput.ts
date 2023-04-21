import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type MarketWhereInput = {
  id?: StringFilter;
  marketAll?: FloatNullableFilter;
  marketLevel?: IntNullableFilter;
  marketMe?: FloatNullableFilter;
  marketMin?: FloatNullableFilter;
  marketRewardAll?: FloatNullableFilter;
  marketRewardAvailable?: FloatNullableFilter;
  marketRewardTaked?: FloatNullableFilter;
};
