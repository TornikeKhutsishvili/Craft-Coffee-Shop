import { useNavigate } from "react-router-dom";

const CoffeeHeader = () => {
  const navigate = useNavigate();

  return (
    <>
      <header className="header">
        <h1>Add New Coffee</h1>
        <button className="btn btn-primary" onClick={() => navigate("/")}>
          Back to Dashboard
        </button>
      </header>
    </>
  );
};

export default CoffeeHeader;
