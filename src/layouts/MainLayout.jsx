import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <div className="main-layout-wrapper">
        <main>
          <div className="container">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
};

export default MainLayout;
