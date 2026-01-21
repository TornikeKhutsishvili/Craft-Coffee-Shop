const IngredientForm = () => {
  const submitIngredientForm = () => {};

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitIngredientForm();
        }}
      >
        <input type="hidden" id="ingredient-id" />

        <div className="form-row">
          <div className="form-col">
            <div className="form-group">
              <label for="name">Ingredient Name</label>
              <input type="text" id="name" className="form-control" required />
            </div>
          </div>
          <div className="form-col">
            <div className="form-group">
              <label for="price">Price ($)</label>
              <input
                type="number"
                id="price"
                className="form-control"
                step="0.01"
                min="0"
                required
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <label for="description">Description</label>
          <textarea
            id="description"
            className="form-control"
            required
          ></textarea>
        </div>

        <div className="form-row">
          <div className="form-col">
            <div className="form-group">
              <label for="strength">Strength</label>
              <select id="strength" className="form-control" required>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>
          <div className="form-col">
            <div className="form-group">
              <label for="flavor">Flavor Profile</label>
              <input
                type="text"
                id="flavor"
                className="form-control"
                required
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <button
            type="submit"
            id="submit-ingredient"
            className="btn btn-primary"
          >
            Add Ingredient
          </button>
        </div>
      </form>
    </>
  );
};

export default IngredientForm;
