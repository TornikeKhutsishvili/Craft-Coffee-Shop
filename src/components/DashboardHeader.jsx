import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <header className="header">
        <h1>Coffee Dashboard</h1>
        <button
          className="btn btn-primary"
          onClick={() => navigate("/add-coffee")}
        >
          Add New Coffee
        </button>
      </header>
    </>
  );
};

export default Header;
