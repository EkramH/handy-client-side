import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Products from "./pages/Products/Products";
import SignUp from "./pages/Signup/Signup";
import Purchase from "./pages/Products/Purchase";
import Navbar from "./shared/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequireAuth from "./pages/Login/RequireAuth";
import NotFound from "./shared/NotFound";
import Dashborad from "./pages/Dashborad/Dashborad";
import Myprofile from "./pages/Dashborad/Myprofile";
import Myorders from "./pages/Dashborad/Myorders";
import Myreview from "./pages/Dashborad/Myreview";
import Alluser from "./pages/Dashborad/Admin/Alluser";
import RequireAdmin from "./pages/Login/RequireAdmin";
import Reviews from "./pages/Reviews/Reviews";
import Additem from "./pages/Dashborad/Admin/Additem";
import ManageItem from "./pages/Dashborad/Admin/ManageItem";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="products" element={<Products></Products>}></Route>
        <Route path="reviews" element={<Reviews></Reviews>}></Route>
        <Route
          path="products/:productsId"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashborad></Dashborad>
            </RequireAuth>
          }
        >
          <Route index element={<Myprofile></Myprofile>}></Route>
          <Route path="orders" element={<Myorders></Myorders>}></Route>
          <Route path="review" element={<Myreview></Myreview>}></Route>
          <Route path="alluser" element={<RequireAdmin><Alluser></Alluser></RequireAdmin>}></Route>
          <Route path="additem" element={<RequireAdmin><Additem></Additem></RequireAdmin>}></Route>
          <Route path="manageitem" element={<RequireAdmin><ManageItem></ManageItem></RequireAdmin>}></Route>
        </Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="signup" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
