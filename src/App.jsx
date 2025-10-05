import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./Component/Header";
import Home from "./Component/Home";
import React from "react";
import Event from "./Component/Event";
import Project from "./Component/Project";
import Research from "./Component/Research";
import Contact from "./Component/Contact";
import Interns from "./Component/Interns";
import CurrentMember from "./Component/CurrentMember";
import Alumni from "./Component/Alumni";
import Login from "./Component/Login";
import About from "./Component/About";
import MemberDetail from "./Component/MemberDetail";

import { AuthProvider } from "./Component/context/AuthContext";
import ProtectedRoute from "./Component/ProtectedRoute";
import UploadAchievement from "./Component/UploadAchievement";
import AdminDashboard from "./Component/AdminDashboard";
import ErrorPage from "./Component/ErrorPage";   // updated error page

// Layout component to wrap around all routes
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const MemberLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />, // ✅ handles errors & 404s
    children: [
      { path: "Home", element: <Home /> },
      { path: "Login", element: <Login /> },

      {
        path: "Member",
        element: <MemberLayout />,
        children: [
          { path: "current-members", element: <CurrentMember /> },
          { path: "alumni", element: <Alumni /> },
          { path: "interns", element: <Interns /> },
        ],
      },

      { path: "member/:type/:id", element: <MemberDetail /> },
      { path: "Contact", element: <Contact /> },
      { path: "Research", element: <Research /> },
      { path: "project", element: <Project /> },
      { path: "Event", element: <Event /> },

      {
        element: <ProtectedRoute />,
        children: [
          { path: "admin/upload/:memberId", element: <UploadAchievement /> },
          { path: "admin-dashboard", element: <AdminDashboard /> },
        ],
      },

      { index: true, element: <Home /> },
    ],
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
