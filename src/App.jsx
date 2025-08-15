import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from './Component/Header';
import Home from "./Component/Home";
import Member from './Component/Member';
import React from 'react';
import Event from "./Component/Event";
import Project from "./Component/Project";
import Research from "./Component/Research";
import Contact from "./Component/Contact";
import CurrentMember from "./Component/CurrentMember";
import Interns from "./Component/Interns";
import Alumni from "./Component/Alumni";
import ReadMore from "./Component/ReadMore";
import Footer from "./Component/Footer";




// Layout component to wrap around all routes
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet /> {/* This renders the nested route components */}
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,  // Layout wraps all nested routes
    children: [
      {
        path: "Home",
        element: <Home />,
      },
      {
        path: "Member",
        element: <Member />,
        
      },
       {
         path: "readmore/:name", 
         element: <ReadMore /> 

      },
    
       {
        path: "Alumni",
        element: <Alumni />,
      },
       {
        path: "Interns",
        element: <Interns />,
      },
      {
        path: "Contact",
        element: <Contact />,
      },
      {
        path: "Research",
        element: <Research />,
      },
      {
        path: "project",
        element: < Project />,
      },
      {
        path: "Event",
        element: <Event />,
      },
      {
        index: true, // Default route for "/"
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
