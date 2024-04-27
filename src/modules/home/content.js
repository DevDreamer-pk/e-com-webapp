import React from "react";
import Header from "./../header/index";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Button } from "@material-tailwind/react";
import { Carousel } from "@material-tailwind/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const Content = () => {
  const products = [
    {
      id: 1,
      name: "Apple AirPods",
      price: "$95.00",
      description:
        "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: 1,
      name: "Apple AirPods",
      price: "$95.00",
      description:
        "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: 1,
      name: "Apple AirPods",
      price: "$95.00",
      description:
        "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: 1,
      name: "Apple AirPods",
      price: "$95.00",
      description:
        "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: 1,
      name: "Apple AirPods",
      price: "$95.00",
      description:
        "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
      imageUrl: "https://via.placeholder.com/300",
    },
    // Add more products here
  ];
  // Array of links
  const navLinks = [
    { name: "Woman's Fashion", link: "#" },
    { name: "Men's Fashion", link: "#" },
    { name: "Electronics", link: "#" },
    { name: "Home & Living", link: "#" },
    { name: "Medicine", link: "#" },
    { name: "Sports & Outdoor", link: "#" },
    { name: "Baby's & Toys", link: "#" },
    { name: "Groceries & Pets", link: "#" },
    { name: "Health and Beauty", link: "#" },
  ];
  return (
    <>
      <Header showCartIcon={true} />
      <div className="flex flex-col justify-start items-center h-dvh mt-24 bg-white">
        <div className="flex flex-col md:flex-row justify-center items-center h-1/2 w-full bg-white">
          <div className="order-2 md:order-1 flex flex-wrap md:w-1/4 bg-white flex justify-center items-center border-r-gray border-r-2">
            {/* Render navigation list */}
            <ul className="text-lg font-medium space-y-3 bg-white">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.link}
                    className="text-black hover:text-blue duration-500"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="order-1 md:order-2 md:w-9/12 md:h-full bg-white flex justify-center items-start ">
            <Carousel className="rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                alt="image 1"
                className="h-full w-full object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                alt="image 2"
                className="h-full w-full object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                alt="image 3"
                className="h-full w-full object-cover"
              />
            </Carousel>
          </div>
        </div>
        
        <div className="flex flex-col justify-start items-start md:w-11/12 bg-white">
          <p className="font-bold mt-5 text-red ">
            <span className="text-red font-bold w-22 h-14 border-2 border-full border-red bg-red">
              ABC
            </span>
            Today's
          </p>
          <div className="flex items-center md:flex-row w-full  h-1/3 bg-white">
            <div className="flex justify-start items-center w-full h-2/3 space-x-12 bg-white">
              <p className=" font-bold text-3xl "> Flash Sales</p>
              <p className="font-bold text-3xl"> 03 : 23 :19 : 56 </p>
            </div>
            <div className="flex justify-end items-center w-full h-2/3 bg-white">
              <div className="flex space-x-4 font-bold">
                <ArrowLeftIcon className="w-8 h-8 p-1 hover:cursor-pointer font-bold bg-gray rounded-full">
                  {" "}
                </ArrowLeftIcon>
                <ArrowRightIcon className="w-8 h-8 p-1 hover:cursor-pointer font-bold bg-gray rounded-full">
                  {" "}
                </ArrowRightIcon>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-between items-center mt-5 w-full h-auto bg-transparent">
            {products.map((product) => (
              <div key={product.id} className="w-full md:w-1/3 lg:w-1/5 p-4">
                <Card className="bg-gray shadow-2xl">
                  <CardHeader shadow={false} floated={false} className="h-64">
                    <img
                      src={product.imageUrl}
                      alt="card-image"
                      className="h-full w-full object-cover"
                    />
                  </CardHeader>
                  <CardBody>
                    <div className="mb-2 flex items-center justify-between">
                      <Typography color="blue-gray" className="font-medium">
                        {product.name}
                      </Typography>
                      <Typography color="blue-gray" className="font-medium">
                        {product.price}
                      </Typography>
                    </div>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal opacity-75"
                    >
                      {product.description}
                    </Typography>
                  </CardBody>
                  <CardFooter className="pt-0">
                    <Button
                      ripple={false}
                      fullWidth={true}
                      className="bg-blue text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                    >
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
          <div className=" flex justify-center items-center w-full h-1/4 bg-transparent">
            <Button 
            ripple={false}
            fullWidth={true}
            className="w-1/5 h-3/4 p-2 mt-5 mb-5 text-md  bg-green text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
            >View All Products</Button>
          </div>
        </div>

        <div className="flex flex-col justify-start items-start md:w-11/12 bg-white">
          <p className="font-bold mt-5 text-red ">
            <span className="text-red font-bold w-22 h-14 border-2 border-full border-red bg-red">
              ABC
            </span>
            Today's
          </p>
          <div className="flex items-center md:flex-row w-full  h-1/3 bg-white">
            <div className="flex justify-start items-center w-full h-2/3 space-x-12 bg-white">
              <p className=" font-bold text-3xl "> Flash Sales</p>
              <p className="font-bold text-3xl"> 03 : 23 :19 : 56 </p>
            </div>
            <div className="flex justify-end items-center w-full h-2/3 bg-white">
              <div className="flex space-x-4 font-bold">
                <ArrowLeftIcon className="w-8 h-8 p-1 hover:cursor-pointer font-bold bg-gray rounded-full">
                  {" "}
                </ArrowLeftIcon>
                <ArrowRightIcon className="w-8 h-8 p-1 hover:cursor-pointer font-bold bg-gray rounded-full">
                  {" "}
                </ArrowRightIcon>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-between items-center mt-5 w-full h-auto bg-transparent">
            {products.map((product) => (
              <div key={product.id} className="w-full md:w-1/3 lg:w-1/5 p-4">
                <Card className="bg-gray shadow-2xl">
                  <CardHeader shadow={false} floated={false} className="h-64">
                    <img
                      src={product.imageUrl}
                      alt="card-image"
                      className="h-full w-full object-cover"
                    />
                  </CardHeader>
                  <CardBody>
                    <div className="mb-2 flex items-center justify-between">
                      <Typography color="blue-gray" className="font-medium">
                        {product.name}
                      </Typography>
                      <Typography color="blue-gray" className="font-medium">
                        {product.price}
                      </Typography>
                    </div>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal opacity-75"
                    >
                      {product.description}
                    </Typography>
                  </CardBody>
                  <CardFooter className="pt-0">
                    <Button
                      ripple={false}
                      fullWidth={true}
                      className="bg-blue text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                    >
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
          <div className=" flex justify-center items-center w-full h-1/4 bg-transparent">
            <Button 
            ripple={false}
            fullWidth={true}
            className="w-1/5 h-3/4 p-2 mt-5 mb-5 text-md  bg-green text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
            >View All Products</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
