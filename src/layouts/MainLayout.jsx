import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const MainLayout = () => {
  return (
    <>
      <div className="main-layout-wrapper">
        <Sidebar />
        <div className="container">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
