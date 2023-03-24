import React from "react";
import logo from "../assets/logo.jpeg";

import { FaGasPump, FaWhatsapp } from "react-icons/fa";

const Topo = () => {
  return (
    <div className="p-5 w-full h-screen bg-gradient-to-b from-[#F6C234] via-yellow-500 to-[#275336]">
      <div className="flex justify-center w-full">
        <img
          className="rounded-xl w-72 shadow-xl shadow-blue-500/50"
          src={logo}
          alt="logo"
        />
      </div>

      <h2 className="text-3xl text-blue-900 text-center font-bold my-16 antialiased">
        Agende agora a troca de óleo do seu carro com uma equipe especializada e mantenha seu carro em perfeitas
        condições. Deixe-nos cuidar disso para você!
      </h2>

      <div className="flex flex-col justify-center gap-5">
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
  );
};

export default Topo;
