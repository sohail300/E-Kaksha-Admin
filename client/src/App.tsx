import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import "./App.css";
import Navbar from "./components/StudentNavbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Login />} path="/" />
      </Routes>
    </>
  );
}

export default App;
