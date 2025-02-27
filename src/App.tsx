import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/menu_list/Menu"; // ตัวอย่าง component ที่จะไป
import MenuList from "./pages/MenuList";
import "./app.css";
import MenuLoading from "./pages/MenuLoading";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu_list" element={<MenuList />} />
        <Route path="/menu_loading" element={<MenuLoading />} />
      </Routes>
    </Router>
  );
}

export default App;
