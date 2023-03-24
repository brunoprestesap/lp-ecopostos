import React from "react";
import logo from "../assets/logo.jpeg";
import bg from "../assets/background.jpg";

import { FaGasPump, FaWhatsapp } from "react-icons/fa";

const Topo = () => {
  return (
    <div className="p-5 w-full h-screen bg-gradient-to-b from-[#F6C234] via-yellow-500 to-[#275336] flex flex-col items-center">
      <div className="flex justify-center w-full">
        <img
          className="rounded-xl w-72 shadow-xl shadow-blue-500/50"
          src={logo}
          alt="logo"
        />
      </div>

      <div className="flex w-full items-center justify-center flex-col-reverse lg:flex-row my-12">
        <div className="w-full">
          <h2 className="text-2xl text-blue-900 text-center lg:text-5xl lg:text-left font-bold my-8 lg:my-16 antialiased">
            Agende agora a troca de óleo do seu carro com uma equipe
            especializada e mantenha seu carro em perfeitas condições. Deixe-nos
            cuidar disso para você!
          </h2>

          <div className="flex flex-col lg:flex-row justify-start gap-5">
            <button className="bg-blue-900 shadow-md shadow-slate-700 rounded-xl p-5">
              <div className="flex justify-center items-center gap-4">
                <FaGasPump size={25} color="FFFFFF" />
                <h2 className="text-white font-bold">
                  Localize o Ecoposto mais pŕoximo
                </h2>
              </div>
            </button>
            <button className="bg-blue-900 shadow-md shadow-slate-700 rounded-xl p-5">
              <div className="flex justify-center items-center gap-4">
                <FaWhatsapp size={25} color="FFFFFF" />
                <h2 className="text-white font-bold">
                  Agende a sua troca de óleo
                </h2>
              </div>
            </button>
          </div>
        </div>
        <div className="w-full rounded-xl flex items-center justify-center lg:justify-end">
          <img
            src={bg}
            className="w-5/6 rounded-3xl shadow-xl shadow-black/50"
            alt="foto trocando o oleo"
          />
        </div>
      </div>
    </div>
  );
};

export default Topo;
