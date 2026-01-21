import { Link } from "react-router-dom";
import styles from "../styles/sidebar.module.css";

const Sidebar = () => {
  return (
    <>
      <div className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <h2>Coffee Admin</h2>
          <p>Management Panel</p>
        </div>
        <ul className={styles.navMenu}>
          <li className={styles.navItem}>
            <Link to="/">Dashboard</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/add-coffee">Add Coffee</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/add-ingredients">Manage Ingredients</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
