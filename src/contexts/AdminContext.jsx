import { createContext, useCallback, useContext, useMemo } from "react";
import useFetch from "../hooks/useFetch";
import useRequest from "../hooks/useRequest";

const AdminContext = createContext(null);
const API_URL = "http://localhost:3001";

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

  const { sendRequest, loading: mutationLoading } = useRequest({});

  const getIngredient = useCallback(
    (id) => sendRequest(null, `${API_URL}/ingredients/${id}`),
    [sendRequest],
  );

  const addIngredient = useCallback(
    async (data) => {
      await sendRequest(data, `${API_URL}/ingredients`, "POST");
      refetchIngredients();
    },
    [sendRequest, refetchIngredients],
  );

  const editIngredient = useCallback(
    async (id, data) => {
      await sendRequest(data, `${API_URL}/ingredients/${id}`, "PUT");
      refetchIngredients();
    },
    [sendRequest, refetchIngredients],
  );

  const deleteIngredient = useCallback(
    async (id) => {
      await sendRequest(null, `${API_URL}/ingredients/${id}`, "DELETE");
      refetchIngredients();
    },
    [sendRequest, refetchIngredients],
  );

  const getCoffee = useCallback(
    (id) => sendRequest(null, `${API_URL}/coffees/${id}`),
    [sendRequest],
  );

  const addCoffee = useCallback(
    async (data) => {
      await sendRequest(data, `${API_URL}/coffees`, "POST");
      refetchCoffees();
    },
    [sendRequest, refetchCoffees],
  );

  const editCoffee = useCallback(
    async (id, data) => {
      await sendRequest(data, `${API_URL}/coffees/${id}`, "PUT");
      refetchCoffees();
    },
    [sendRequest, refetchCoffees],
  );

  const deleteCoffee = useCallback(
    async (id) => {
      await sendRequest(null, `${API_URL}/coffees/${id}`, "DELETE");
      refetchCoffees();
    },
    [sendRequest, refetchCoffees],
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

      getIngredient,
      addIngredient,
      editIngredient,
      deleteIngredient,

      getCoffee,
      addCoffee,
      editCoffee,
      deleteCoffee,
    }),
    [
      ingredients,
      coffees,
      ingredientsLoading,
      coffeesLoading,
      ingredientsError,
      coffeesError,
      mutationLoading,
      getIngredient,
      addIngredient,
      editIngredient,
      deleteIngredient,
      getCoffee,
      addCoffee,
      editCoffee,
      deleteCoffee,
    ],
  );

  return (
    <AdminContext.Provider value={contextValue}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdminContext = () => {
  const contextValue = useContext(AdminContext);
  if (!contextValue)
    throw new Error("Your component in not inside AdminProvider");

  return contextValue;
};

export default AdminProvider;
