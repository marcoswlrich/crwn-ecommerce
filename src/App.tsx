import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.route";
import Navbar from "./components/Navbar/navbar";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
