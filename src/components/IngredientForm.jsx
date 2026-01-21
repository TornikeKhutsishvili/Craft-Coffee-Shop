import styles from "../styles/form.module.css";
import button from "../styles/button.module.css";

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

        <div className={styles.formRow}>
          <div className={styles.formCol}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Ingredient Name</label>
              <input
                type="text"
                id="name"
                className={styles.formControl}
                required
              />
            </div>
          </div>
          <div className={styles.formCol}>
            <div className={styles.formGroup}>
              <label htmlFor="price">Price ($)</label>
              <input
                type="number"
                id="price"
                className={styles.formControl}
                step="0.01"
                min="0"
                required
              />
            </div>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            className={styles.formControl}
            required
          ></textarea>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formCol}>
            <div className={styles.formGroup}>
              <label htmlFor="strength">Strength</label>
              <select id="strength" className={styles.formControl} required>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>
          <div className={styles.formCol}>
            <div className={styles.formGroup}>
              <label htmlFor="flavor">Flavor Profile</label>
              <input
                type="text"
                id="flavor"
                className={styles.formControl}
                required
              />
            </div>
          </div>
        </div>

        <div className={styles.formGroup}>
          <button
            type="submit"
            id="submit-ingredient"
            className={`${button.btn} ${button.btnPrimary}`}
          >
            Add Ingredient
          </button>
        </div>
      </form>
    </>
  );
};

export default IngredientForm;
