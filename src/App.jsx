import { createBrowserRouter, RouterProvider } from "react-router-dom";
import router from "./router";
import AdminProvider from "./contexts/AdminContext";

function App() {
  return (
    <>
      <AdminProvider>
        <div className="app">
          <RouterProvider router={createBrowserRouter(router)} />
        </div>
      </AdminProvider>
    </>
  );
}

export default App;
