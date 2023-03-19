import { TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';
import React from 'react';

function InputField(props) {
  console.log(props);
  const { form, name, label, disabled } = props;
  const { errors, formState } = form;
  const hasError = formState.touched[name] && errors[name];

  return (
    <Controller
      name={name}
      control={form.control}
      as={TextField}
      variant="outlined"
      margin="normal"
      fullWidth
      label={label}
      disabled={disabled}
      error={!!hasError}
      helperText={errors[name]?.message}
    />
  );
}

export default InputField;
