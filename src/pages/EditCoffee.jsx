import Sidebar from "../components/Sidebar";
import EditCoffeeHeader from "../components/EditCoffeeHeader";
import EditCoffeeForm from "../components/EditCoffeeForm";
import styles from "../styles/addCoffee.module.css";

const EditCoffee = () => {
  return (
    <>
      <Sidebar />
      <div className={styles.mainContent}>
        <EditCoffeeHeader />
      </div>
      <div className={styles.formContainer}>
        <EditCoffeeForm />
      </div>
    </>
  );
};

export default EditCoffee;
