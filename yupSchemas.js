import * as Yup from "yup";

//Yup schema
export const singupSchema = {
  name: Yup.string()
    .matches(/^[a-z ,.'-]+$/i, { message: "Invalid Username" })
    .max(55)
    .min(8)
    .required("Name is required!")
    .trim(),
  email: Yup.string().email("Email is invalid!").required("Email is required!"),
  password: Yup.string()
    .strict()
    .lowercase("Password must contain only lowercase!")
    .min(6, "Password must contain at least 6 chars!")
    .required("Password is required!"),
  confirmPassword: Yup.string()
    .equals([Yup.ref("password"), null], "Passwords doesn't match!")
    .required("Password confirmation is required!"),
};

export const singinSchema = {
  email: Yup.string().email("Email is invalid!").required("Email is required!"),
  password: Yup.string().strict().required("Password is required!"),
};
