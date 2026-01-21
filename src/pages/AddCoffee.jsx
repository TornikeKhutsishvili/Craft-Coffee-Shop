import Sidebar from "../components/Sidebar";
import CoffeeHeader from "../components/CoffeeHeader";
import CoffeeForm from "../components/CoffeeForm";

const AddCoffee = () => {
  return (
    <>
      <Sidebar />
      <div className="main-content">
        <CoffeeHeader />
      </div>
      <div className="form-container">
        <CoffeeForm />
      </div>
    </>
  );
};

export default AddCoffee;
