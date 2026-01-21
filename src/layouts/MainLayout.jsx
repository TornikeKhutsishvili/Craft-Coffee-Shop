import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <div className="main-layout-wrapper">
        <div className="container">
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
