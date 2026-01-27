import EditCoffeeHeader from "../components/EditCoffeeHeader";
import EditCoffeeForm from "../components/EditCoffeeForm";
import styles from "../styles/addCoffee.module.css";

const EditCoffee = () => {
  return (
    <>
      <div className={styles.mainContent}>
        <EditCoffeeHeader />
        <div className={styles.formContainer}>
          <EditCoffeeForm />
        </div>
      </div>
    </>
  );
};

export default EditCoffee;
