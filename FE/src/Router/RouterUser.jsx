import Layout from "../layout/User/layout";
import Login from "../pages/Login/login";
import Register from "../pages/Login/Register";
import { Route } from "react-router";
import VerifySuccess from "../pages/Login/VerifySuccess";
import UserResendForgot from "../pages/Login/userResendForgot";
import ResetPassword from "../pages/Login/ResetPassword";
import Homepage from "../pages/Home/Home";

const routerUser = (
  <Route path="/" element={<Layout />}>
    <Route index element={<Homepage />} />
    <Route path="login" element={<Login />} />
    <Route path="register" element={<Register />} />
    <Route path="verify-email" element={<VerifySuccess />} />
    <Route path="resend-forgot-password" element={<UserResendForgot />} />
    <Route path="reset-password" element={<ResetPassword />} />
  </Route>
);

export default routerUser;
