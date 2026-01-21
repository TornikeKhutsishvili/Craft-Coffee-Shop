const Form = () => {
  const submitCoffeeForm = () => {};

  return (
    <>
      <form
        id="coffee-form"
        onSubmit={(e) => {
          e.preventDefault();
          submitCoffeeForm();
        }}
      >
        <div className="form-row">
          <div className="form-col">
            <div className="form-group">
              <label for="title">Coffee Name</label>
              <input type="text" id="title" className="form-control" required />
            </div>
          </div>
          <div className="form-col">
            <div className="form-group">
              <label for="country">Country of Origin</label>
              <input
                type="text"
                id="country"
                className="form-control"
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
              <label for="image">Image URL</label>
              <input
                type="text"
                id="image"
                className="form-control"
                placeholder="https://example.com/image.jpg"
              />
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
                required
                min="0"
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <label for="caffeine">Caffeine (mg)</label>
          <input
            type="number"
            id="caffeine"
            className="form-control"
            required
            min="0"
          />
        </div>

        <div className="form-group">
          <label for="ingredients">Ingredients</label>
          <select id="ingredients" className="form-control" multiple></select>
          <small>Hold Ctrl (or Cmd) to select multiple ingredients</small>
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Add Coffee
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
