import React from "react";
import Content from "./content";
import { userService } from "../../services"; 
const SignUp = () => {

  const handleSubmit = async (formData) => {
    // Call the userService or perform any necessary action with the form data
    const response = await userService.signUp(formData);
    // Handle the response if needed
    if (response.success) {
      console.log("User signed up successfully");
    }
    console.log(response);
  };

  return <Content onSubmit={handleSubmit} />;
};

export default SignUp;
