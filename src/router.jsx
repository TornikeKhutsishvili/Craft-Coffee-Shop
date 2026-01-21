import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";

const router = [
  // Nested Router
  {
    element: <MainLayout />,
    children: [
      {
        element: <Dashboard />,
        index: true,
      },
      {
        element: <AddCoffee />,
        path: "/add-coffee",
      },
    ],
  },

  // Dynamic Router

  // Error Handling Router
  {
    element: <ErrorPage />,
    path: "*",
  },
];

export default router;
