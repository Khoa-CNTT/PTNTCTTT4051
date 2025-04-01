import routerUser from "./RouterUser";
import { createBrowserRouter, createRoutesFromElements } from "react-router";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {routerUser}
    </>
  )
);

export default Router;
