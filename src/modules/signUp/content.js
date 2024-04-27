import React, { useState } from "react";
import Header from "./../header/index";
import Footer from "./../footer/index";
const Content = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to backend
    onSubmit(formData); 
    console.log(formData);
  };
  return (
    <>
      <div>
        <Header />
      </div>
      <div className=" flex md:flex-row flex-col  h-screen w-screen bg-white">
        <div className=" flex justify-center items-center py-8 h-full md:w-3/5  bg-white">
          <img
            className="h-4/5 w-full p-2 bg-white shadow-2xl"
            src="https://wallpapercave.com/wp/wp1877575.jpg"
            alt="Image"
          ></img>
        </div>
        <div className="flex justify-center items-center  h-full md:w-2/5 bg-white">
          <form className="w-3/5 h-full flex flex-col bg-white justify-center flex-wrap " onSubmit={handleSubmit}>
            <div className="mb-4 space-y-2 mb-8">
              <h1 className="text-3xl font-medium">Create an account</h1>
              <h6 className="text-md">Enter your details below</h6>
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full h-10 px-3 py-2 border-b-2 border-b-black rounded-md focus:outline-none "
                placeholder="Name"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border-b-2 border-b-black rounded-md focus:outline-none"
                placeholder="Email or Phone Number"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border-b-2 border-b-black rounded-md focus:outline-none "
                placeholder="Password"
                required
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-red py-2 bg-accent text-white rounded-md hover:bg-blue"
              >
                Create Account
              </button>
            </div>
            <div className="text-center mt-4 mb-4 text-sm text-gray dark:text-gray">
              <p>
                Already have an account?{" "}
                <a href="/login" className="text-black hover:underline">
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Content;
