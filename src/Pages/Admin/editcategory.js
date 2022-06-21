import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editcategory } from "Reducer/statevalue";

import { FormControl } from "@mui/material";
import FormLayout from "Components/Form/Layout/FormLayout";
import { TextInputField, SubmitButton } from "Components/Form";
import { EDIT_CATEGORY } from "../CONSTANTS";
import { UPDATE_CATEGORY } from "../CONSTANTS";
import { CREATE } from "../CONSTANTS";
import { updateCategory } from "Reducer/statevalue";
import { EDIT_CATEGORY_FORM_VALIDATION } from "utils/validation/formValidation";
const FORM_VALIDATION = EDIT_CATEGORY_FORM_VALIDATION;

function EditCategory() {
  const dispatch = useDispatch();
  const [editdata] = useSelector(
    (state) => state.tokenvalue.value.editcategory
  );

  const { id } = useParams();

  // const [categoryid,setId] =useState(null)
  // console.log(categoryid)
  useEffect(() => {
    dispatch(editcategory({ id }));
    // setId(editdata.id)
  });
  function valid() {
    // console.log(editdata.id, editdata.category_name);
    return {
      id: editdata.id,
      category_name: editdata.category_name,
    };
  }

  return (
    <>
      <div>
        {editdata && (
          <>
            <p>{editdata.id}</p>
            <p>{editdata.category_name}</p>
          </>
        )}
      </div>
      <div className=" container w-50">
        {editdata && (
          <React.Fragment>
            <FormLayout
              key={EDIT_CATEGORY}
              INITITAL_FORM_STATE={valid()}
              FORM_VALIDATION={FORM_VALIDATION}
              data={valid()}
              apicall={updateCategory}
              action={UPDATE_CATEGORY}
            >
              <FormControl margin="normal">
                <div className="h2">{EDIT_CATEGORY}</div>
              </FormControl>
              <FormControl fullWidth={true} margin="normal">
                <TextInputField
                  name="category_name"
                  label="Category Name"
                  margin="normal"
                />
              </FormControl>

              <FormControl fullWidth={true} margin="normal">
                <SubmitButton>{CREATE}</SubmitButton>
              </FormControl>
            </FormLayout>
          </React.Fragment>
        )}
      </div>
    </>
  );
}

export default EditCategory;
