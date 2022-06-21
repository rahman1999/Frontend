import { FormControl } from "@mui/material";

import FormLayout from "Components/Form/Layout/FormLayout";
import { TextInputField, SubmitButton } from "Components/Form";

import { ADD_CATEGORY } from "../CONSTANTS";
import { CREATE } from "../CONSTANTS";
import { CATEGORY_INITIAL_FORM_STATE } from "utils/initialFormState/auth";
import { addCategory } from "Reducer/statevalue";
import { ADD_CATEGORY_FORM_VALIDATION } from "utils/validation/formValidation";

const INITITAL_FORM_STATE = CATEGORY_INITIAL_FORM_STATE;

const AddProduct = () => {
  return (
    <div className=" container w-50">
      <FormLayout
        INITITAL_FORM_STATE={INITITAL_FORM_STATE}
        FORM_VALIDATION={ADD_CATEGORY_FORM_VALIDATION}
        data={INITITAL_FORM_STATE}
        apicall={addCategory}
        action={ADD_CATEGORY}
      >
        <FormControl margin="normal">
          <div className="h2">{ADD_CATEGORY}</div>
        </FormControl>
        <FormControl fullWidth={true} margin="normal">
          <TextInputField name="name" label="Name" margin="normal" />
        </FormControl>
        <FormControl fullWidth={true} margin="normal">
          <SubmitButton>{CREATE}</SubmitButton>
        </FormControl>
      </FormLayout>
    </div>
  );
};
export default AddProduct;
