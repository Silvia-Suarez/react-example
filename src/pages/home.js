import client from "../contentful";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Auth } from "aws-amplify";

import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Card from "../components/Card";
function Home() {
  const navigate = useNavigate();
  // CONTENTFUL
  const [cosas, setCosas] = useState([]);
  useEffect(() => {
    client
      .getEntries({ content_type: "electrodomesticos" })
      .then((response) => {
        setCosas(response.items);
        console.log(response.items);
      });
  }, []);
  // AMPLIFY
  async function changePage() {
    await Auth.federatedSignIn();
  }
  async function signOut() {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }

  return (
    <div className="flex flex-col">
      <Banner></Banner>
      <div className="h-100 relative bg">
        <div className="absolute flex flex-col justify-center w-full h-full">
          <button
            onClick={() => changePage()}
            className="bg-blue-principal font-semibold z-50 mx-auto rounded-3xl text-white py-4 px-16"
          >
            ¡Quiero obtener los productos!
          </button>
        </div>
        <img
          src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2020/12/11-mitos-electrodomesticos-hora-dejes-creerte-2157733.jpg?tf=3840x"
          className="w-full h-100 bg-gray-300 opacity-30"
          alt="ElectroLux-logo"
        />
      </div>
      <div className="space-y-10 flex flex-col">
        {cosas.map((cosa) => (
          <div key={cosa?.sys?.id + "_pelicula"}>
            <Card data={cosa}></Card>
          </div>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
