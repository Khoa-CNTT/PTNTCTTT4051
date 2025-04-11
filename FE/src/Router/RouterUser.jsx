import Layout from "../layout/User/layout";
import Login from "../pages/Login/login";
import Register from "../pages/Login/Register";
import { Route } from "react-router";
import VerifySuccess from "../pages/Login/VerifySuccess";
import UserResendForgot from "../pages/Login/userResendForgot";
import ResetPassword from "../pages/Login/ResetPassword";
import Homepage from "../pages/Home/Home";
import Search from "../pages/Search/Search";
import RoomDetails from "../pages/RoomDetails/RoomDetails";
import Profile from "../pages/profile/Profile";
import Contract from "../component/hopdong";
import Favourite from "../pages/Favourite/Favourite";

const routerUser = (
  <Route path="/" element={<Layout />}>
    <Route index element={<Homepage />} />
    <Route path="login" element={<Login />} />
    <Route path="register" element={<Register />} />
    <Route path="verify-email" element={<VerifySuccess />} />
    <Route path="resend-forgot-password" element={<UserResendForgot />} />
    <Route path="reset-password" element={<ResetPassword />} />
    <Route path="search" element={<Search />} />
    <Route path="details/:id" element={<RoomDetails />} />
    <Route path="profile" element={<Profile />} />
    <Route path="hopdong/:maphong" element={<Contract />} />
    <Route path="yeuthich" element={<Favourite />} />
  </Route>
);

export default routerUser;
