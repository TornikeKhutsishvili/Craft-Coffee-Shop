import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Form from "../components/Form";

const AddCoffee = () => {
  return (
    <>
      <Sidebar />
      <div class="main-content">
        <Header />
      </div>
      <div class="form-container">
        <Form />
      </div>
    </>
  );
};

export default AddCoffee;
