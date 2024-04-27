import React, { useState } from "react";
import Header from "./../header/index";
import Footer from "./../footer/index";

const Content = () => {
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
    console.log(formData);
  };

  return (
    <>
      <div className="overflow-hidden">
        <Header />
      </div>
      <div className="flex flex-col md:flex-row h-screen bg-white overflow-hidden">
        <div className="flex justify-center items-center py-8 h-full md:w-3/5 bg-white ">
          <img
            className="h-4/5 w-full bg-white p-2 shadow-2xl"
            src="https://wallpapercave.com/wp/wp1877575.jpg"
            alt="Image"
          />
        </div>
        <div className="flex justify-center items-center h-full md:w-2/5 bg-white">
          <form
            className="w-3/5 h-full flex flex-col justify-center shadow-2xl p-8"
            onSubmit={handleSubmit}
          >
            <div className="mb-8">
              <h1 className="text-3xl font-medium">Log In to GoShoppy</h1>
              <h6 className="text-md">Enter your details below</h6>
            </div>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border-b-2 border-b-black focus:outline-none"
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
                className="w-full px-3 py-2 border-b-2 border-b-black focus:outline-none "
                placeholder="Password"
                required
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-red py-2 bg-accent text-white rounded-md hover:bg-blue"
              >
                Log In
              </button>
            </div>
            <div className="text-center mt-4 mb-4 text-sm text-gray dark:text-gray">
              <p>
                <a href="#" className="text-red">
                  Forget Password?
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
