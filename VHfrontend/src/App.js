import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
//import Components
import Login from "./components/login"
import Register from "./components/register"
//import Pages
import Homepage from "./pages/home"
import GlobalLijst from "./pages/global_cijferlijst";
import KlasLijst from "./pages/klas_cijferlijst";

function App() {
  return (
<>

  <BrowserRouter>
    <Routes>
      {/*<Route path="/" element={<  />} />*/}
      <Route path="/" element={<Login  />} />
      <Route path="/register" element={<Register  />} />
      <Route path="/home" element={<Homepage  />} />
      <Route path="/cijfer-lijsten" element={<GlobalLijst  />} />
      <Route path="/klas-lijsten" element={<KlasLijst  />} />
    </Routes>
  </BrowserRouter>

</>
  )
}

export default App;
