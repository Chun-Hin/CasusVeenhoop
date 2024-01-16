import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {useEffect, useState} from "react";
import './App.css';
//import Components
import Login from "./components/login"
import Register from "./components/register"
//import Pages
import Homepage from "./pages/home"
import Cijferlijst from "./pages/cijferlijst";
import Docenten from "./pages/docenten";
import Mijn_klas from "./pages/mijn_klas";
import Vakken from "./pages/vakken";

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
              path="/cijferlijst"
              element={isLoggedIn ? <Cijferlijst /> : <Navigate to="/" />}
          />
          <Route
              path="/docenten"
              element={isLoggedIn ? <Docenten /> : <Navigate to="/" />}
          />
          <Route
              path="/vakken"
              element={isLoggedIn ? <Vakken /> : <Navigate to="/" />}
          />
          <Route
              path="/mijn-klas"
              element={isLoggedIn ? <Mijn_klas /> : <Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter>
  );
};

export default App;