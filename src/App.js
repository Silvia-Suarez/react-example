import Home from "../src/pages/home";
// Rutas
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        {/* <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/pelicula/:title" element={<MovieDetails />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
