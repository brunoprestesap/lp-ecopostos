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

        <div className="flex flex-col w-full items-center justify-center p-5 lg:p-10">
          <div className="lg:w-3/6 backdrop-opacity-10 bg-white/30 rounded-xl p-3 shadow-xl shadow-white/20">
          <h2 className="text-5xl lg:text-8xl font-black text-green-900 text-left">
            Experimente a REVOLUÇÃO na troca de óleo
          </h2>
            {/* <h2 className="text-4xl lg:text-6xl text-blue-900 font-black">Na troca de óleo</h2> */}
            <h2 className="text-lg text-green-900 text-left lg:text-base antialiased my-5">
              Faça agora a troca de óleo do seu carro com uma equipe
              especializada e mantenha seu carro em perfeitas condições.
              Deixe-nos cuidar disso para você!
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row justify-start gap-5 absolute bottom-10 left-15">
            <button className="bg-green-900 shadow-md shadow-slate-700 rounded-xl p-5">
              <div className="flex justify-center items-center gap-4">
                <FaWhatsapp size={25} color="FFFFFF" />
                <h2 className="text-white font-bold">Solicite uma cotação</h2>
              </div>
            </button>
            <button className="bg-green-900 shadow-md shadow-slate-700 rounded-xl p-5">
              <div className="flex justify-center items-center gap-4">
                <FaGasPump size={25} color="FFFFFF" />
                <h2 className="text-white font-bold">
                  Localize o Ecoposto mais próximo
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
