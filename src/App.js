import { Route, Routes } from "react-router-dom";
import LoginPage from "./views/LoginPage";
import About from "./views/About";
import HomePage from "./views/HomePage";
import Cart from "./views/Cart";
import Confirm from "./views/Confirm";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/confirm" element={<Confirm />} />
      </Routes>
    </div>
  );
}

export default App;
