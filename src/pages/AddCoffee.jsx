import CoffeeHeader from "../components/CoffeeHeader";
import CoffeeForm from "../components/CoffeeForm";
import styles from "../styles/addCoffee.module.css";

const AddCoffee = () => {
  return (
    <>
      <div className={styles.mainContent}>
        <CoffeeHeader />
        <div className={styles.formContainer}>
          <CoffeeForm />
        </div>
      </div>
    </>
  );
};

export default AddCoffee;
