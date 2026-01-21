const MainLayout = () => {
  return (
    <>
      <div className="main-layout-wrapper">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default MainLayout;
