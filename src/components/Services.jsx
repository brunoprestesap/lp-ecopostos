import React from "react";
import { FaFilter, FaWhatsapp } from "react-icons/fa";

const Services = () => {
  return (
    <div className="p-5 bg-yellow-50 flex flex-col items-center w-full">
      <h2 className="text-center font-bold text-4xl text-blue-800 mb-5">
        Nossos Serviços
      </h2>

      <div className="p-5 w-5/6 bg-blue-800 rounded-2xl flex flex-col justify-center items-center">
        <FaFilter size={50} color="FFFFFF" />
        <h2 className="text-xl font-bold text-white">Troca de óleo</h2>
        <p className="text-sm text-justify mt-3 text-white">
          Agende agora a troca de óleo do seu carro em poucos minutos -
          economize tempo e dinheiro com nossos serviços profissionais!
        </p>
        <button className="bg-white p-2 rounded-lg mt-3 flex items-center gap-3">
          <FaWhatsapp size={20} color='1E40AF' />
          <p className="text-black text-base antialiased">Agende agora</p>
        </button>
      </div>
    </div>
  );
};

export default Services;
