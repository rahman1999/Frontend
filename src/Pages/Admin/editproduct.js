import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editproduct } from "Reducer/statevalue";

import { FormControl } from "@mui/material";
import FormLayout from "Components/Form/Layout/FormLayout";
import { TextInputField, SubmitButton, ImageInputField } from "Components/Form";
import { EDIT_PRODUCT } from "../CONSTANTS";
import { UPDATE_PRODUCT } from "../CONSTANTS";
import { CREATE } from "../CONSTANTS";
import { updateProduct } from "Reducer/statevalue";
import { EDIT_PRODUCT_FORM_VALIDATION } from "utils/validation/formValidation";
const FORM_VALIDATION = EDIT_PRODUCT_FORM_VALIDATION;

function EditProduct() {
  const dispatch = useDispatch();
  const [editdata] = useSelector((state) => state.tokenvalue.value.editproduct);
  const { id } = useParams();

  console.log(editdata);

  useEffect(() => {
    dispatch(editproduct({ id }));
  });

  function valid() {
    console.log(
      editdata.id,
      editdata.product_name,
      editdata.product_price,
      editdata.product_image
    );
    return {
      id: editdata.id,
      name: editdata.product_name,
      price: editdata.product_price,
      image: editdata.product_image,
    };
  }

  return (
    <div className=" container w-50">
      {editdata && (
        <React.Fragment>
          <FormLayout
            key={EDIT_PRODUCT}
            INITITAL_FORM_STATE={valid()}
            FORM_VALIDATION={FORM_VALIDATION}
            data={valid()}
            apicall={updateProduct}
            action={UPDATE_PRODUCT}
          >
            <FormControl margin="normal">
              <div className="h2">{EDIT_PRODUCT}</div>
            </FormControl>

            <FormControl fullWidth={true} margin="normal">
              <TextInputField
                name="name"
                label="Product Name"
                margin="normal"
              />
            </FormControl>

            <FormControl fullWidth={true} margin="normal">
              <TextInputField
                name="price"
                label="Product Price"
                margin="normal"
                type="number"
              />
            </FormControl>

            <FormControl fullWidth={true} margin="normal">
              <ImageInputField name="image" type="file"></ImageInputField>
            </FormControl>

            {/* <FormControl fullWidth={true} margin="normal">
              <TextInputField
                name="Product_image"
                label="Image"
                type="file"
                margin="normal"
              />
            </FormControl> */}

            <FormControl fullWidth={true} margin="normal">
              <SubmitButton>{CREATE}</SubmitButton>
            </FormControl>
          </FormLayout>
        </React.Fragment>
      )}
    </div>
  );
}

export default EditProduct;
