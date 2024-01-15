import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import './App.css';
//import Components
import Login from "./components/login"
import Register from "./components/register"
//import Pages
import Homepage from "./pages/home"
import GlobalLijst from "./pages/global_cijferlijst";
import KlasLijst from "./pages/klas_cijferlijst";
import {useEffect, useState} from "react";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isLoggedIn1, setIsLoggedIn1] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('Token');
    setIsLoggedIn(!!token);
    setIsLoggedIn1(!!token)
  }, []);

  return (
      <BrowserRouter>
        <Routes>
          <Route
              path="/"
              element={isLoggedIn ? <Navigate to="/home" /> : <Login />}
          />
          <Route
              path="/register"
              element={isLoggedIn1 ? <Navigate to="/home" /> : <Register />}
          />
          <Route
              path="/home"
              element={isLoggedIn ? <Homepage /> : <Navigate to="/" />}
          />s
          <Route
              path="/cijfer-lijsten"
              element={isLoggedIn ? <GlobalLijst /> : <Navigate to="/" />}
          />
          <Route
              path="/klas-lijsten"
              element={isLoggedIn ? <KlasLijst /> : <Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter>
  );
};

export default App;