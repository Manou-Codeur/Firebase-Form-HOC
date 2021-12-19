import { useFormik } from "formik";
import * as Yup from "yup";

import * as schemas from "./yupSchemas";

const getInitValues = inputs => {
  const inputsObj = {};
  for (let i = 0; i < inputs.length; i++) {
    inputsObj[i] = inputs[i];
  }
  return inputsObj;
};

export const useCustomFormik = (formType, inputs, submitFunction) => {
  return useFormik({
    initialValues: getInitValues(inputs),
    validationSchema: Yup.object(schemas[`${formType}Schema`]),
    onSubmit: values => {
      submitFunction(values);
    },
  });
};
