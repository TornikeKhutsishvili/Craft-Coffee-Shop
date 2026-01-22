import { createContext, useCallback, useContext, useMemo } from "react";
import useFetch from "../hooks/useFetch";
import useRequest from "../hooks/useRequest";

const AdminContext = createContext(null);
const API_URL = "http://localhost:3003";

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

  const addIngredient = useCallback(
    async (data) => {
      await sendRequest(data, `${API_URL}/ingredients`, "POST");
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

  const contextValue = useMemo(
    () => ({
      ingredients: ingredients || [],
      coffees: coffees || [],

      ingredientsLoading,
      coffeesLoading,
      ingredientsError,
      coffeesError,
      refetchCoffees,
      mutationLoading,

      addIngredient,
      deleteIngredient,
    }),
    [
      ingredients,
      coffees,
      ingredientsLoading,
      coffeesLoading,
      ingredientsError,
      coffeesError,
      refetchCoffees,
      mutationLoading,
      addIngredient,
      deleteIngredient,
    ],
  );

  return (
    <AdminContext.Provider value={contextValue}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdminContext = () => {
  const AdminContextValue = useContext(AdminContext);
  if (!AdminContextValue) throw new Error("Component not inside AdminProvider");
  return AdminContextValue;
};

export default AdminProvider;
