import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const MarketShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
