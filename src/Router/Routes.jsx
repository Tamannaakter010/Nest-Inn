import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";

import Signup from "../Pages/Signin";
import Hotels from "../Pages/Hotels";
import Experience from "../Pages/Experience";
import About from "../Pages/About";
import RoomDetails from "../Pages/RoomDetails";
import MyBookings from "../Pages/MyBookings";
import Layout from "../Pages/HotelOwner/Layout";
import Dashboard from "../Pages/HotelOwner/Dashboard";
import AddRoom from "../Pages/HotelOwner/AddRoom";
import ListRoom from "../Pages/HotelOwner/ListRoom"; 
import AllOffers from "../Components/ExclusiveOffers/AllOffers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "rooms",
        element: <Hotels />,
      },
      {
        path: "room/:id",
        element: <RoomDetails />,
      },
      {
        path: "mybookings",
        element: <MyBookings />,
      },
      {
        path: "offers",
        element: <AllOffers />,
      },
      {
        path: "experience",
        element: <Experience />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "owner",
        element: <Layout />,
        children: [
          {
            path: "",
            element: <Dashboard />,
          },
          {
            path: "add-room",
            element: <AddRoom />,
          },
          {
            path: "list-room",
            element: <ListRoom />,
          },
        ],
      },
     
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
]);