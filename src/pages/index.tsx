import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Index";

export default function Index() {
  return (
    <div className="Global">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}
