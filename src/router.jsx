// Layout
import MainLayout from "./layouts/MainLayout";
// Pages
import Dashboard from "./pages/Dashboard";
import AddCoffee from "./pages/AddCoffee";
import AddIngredients from "./pages/AddIngredients";
import EditCoffee from "./pages/EditCoffee";
import CoffeeDetail from "./pages/CoffeeDetail";
// Error Page
import ErrorPage from "./pages/ErrorPage";

const router = [
  // Nested Routes
  {
    element: <MainLayout />,
    children: [
      {
        element: <Dashboard />,
        path: "/",
      },
      {
        element: <AddCoffee />,
        path: "/add-coffee",
      },
      {
        element: <AddIngredients />,
        path: "/add-ingredients",
      },

      // dynamic Routes
      {
        element: <EditCoffee />,
        path: "/edit-coffee/:id",
      },
      {
        element: <CoffeeDetail />,
        path: "/coffee-detail/:id",
      },
    ],
  },

  // Error Handling Routes
  {
    element: <ErrorPage />,
    path: "*",
  },
];

export default router;
