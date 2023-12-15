import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
//import Components
import Login from "./components/login"
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
      <Route path="/login" element={<Login  />} />
      <Route path="/" element={<Homepage  />} />
      <Route path="/cijfer-lijsten" element={<GlobalLijst  />} />
      <Route path="/klas-lijsten" element={<KlasLijst  />} />
    </Routes>
  </BrowserRouter>

</>
  )
}

export default App;
