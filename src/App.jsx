import React from "react";
import {
  createBrowserRouter,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Write from "./pages/Write";
import Single from "./pages/Single";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import "./style.scss";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/post/:id", element: <Single /> },
      { path: "/write", element: <Write /> },
    ],
  },
  {
    path: "/register",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <SignIn />,
  },
]);

function App() {
  return (
    <div>
      <div className="app">
        <div className="container">
          <RouterProvider router={router} />
        </div>
      </div>
    </div>
  );
}

export default App;
