import routerAdmin from "./RouterAdmin";
import routerUser from "./RouterUser";
import { createBrowserRouter, createRoutesFromElements } from "react-router";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {routerUser}
      {routerAdmin}
    </>
  )
);

export default Router;
