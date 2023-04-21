import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const MarketEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
