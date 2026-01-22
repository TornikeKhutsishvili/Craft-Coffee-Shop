import styles from "../styles/form.module.css";
import button from "../styles/button.module.css";
import { useAdminContext } from "../contexts/AdminContext";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

const EditCoffeeForm = () => {
  const { id } = useParams();
  const { getCoffeeById, ingredients, updateCoffee } = useAdminContext();
  const navigate = useNavigate();

  const coffee = getCoffeeById(id);
  const [form, setForm] = useState(() => (coffee ? { ...coffee } : null));

  if (!form) return <p>Loading . . .</p>;

  const onChange = (e) => {
    const { id, value, options, multiple } = e.target;

    if (multiple) {
      const selected = Array.from(options)
        .filter((o) => o.selected)
        .map((o) => Number(o.value));

      setForm((prev) => ({ ...prev, [id]: selected }));
    } else {
      setForm((prev) => ({ ...prev, [id]: value }));
    }
  };

  const submitCoffeeForm = async () => {
    await updateCoffee(id, {
      ...form,
      price: Number(form.price),
      caffeine: Number(form.caffeine),
    });

    navigate("/");
  };

  return (
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
              value={form.title || ""}
              onChange={onChange}
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
              value={form.country || ""}
              onChange={onChange}
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
          value={form.description || ""}
          onChange={onChange}
          className={styles.formControl}
          required
        />
      </div>

      <div className={styles.formRow}>
        <div className={styles.formCol}>
          <div className={styles.formGroup}>
            <label htmlFor="image">Image URL</label>
            <input
              type="text"
              id="image"
              value={form.image || ""}
              onChange={onChange}
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
              value={form.price || ""}
              onChange={onChange}
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
          value={form.caffeine || ""}
          onChange={onChange}
          className={styles.formControl}
          required
          min="0"
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="ingredients">Ingredients</label>
        <select
          id="ingredients"
          value={form.ingredients || []}
          onChange={onChange}
          className={styles.formControl}
          multiple
        >
          {ingredients.map((ing) => (
            <option key={ing.id} value={ing.id}>
              {ing.name}
            </option>
          ))}
        </select>
        <small>Hold Ctrl (or Cmd) to select multiple ingredients</small>
      </div>

      <div className={styles.formGroup}>
        <button type="submit" className={`${button.btn} ${button.btnPrimary}`}>
          Update Coffee
        </button>
      </div>
    </form>
  );
};

export default EditCoffeeForm;
