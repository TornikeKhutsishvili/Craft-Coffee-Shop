import { useEffect, useState } from "react";
import { useAdminContext } from "../contexts/AdminContext";
import styles from "../styles/form.module.css";
import button from "../styles/button.module.css";

const IngredientForm = () => {
  const {
    addIngredient,
    updateIngredient,
    editingIngredient,
    setEditingIngredient,
  } = useAdminContext();

  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    strength: "Low",
    flavor: "",
  });

  useEffect(() => {
    if (editingIngredient) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setForm({
        name: editingIngredient.name || "",
        price: editingIngredient.price?.toString() || "",
        description: editingIngredient.description || "",
        strength: editingIngredient.strength || "Low",
        flavor: editingIngredient.flavor || "",
      });
    }
  }, [editingIngredient]);

  const submitIngredientForm = async () => {
    const payload = {
      ...form,
      price: Number(form.price),
    };

    if (editingIngredient) {
      await updateIngredient(editingIngredient.id, payload);
      setEditingIngredient(null);
    } else {
      await addIngredient(payload);
    }

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
          {editingIngredient ? "Update Ingredient" : "Add Ingredient"}
        </button>
      </form>
    </>
  );
};

export default IngredientForm;
