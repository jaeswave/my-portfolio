import Paths from "./path";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import NotFound from "../screens/NotFound";

const AppRouters = () => {
  return (
    <Router>
      <Routes>
        {Paths.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}

        {/* Catch-all 404 route */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRouters;
