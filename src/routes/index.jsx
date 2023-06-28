import About from "../pages/client/About";
import Contact from "../pages/client/Contact";
import Home from "../pages/client/Home";
import Register from "../pages/client/Register";
import MainRoot from "../pages/client/MainRoot";
import News from "../pages/client/News";
import Offers from "../pages/client/Offers";
import Login from "../pages/client/Login";
import AdminRoot from "../pages/admin/AdminRoot";
import Main from "../pages/admin/Main";
import Profile from "../pages/admin/Profile";
import LoginAdmin from "../pages/admin/LoginAdmin";
import HomeAdmin from "../pages/admin/HomeAdmin";
import Users from "../pages/admin/Users";

export const ROUTER = [
  {
    path: "/",
    element: <MainRoot />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
      {
        path: "",
        element: <Main />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "home",
        element:<HomeAdmin/>
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "loginAdmin",
        element: <LoginAdmin />,
      },
    ],
  },
];
