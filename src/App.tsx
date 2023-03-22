import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.route";
import Navbar from "./components/Navbar/navbar";

const App = () => {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
    </Routes>
  );
};

export default App;
