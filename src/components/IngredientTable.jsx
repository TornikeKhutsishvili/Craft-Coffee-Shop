import { useAdminContext } from "../contexts/AdminContext";
import button from "../styles/button.module.css";

const IngredientTable = () => {
  const {
    ingredients,
    setEditingIngredient,
    deleteIngredient,
    ingredientsLoading,
  } = useAdminContext();

  if (ingredientsLoading) return <p>Loading . . .</p>;

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Strength</th>
            <th>Flavor</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="ingredient-table-body">
          {ingredients.map((ingredient) => (
            <tr key={ingredient.id}>
              <td>{ingredient.id}</td>
              <td>{ingredient.name}</td>
              <td>₾{ingredient.price}</td>
              <td>{ingredient.strength}</td>
              <td>{ingredient.flavor}</td>
              <td>
                <button
                  className={`${button.btn} ${button.btnPrimary}`}
                  onClick={() => setEditingIngredient(ingredient)}
                >
                  Edit
                </button>
                <button
                  className={`${button.btn} ${button.btnDanger}`}
                  onClick={() => deleteIngredient(ingredient.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default IngredientTable;
