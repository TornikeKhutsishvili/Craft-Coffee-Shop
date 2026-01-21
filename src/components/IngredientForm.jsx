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

        <div class="form-row">
          <div class="form-col">
            <div class="form-group">
              <label for="name">Ingredient Name</label>
              <input type="text" id="name" class="form-control" required />
            </div>
          </div>
          <div class="form-col">
            <div class="form-group">
              <label for="price">Price ($)</label>
              <input
                type="number"
                id="price"
                class="form-control"
                step="0.01"
                min="0"
                required
              />
            </div>
          </div>
        </div>

        <div class="form-group">
          <label for="description">Description</label>
          <textarea id="description" class="form-control" required></textarea>
        </div>

        <div class="form-row">
          <div class="form-col">
            <div class="form-group">
              <label for="strength">Strength</label>
              <select id="strength" class="form-control" required>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>
          <div class="form-col">
            <div class="form-group">
              <label for="flavor">Flavor Profile</label>
              <input type="text" id="flavor" class="form-control" required />
            </div>
          </div>
        </div>

        <div class="form-group">
          <button type="submit" id="submit-ingredient" class="btn btn-primary">
            Add Ingredient
          </button>
        </div>
      </form>
    </>
  );
};

export default IngredientForm;
