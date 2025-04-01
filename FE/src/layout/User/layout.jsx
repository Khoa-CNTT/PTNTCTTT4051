import { Outlet } from "react-router";
import Footer from "./footer";
import Header from "./header";
import ScrollToTop from "../../component/ScrollToTop";

function Layout() {
  return (
    <>
      <ScrollToTop />
      <div className="relative">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default Layout;
