import { Market as TMarket } from "../api/market/Market";

export const MARKET_TITLE_FIELD = "id";

export const MarketTitle = (record: TMarket): string => {
  return record.id || String(record.id);
};
