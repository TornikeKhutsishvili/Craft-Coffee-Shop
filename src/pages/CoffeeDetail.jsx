import styles from "../styles/coffeeDetail.module.css";
import CoffeeDetailHeader from "../components/CoffeeDetailHeader";
import CoffeeDetailInfo from "../components/CoffeeDetailInfo";
import { useNavigate, useParams } from "react-router-dom";
import { useAdminContext } from "../contexts/AdminContext";

const CoffeeDetail = () => {
  const { getCoffeeById, ingredients, deleteCoffee } = useAdminContext();
  const { id } = useParams();
  const navigate = useNavigate();
  const coffee = getCoffeeById(id);

  const eCoffee =
    coffee && ingredients?.length > 0
      ? {
          ...coffee,
          ingredients: coffee.ingredients
            .map((ingredId) => ingredients.find((i) => i.id === ingredId))
            .filter(Boolean),
        }
      : null;

  return (
    <>
      <div className={styles.mainContent}>
        <CoffeeDetailHeader />
        <div className={styles.coffeeDetail}>
          <CoffeeDetailInfo
            coffee={eCoffee}
            onEdit={() => navigate(`/edit-coffee/${id}`)}
            onDelete={() => {
              deleteCoffee(id);
              navigate("/");
            }}
          />
        </div>
      </div>
    </>
  );
};

export default CoffeeDetail;
