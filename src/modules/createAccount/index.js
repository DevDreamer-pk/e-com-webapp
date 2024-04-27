import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Content from "./content";
import { userService } from "../../services"; 
const CreateAccount = () => {
  const handleSubmit = async (formData) => {
    try {
      const response = await userService.signUp(formData);
      if (response) {
        console.log("User signed up successfully");
        toast.success("Account created successfully!")
      }
      console.log("response",response);
    } catch (error) {
      console.log("error", error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <Content onSubmit={handleSubmit} />
      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
};

export default CreateAccount;
