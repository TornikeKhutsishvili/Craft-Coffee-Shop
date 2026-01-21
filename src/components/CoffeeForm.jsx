import styles from "../styles/form.module.css";
import button from "../styles/button.module.css";

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
        <div className={styles.formRow}>
          <div className={styles.formCol}>
            <div className={styles.formGroup}>
              <label htmlFor="title">Coffee Name</label>
              <input
                type="text"
                id="title"
                className={styles.formControl}
                required
              />
            </div>
          </div>
          <div className={styles.formCol}>
            <div className={styles.formGroup}>
              <label htmlFor="country">Country of Origin</label>
              <input
                type="text"
                id="country"
                className={styles.formControl}
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
              <label htmlFor="image">Image URL</label>
              <input
                type="text"
                id="image"
                className={styles.formControl}
                placeholder="https://example.com/image.jpg"
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
                required
                min="0"
              />
            </div>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="caffeine">Caffeine (mg)</label>
          <input
            type="number"
            id="caffeine"
            className={styles.formControl}
            required
            min="0"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="ingredients">Ingredients</label>
          <select
            id="ingredients"
            className={styles.formControl}
            multiple
          ></select>
          <small>Hold Ctrl (or Cmd) to select multiple ingredients</small>
        </div>

        <div className={styles.formGroup}>
          <button
            type="submit"
            className={`${button.btn} ${button.btnPrimary}`}
          >
            Add Coffee
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
