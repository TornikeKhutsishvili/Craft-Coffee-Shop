import { createBrowserRouter, RouterProvider } from "react-router-dom";
import router from "./router";

function App() {
  return (
    <>
      <div className="app">
        <RouterProvider router={createBrowserRouter(router)} />
      </div>
    </>
  );
}

export default App;
