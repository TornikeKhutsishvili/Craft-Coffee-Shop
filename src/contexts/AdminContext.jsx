import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import useFetch from "../hooks/useFetch";
import useRequest from "../hooks/useRequest";

const AdminContext = createContext(null);
const API_URL = "http://localhost:3004";

const AdminProvider = ({ children }) => {
  const {
    response: ingredients,
    loading: ingredientsLoading,
    error: ingredientsError,
    refetch: refetchIngredients,
  } = useFetch({ url: `${API_URL}/ingredients` });

  const {
    response: coffees,
    loading: coffeesLoading,
    error: coffeesError,
    refetch: refetchCoffees,
  } = useFetch({ url: `${API_URL}/coffees` });

  const { sendRequest, loading: mutationLoading } = useRequest();
  const [editingIngredient, setEditingIngredient] = useState(null);

  // INGREDIENTS
  const addIngredient = useCallback(
    async (data) => {
      const nextId =
        ingredients && ingredients.length > 0
          ? Math.max(...ingredients.map((i) => Number(i.id))) + 1
          : 1;
      const newIngredient = { ...data, id: nextId };
      await sendRequest(newIngredient, `${API_URL}/ingredients`, "POST");
      refetchIngredients();
    },
    [sendRequest, refetchIngredients, ingredients],
  );

  const deleteIngredient = useCallback(
    async (id) => {
      await sendRequest(null, `${API_URL}/ingredients/${Number(id)}`, "DELETE");
      refetchIngredients();
    },
    [sendRequest, refetchIngredients],
  );

  const updateIngredient = useCallback(
    async (id, data) => {
      await sendRequest(data, `${API_URL}/ingredients/${Number(id)}`, "PUT");
      refetchIngredients();
    },
    [sendRequest, refetchIngredients],
  );

  // COFFEES
  const addCoffee = useCallback(
    async (data) => {
      const nextId =
        coffees && coffees.length > 0
          ? Math.max(...coffees.map((c) => Number(c.id))) + 1
          : 1;

      const newCoffee = { ...data, id: nextId };

      await sendRequest(newCoffee, `${API_URL}/coffees`, "POST");
      refetchCoffees();
    },
    [sendRequest, refetchCoffees, coffees],
  );

  const updateCoffee = useCallback(
    async (id, data) => {
      await sendRequest(data, `${API_URL}/coffees/${Number(id)}`, "PUT");
      refetchCoffees();
    },
    [sendRequest, refetchCoffees],
  );

  const deleteCoffee = useCallback(
    async (id) => {
      await sendRequest(null, `${API_URL}/coffees/${Number(id)}`, "DELETE");
      refetchCoffees();
    },
    [sendRequest, refetchCoffees],
  );

  const getCoffeeById = useCallback(
    (id) => coffees?.find((c) => Number(c.id) === Number(id)),
    [coffees],
  );

  const contextValue = useMemo(
    () => ({
      ingredients: ingredients || [],
      coffees: coffees || [],

      ingredientsLoading,
      coffeesLoading,
      ingredientsError,
      coffeesError,
      mutationLoading,

      addIngredient,
      deleteIngredient,
      updateIngredient,
      editingIngredient,
      setEditingIngredient,

      addCoffee,
      updateCoffee,
      deleteCoffee,
      getCoffeeById,
    }),
    [
      ingredients,
      coffees,
      ingredientsLoading,
      coffeesLoading,
      ingredientsError,
      coffeesError,
      mutationLoading,

      addIngredient,
      deleteIngredient,
      editingIngredient,
      setEditingIngredient,
      updateIngredient,

      addCoffee,
      updateCoffee,
      deleteCoffee,
      getCoffeeById,
    ],
  );

  return (
    <AdminContext.Provider value={contextValue}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdminContext = () => {
  const contextValues = useContext(AdminContext);
  if (!contextValues) {
    throw new Error("Component not inside AdminProvider");
  }
  return contextValues;
};

export default AdminProvider;
