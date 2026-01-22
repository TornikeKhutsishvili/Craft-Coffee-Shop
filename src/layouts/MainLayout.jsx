import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
// import layout from "../styles/MainLayout.module.css";

const MainLayout = () => {
  return (
    <>
      <Sidebar />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
