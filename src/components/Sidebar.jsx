import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div class="sidebar-header">
          <h2>Coffee Admin</h2>
          <p>Management Panel</p>
        </div>
        <ul class="nav-menu">
          <li class="nav-item">
            <Link to="/">Dashboard</Link>
          </li>
          <li class="nav-item">
            <Link to="/add-coffee">Add Coffee</Link>
          </li>
          <li class="nav-item">
            <Link to="/add-ingredient">Manage Ingredients</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
