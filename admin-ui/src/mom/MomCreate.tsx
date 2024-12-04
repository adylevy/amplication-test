import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const MomCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="nnk" source="nnk" />
      </SimpleForm>
    </Create>
  );
};
