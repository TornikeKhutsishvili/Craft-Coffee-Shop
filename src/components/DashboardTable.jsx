import { useNavigate } from "react-router-dom";
import { useAdminContext } from "../contexts/AdminContext";
import button from "../styles/button.module.css";

const DashboardTable = () => {
  const { coffees, coffeesLoading, deleteCoffee } = useAdminContext();
  const navigate = useNavigate();

  if (coffeesLoading) return <p>Loading Coffees . . .</p>;

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Origin</th>
            <th>Caffeine</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="coffee-table-body">
          {coffees.map((coffee) => (
            <tr key={coffee.id}>
              <td>{coffee.id}</td>
              <td>{coffee.title}</td>
              <td>{coffee.country}</td>
              <td>{coffee.caffeine}mg</td>
              <td>₾{coffee.price}</td>
              <td>
                <button
                  className={`${button.btn} ${button.btnSecondary}`}
                  onClick={() => navigate(`/coffee-detail/${coffee.id}`)}
                >
                  View
                </button>
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default DashboardTable;
