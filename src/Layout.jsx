import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router";

function Layout() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
