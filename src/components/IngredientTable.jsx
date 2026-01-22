import { useAdminContext } from "../contexts/AdminContext";

const IngredientTable = () => {
  const { ingredients, deleteIngredients, ingredientsLoading } =
    useAdminContext();

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
          {ingredients.map((ingrItem) => (
            <tr key={ingrItem.id}>
              <td>{ingrItem.id}</td>
              <td>{ingrItem.name}</td>
              <td>$ {ingrItem.price}</td>
              <td>{ingrItem.strength}</td>
              <td>{ingrItem.flavor}</td>
              <td>
                <button onClick={() => deleteIngredients(ingrItem.id)}>
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
