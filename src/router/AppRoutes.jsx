import Paths from "./path";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Notfound from "../pages/Notfound";

const AppRouters = () => {
  return (
    <Router>
      <Routes>
        {Paths.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}

        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  );
};

export default AppRouters;
