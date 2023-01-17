import React from "react";
import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };
  return (
    <div>
      <h2>Sign In Page</h2>
      <button onClick={logGoogleUser}>Sign in Google </button>
    </div>
  );
};

export default SignIn;
