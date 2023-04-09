import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout, userCurrent } from "./JS/userSlice/userSlice";
import Home from "./components/Home"
import Success from "./components/Success"
import First  from "./components/First"
import Birra from "./components/Birra"
import Basket from "./components/Basket"
import Profil from "./components/Profil";
import PrivateRoute from "./routes/PrivateRoute";
import Chrab from "./components/Chrab";
import Nav from "./components/Nav";
function App() {
  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth) {
      dispatch(userCurrent());
    }
  });
  return (
    <div className="App">
      <div className="header">
        <h1>Auth workshop</h1>
        {isAuth ? (
          <button
            onClick={() => {
              dispatch(logout());
              navigate("/");
            }}
          >
            Logout
          </button>
        ) : null}
      </div>
<Nav />
      <Routes>
        <Route path='/Chrab' element={<Chrab/>} />
      <Route path='/Home' element={<Home/>}/>
        <Route path='/' element={<First/>}/>
        <Route path='/Birra' element={<Birra/>}/>
        <Route path='/Basket' element={<Basket/>}/>
        <Route path='/Success' element={<Success/>}/>
        <Route exact path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profil" element={<Profil />} />
        </Route>{" "}
      </Routes>
    </div>
  );
}

export default App;
   