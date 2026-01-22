import { createBrowserRouter, RouterProvider } from "react-router-dom";
import router from "./router";
import AdminProvider from "./contexts/AdminContext";

const appRouter = createBrowserRouter(router);

function App() {
  return (
    <>
      <AdminProvider>
        <div className="app">
          <RouterProvider router={appRouter} />
        </div>
      </AdminProvider>
    </>
  );
}

export default App;
