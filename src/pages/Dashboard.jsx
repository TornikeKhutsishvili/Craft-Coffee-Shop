import DashboardTable from "../components/DashboardTable";
import DashboardHeader from "../components/DashboardHeader";
import styles from "../styles/dashboard.module.css";
import cardStyle from "../styles/card.module.css";
import button from "../styles/button.module.css";
import { useNavigate } from "react-router-dom";
import { useAdminContext } from "../contexts/AdminContext";

const Dashboard = () => {
  const { coffees, coffeesLoading, deleteCoffee } = useAdminContext();
  const navigate = useNavigate();

  if (coffeesLoading) return <p>Loading Coffees . . .</p>;

  return (
    <>
      <div className={styles.mainContent}>
        <DashboardHeader />
        <div className={styles.tableContainer}>
          <DashboardTable />
        </div>
        <div>
          <h2>Coffee Cards</h2>
          <div className={styles.coffeeCards} id="coffee-cards">
            {coffees.map((coffee) => (
              <div className={cardStyle.card} key={coffee.id}>
                <div className={cardStyle.cardImg}>
                  <img src={coffee.image} alt={coffee.title} />
                </div>
                <div className={cardStyle.cardBody}>
                  <h3 className={cardStyle.cardTitle}>{coffee.title}</h3>
                  <p className={cardStyle.cardText}>{coffee.description}</p>
                  <p>
                    <strong>Origin: </strong>
                    {coffee.country}
                  </p>
                  <p>
                    <strong>Caffeine: </strong>
                    {coffee.caffeine}mg
                  </p>
                  <p>
                    <strong>Price: </strong>₾{coffee.price}
                  </p>
                </div>
                <div className={cardStyle.cardFooter}>
                  <button
                    className={`${button.btn} ${button.btnSecondary}`}
                    onClick={() => navigate(`/coffee-detail/${coffee.id}`)}
                  >
                    View More
                  </button>
                  <div>
                    <button
                      className={`${button.btn} ${button.btnPrimary}`}
                      onClick={() => navigate(`/edit-coffee/${coffee.id}`)}
                    >
                      Edit
                    </button>
                    <button
                      className={`${button.btn} ${button.btnDanger}`}
                      onClick={() => deleteCoffee(coffee.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
