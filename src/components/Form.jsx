const Form = () => {
  return (
    <>
      <form
        id="coffee-form"
        onsubmit="
              submitCoffeeForm();
              return false;
            "
      >
        <div class="form-row">
          <div class="form-col">
            <div class="form-group">
              <label for="title">Coffee Name</label>
              <input type="text" id="title" class="form-control" required />
            </div>
          </div>
          <div class="form-col">
            <div class="form-group">
              <label for="country">Country of Origin</label>
              <input type="text" id="country" class="form-control" required />
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
              <label for="image">Image URL</label>
              <input
                type="text"
                id="image"
                class="form-control"
                placeholder="https://example.com/image.jpg"
              />
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
                required
                min="0"
              />
            </div>
          </div>
        </div>

        <div class="form-group">
          <label for="caffeine">Caffeine (mg)</label>
          <input
            type="number"
            id="caffeine"
            class="form-control"
            required
            min="0"
          />
        </div>

        <div class="form-group">
          <label for="ingredients">Ingredients</label>
          <select id="ingredients" class="form-control" multiple></select>
          <small>Hold Ctrl (or Cmd) to select multiple ingredients</small>
        </div>

        <div class="form-group">
          <button type="submit" class="btn btn-primary">
            Add Coffee
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
