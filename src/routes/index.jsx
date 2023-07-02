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
import OffersAdmin from "../pages/admin/OffersAdmin";
import NewsAdmin from "../pages/admin/NewsAdmin";
import NotFound from "../pages/client/Notfound";
import HomeSlider from "../pages/admin/HomeSlider";
import Meassage from "../pages/admin/Message";
import AdminMessageDetailPage from "../pages/admin/AdminMessageDetailPage";
import Add from "../pages/admin/Add";
import Wishlist from "../pages/client/Wishlist";
import Payment from "../pages/client/Payment";
import LogoAdmin from "../pages/admin/LogoAdmin";
import User from "../pages/client/User";

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
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "*",
        element: <NotFound />,
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
      {
        path: "/user",
        element: <User />,
      },
      {
        path: "/payment",
        element: <Payment />,
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
        path: "offers",
        element:<OffersAdmin/>
      },
      {
        path: "news",
        element:<NewsAdmin/>
      },
      {
        path: "home-slider",
        element: <HomeSlider />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "add",
        element: <Add />,
      },
      {
        path: "message",
        element: <Meassage />,
      },
      {
        path: "message/:id",
        element: <AdminMessageDetailPage />,
      },
      {
        path: "loginAdmin",
        element: <LoginAdmin />,
      },
      {
        path: "logoAdmin",
        element: <LogoAdmin />,
      },
    ],
  },
];

