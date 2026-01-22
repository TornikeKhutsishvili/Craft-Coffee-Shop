import CoffeeHeader from "../components/CoffeeHeader";
import CoffeeForm from "../components/CoffeeForm";
import styles from "../styles/addCoffee.module.css";

const AddCoffee = () => {
  return (
    <>
      <div className={styles.mainContent}>
        <CoffeeHeader />
      </div>
      <div className={styles.formContainer}>
        <CoffeeForm />
      </div>
    </>
  );
};

export default AddCoffee;
