import React from "react";
import logo from "../assets/logo.jpeg";
import bg from "../assets/background.jpg";

import { FaGasPump, FaWhatsapp } from "react-icons/fa";

const Topo = () => {
  return (
    <div id="topo" className="relative">
      <img
        src={bg}
        alt="fundo do topo"
        className="w-full h-screen object-cover"
      />

      <div className="w-full h-screen absolute top-0 left-0 bg-white/30">
        <div className="flex aboslute top-0 left-0 justify-center w-full">
          <img
            className="rounded-xl w-72 shadow-xl shadow-white/50 m-5"
            src={logo}
            alt="logo"
          />
        </div>

        <div className="flex flex-col w-full items-center justify-center p-5">
          <div className="lg:w-3/6 backdrop-opacity-10 bg-white/30 rounded-xl p-5 shadow-xl shadow-white/20">
            <h2 className="text-3xl text-blue-900 text-center lg:text-5xl font-bold my-8 lg:my-16 antialiased">
              Agende agora a troca de óleo do seu carro com uma equipe
              especializada e mantenha seu carro em perfeitas condições.
              Deixe-nos cuidar disso para você!
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row justify-start gap-5 absolute bottom-10 left-15">
            <button className="bg-blue-900 shadow-md shadow-slate-700 rounded-xl p-5">
              <div className="flex justify-center items-center gap-4">
                <FaWhatsapp size={25} color="FFFFFF" />
                <h2 className="text-white font-bold">
                  Agende a sua troca de óleo
                </h2>
              </div>
            </button>
            <button className="bg-blue-900 shadow-md shadow-slate-700 rounded-xl p-5">
              <div className="flex justify-center items-center gap-4">
                <FaGasPump size={25} color="FFFFFF" />
                <h2 className="text-white font-bold">
                  Localize o Ecoposto mais pŕoximo
                </h2>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topo;
