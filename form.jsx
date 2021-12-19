import { useState } from "react";

import { useCustomFormik } from "./helperFunctions";
import { handleErrors } from "./errorHandling";

const withForm = (Component, inputs) => props => {
  const formType = inputs.length <= 2 ? "singin" : "singup";

  const [waiting, setWaiting] = useState(false);

  //Should pass the firebase context to wrapped component as props
  const firebase = props.firebase;

  const {
    handleSubmit,
    touched,
    errors,
    handleChange,
    values,
    handleBlur,
    setErrors,
  } = useCustomFormik(formType, inputs, handleOnSubmit);

  async function handleOnSubmit({ email, password, name }) {
    setWaiting(true);
    try {
      let data;
      if (formType === "singin") {
        data = await firebase.doSignInWithEmailAndPassword(email, password);
      } else {
        data = await firebase.doCreateUserWithEmailAndPassword(email, password);

        // add the new user to database (optional)
        await firebase.addUser({
          uid: data.user.uid,
          name,
          email,
        });
      }

      //store the json web token in the localstorage (optional)
      localStorage.setItem(
        "user-authed",
        JSON.stringify(
          data.user.ya.split(".")[0] + "." + data.user.ya.split(".")[1]
        )
      );
      //Go to the home page (optional)
      props.history.push("/");
    } catch (error) {
      handleErrors("singin", error, setErrors);
    }
    setWaiting(false);
  }

  const moreProps = {
    handleSubmit,
    touched,
    errors,
    handleChange,
    values,
    handleBlur,
    waiting,
  };

  return <Component {...props} {...moreProps} />;
};

export default withForm;
