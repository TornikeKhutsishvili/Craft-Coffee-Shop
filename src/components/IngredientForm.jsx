import { useAdminContext } from "../contexts/AdminContext";
import styles from "../styles/form.module.css";
import button from "../styles/button.module.css";
import { useState } from "react";

const IngredientForm = () => {
  const { addIngredient } = useAdminContext;

  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    strength: "Low",
    flavor: "",
  });

  const submitIngredientForm = async () => {
    await addIngredient({
      ...form,
      price: Number(form.price),
    });

    setForm({
      name: "",
      price: "",
      description: "",
      strength: "Low",
      flavor: "",
    });
  };

  const onChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitIngredientForm();
        }}
      >
        <div className={styles.formRow}>
          <div className={styles.formCol}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Ingredient Name</label>
              <input
                type="text"
                id="name"
                value={form.name}
                onChange={onChange}
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
                value={form.price}
                onChange={onChange}
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
            value={form.description}
            onChange={onChange}
            className={styles.formControl}
            required
          />
        </div>

        <div className={styles.formRow}>
          <div className={styles.formCol}>
            <div className={styles.formGroup}>
              <label htmlFor="strength">Strength</label>
              <select
                id="strength"
                value={form.strength}
                onChange={onChange}
                className={styles.formControl}
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>

          <div className={styles.formCol}>
            <div className={styles.formGroup}>
              <label htmlFor="flavor">Flavor</label>
              <input
                type="text"
                id="flavor"
                value={form.flavor}
                onChange={onChange}
                className={styles.formControl}
                required
              />
            </div>
          </div>
        </div>

        <button type="submit" className={`${button.btn} ${button.btnPrimary}`}>
          Add Ingredient
        </button>
      </form>
    </>
  );
};

export default IngredientForm;
