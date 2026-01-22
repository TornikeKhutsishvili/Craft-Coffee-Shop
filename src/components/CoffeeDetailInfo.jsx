import button from "../styles/button.module.css";
import styles from "../styles/coffeeDetail.module.css";

const CoffeeDetailInfo = ({ coffee, onEdit, onDelete }) => {
  if (!coffee) {
    return <p>Loading coffee...</p>;
  }

  return (
    <>
      <div className={styles.coffeeImage}>
        <img src={coffee.image} alt={coffee.title} />
      </div>

      <div className={styles.coffeeInfo}>
        <h2 className={styles.coffeeTitle}>{coffee.title}</h2>

        <div className={styles.coffeeMeta}>
          <span className={styles.metaItem}>
            Origin: <span>{coffee.country}</span>
          </span>

          <span className={styles.metaItem}>
            Caffeine: <span>{coffee.caffeine}mg</span>
          </span>

          <span className={styles.metaItem}>
            Price: $<span>{coffee.price}</span>
          </span>
        </div>

        <p className={styles.coffeeDescription}>{coffee.description}</p>

        <div className={styles.ingredientsList}>
          <h3 className={styles.ingredientsTitle}>Ingredients</h3>

          <div>
            {coffee.ingredients?.length > 0 ? (
              coffee.ingredients.map((ingred) =>
                ingred ? (
                  <div key={ingred.id} className={styles.ingredientItem}>
                    <span className={styles.ingredientName}>
                      {ingred.title}
                    </span>
                    <span className={styles.ingredientDetails}>
                      Strength: {ingred.strength} | Flavor: {ingred.flavor}
                    </span>
                  </div>
                ) : null,
              )
            ) : (
              <p>No ingredients found</p>
            )}
          </div>
        </div>

        <div className={styles.actionButtons}>
          <button
            className={`${button.btn} ${button.btnPrimary}`}
            onClick={onEdit}
          >
            Edit Coffee
          </button>

          <button
            className={`${button.btn} ${button.btnDanger}`}
            onClick={onDelete}
          >
            Delete Coffee
          </button>
        </div>
      </div>
    </>
  );
};

export default CoffeeDetailInfo;
