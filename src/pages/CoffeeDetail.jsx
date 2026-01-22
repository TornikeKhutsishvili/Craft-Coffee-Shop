import styles from "../styles/coffeeDetail.module.css";
import CoffeeDetailHeader from "../components/CoffeeDetailHeader";
import CoffeeDetailInfo from "../components/CoffeeDetailInfo";

const CoffeeDetail = () => {
  return (
    <>
      <div className={styles.mainContent}>
        <CoffeeDetailHeader />
      </div>
      <div class={styles.coffeeDetail}>
        <CoffeeDetailInfo />
      </div>
    </>
  );
};

export default CoffeeDetail;
