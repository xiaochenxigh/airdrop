import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const MarketList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Markets"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="market_all" source="marketAll" />
        <TextField label="market_level" source="marketLevel" />
        <TextField label="market_me" source="marketMe" />
        <TextField label="market_min" source="marketMin" />
        <TextField label="market_reward_all" source="marketRewardAll" />
        <TextField
          label="market_reward_available"
          source="marketRewardAvailable"
        />
        <TextField label="market_reward_taked" source="marketRewardTaked" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
