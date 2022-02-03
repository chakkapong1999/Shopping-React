import { Route, Routes, } from "react-router-dom";
import LoginPage from "./views/LoginPage";
import HomePage from "./views/HomePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
