import React from 'react';
import { TextField } from '@mui/material';
import { useField } from 'formik';

const PasswordInputField = ({
  name,
  ...otherProps
}) => {
  const [field, mata] = useField(name);

  const configTextfield = {
    ...field,
    ...otherProps,
    fullWidth: true,
    
  };
console.log("mata",mata)
  if (mata && mata.touched && mata.error) {
    configTextfield.error = true;
    configTextfield.helperText = mata.error;
  }
console.log("config",configTextfield)
  return (
    <TextField {...configTextfield} />
  );
};

export default PasswordInputField;