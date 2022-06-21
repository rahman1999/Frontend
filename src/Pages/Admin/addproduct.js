import { FormControl } from "@mui/material";

import FormLayout from "Components/Form/Layout/FormLayout";
import { TextInputField, SubmitButton, ImageInputField } from "Components/Form";

import { ADD_PRODUCT } from "../CONSTANTS";
import { CREATE } from "../CONSTANTS";
import { PRODUCT_INITIAL_FORM_STATE } from "utils/initialFormState/auth";
import { addProduct } from "Reducer/statevalue";
import { ADD_PRODUCT_FORM_VALIDATION } from "utils/validation/formValidation";

const INITITAL_FORM_STATE = PRODUCT_INITIAL_FORM_STATE;
const FORM_VALIDATION = ADD_PRODUCT_FORM_VALIDATION;

const AddProduct = () => {
  return (
    <div className=" container w-50">
      <FormLayout
        INITITAL_FORM_STATE={INITITAL_FORM_STATE}
        FORM_VALIDATION={FORM_VALIDATION}
        data={INITITAL_FORM_STATE}
        apicall={addProduct}
        action={ADD_PRODUCT}
      >
        <FormControl margin="normal">
          <div className="h2">{ADD_PRODUCT}</div>
        </FormControl>
        <FormControl fullWidth={true} margin="normal">
          <TextInputField name="name" label="Name" margin="normal" />
        </FormControl>
        <FormControl fullWidth={true} margin="normal">
          <TextInputField name="price" label="Price" type="number" />
        </FormControl>
        <FormControl fullWidth={true} margin="normal">
          <TextInputField name="product_id" label="Product Id" type="number" />
        </FormControl>

        <FormControl fullWidth={true} margin="normal">
          <ImageInputField name="image" type="file"></ImageInputField>
        </FormControl>
        <FormControl fullWidth={true} margin="normal">
          <SubmitButton>{CREATE}</SubmitButton>
        </FormControl>
      </FormLayout>
    </div>
  );
};
export default AddProduct;
