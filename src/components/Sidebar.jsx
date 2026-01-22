import { NavLink } from "react-router-dom";
import styles from "../styles/sidebar.module.css";

const Sidebar = () => {
  const getLiClass = (isActive) =>
    isActive ? `${styles.navItem} ${styles.active}` : styles.navItem;

  return (
    <>
      <div className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <h2>Coffee Admin</h2>
          <p>Management Panel</p>
        </div>
        <ul className={styles.navMenu}>
          <NavLink to="/" end>
            {({ isActive }) => (
              <li className={getLiClass(isActive)}>
                <span>Dashboard</span>
              </li>
            )}
          </NavLink>

          <NavLink to="/add-coffee">
            {({ isActive }) => (
              <li className={getLiClass(isActive)}>
                <span>Add Coffee</span>
              </li>
            )}
          </NavLink>

          <NavLink to="/add-ingredients">
            {({ isActive }) => (
              <li className={getLiClass(isActive)}>
                <span>Manage Ingredients</span>
              </li>
            )}
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
