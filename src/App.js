import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Products from "./pages/Products/Products";
import SignUp from "./pages/Signup/Signup";
import Purchase from "./pages/Products/Purchase";
import Navbar from "./shared/Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="products" element={<Products></Products>}></Route>
        <Route
          path="products/:productsId"
          element={<Purchase></Purchase>}
        ></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="signup" element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
