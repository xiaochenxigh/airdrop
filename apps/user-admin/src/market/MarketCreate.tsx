import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const MarketCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="market_all" source="marketAll" />
        <NumberInput step={1} label="market_level" source="marketLevel" />
        <NumberInput label="market_me" source="marketMe" />
        <NumberInput label="market_min" source="marketMin" />
        <NumberInput label="market_reward_all" source="marketRewardAll" />
        <NumberInput
          label="market_reward_available"
          source="marketRewardAvailable"
        />
        <NumberInput label="market_reward_taked" source="marketRewardTaked" />
      </SimpleForm>
    </Create>
  );
};
