import Layout from "../layout/User/layout";
import Login from "../pages/Login/login";
import Register from "../pages/Login/Register";
import { Route } from "react-router";

const routerUser = (
  <Route path="/" element={<Layout />}>
    <Route index />
    <Route path="login" element={<Login />} />
    <Route path="register" element={<Register />} />
  </Route>
);

export default routerUser;
