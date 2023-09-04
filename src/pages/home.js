import Boton from "../components/boton";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <div className="">
      Holiiiiii
      <Boton onClick={() => navigate(`/pelicula`)}></Boton>
    </div>
  );
}

export default Home;
