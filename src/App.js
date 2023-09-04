import Home from "../src/pages/home";
// Rutas
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactGA from "react-ga4";

function App() {
  useEffect(() => {
    ReactGA.gtag("event", "page_view", {
      page_path: window.location.pathname + window.location.search,
    });
  }, []);

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
