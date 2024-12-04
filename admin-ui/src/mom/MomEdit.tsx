import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const MomEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="nnk" source="nnk" />
      </SimpleForm>
    </Edit>
  );
};
