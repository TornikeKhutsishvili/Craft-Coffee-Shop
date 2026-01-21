import { createContext, useContext, useEffect, useState } from "react";

const AdminContext = createContext(null);
const API = "http://localhost:3001";

const AdminProvider = ({ children }) => {
  const [ingredients, setIngredients] = useState([]);
  const [coffees, setCoffees] = useState([]);

  const fetchAll = async () => {
    const [ingredResult, cofResult] = await Promise.all([
      fetch(`${API}/ingredients`),
      fetch(`${API}/coffees`),
    ]);

    setIngredients(await ingredResult.json());
    setCoffees(await cofResult.json());
  };

  // Ingredient
  const getIngredient = async (id) => {
    const res = await fetch(`${API}/ingredients/${id}`);
    if (!res.ok) throw new Error("Failed to fetch ingredient");
    return await res.json();
  };

  const addIngredient = async (data) => {
    await fetch(`${API}/ingredients`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    fetchAll();
  };

  const editIngredient = async (id, data) => {
    await fetch(`${API}/ingredients/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    fetchAll();
  };

  const deleteIngredient = async (id) => {
    await fetch(`${API}/ingredients/${id}`, { method: "DELETE" });
    fetchAll();
  };

  // Coffee
  const getCoffee = async (id) => {
    const res = await fetch(`${API}/coffees/${id}`);
    if (!res.ok) throw new Error("Failed to fetch coffee");
    return await res.json();
  };

  const addCoffee = async (data) => {
    await fetch(`${API}/coffees`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    fetchAll();
  };

  const editCoffee = async (id, data) => {
    await fetch(`${API}/coffees/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    fetchAll();
  };

  const deleteCoffee = async (id) => {
    await fetch(`${API}/coffees/${id}`, {
      method: "DELETE",
    });
  };

  useEffect(() => {
    (async () => {
      await fetchAll();
    })();
  }, []);

  return (
    <AdminContext.Provider
      value={{
        ingredients,
        coffees,
        getIngredient,
        addIngredient,
        editIngredient,
        deleteIngredient,
        getCoffee,
        addCoffee,
        editCoffee,
        deleteCoffee,
      }}
    >
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
