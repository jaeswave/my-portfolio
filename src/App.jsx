import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppRoute from "./router/AppRoutes";

const App = () => {
  return (
    <>
      <ToastContainer />
      <AppRoute />
    </>
  );
};

export default App;
