const IngredientTable = () => {
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
        <tbody id="ingredient-table-body"></tbody>
      </table>
    </>
  );
};

export default IngredientTable;
