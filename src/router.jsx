// Layout
import MainLayout from "./layouts/MainLayout";
// Pages
import Dashboard from "./pages/Dashboard";
import AddCoffee from "./pages/AddCoffee";
import AddIngredients from "./pages/AddIngredients";
// Error Page
import ErrorPage from "./pages/ErrorPage";

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
      {
        element: <AddIngredients />,
        path: "/add-ingredients",
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
