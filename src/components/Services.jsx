import React from "react";
import { FaFilter, FaWhatsapp, FaCar } from "react-icons/fa";
import { MdOutlineCarRepair } from "react-icons/md";

const Services = () => {
  return (
    <div className="p-5 bg-yellow-50 flex flex-col justify-center items-center w-full lg:h-[600px]">
      <h2 className="text-center font-bold text-4xl lg:text-6xl text-blue-800 mb-5">
        Nossos Serviços
      </h2>

      <div className="lg:w-5/6 grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-5 lg:mt-10">
        <div className="p-5 w-5/6 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl flex flex-col justify-center items-center shadow-lg shadow-slate-600">
          <FaFilter size={50} color="FFFFFF" />
          <h2 className="text-2xl font-bold text-white">Troca de óleo</h2>
          <p className="text-sm text-justify mt-3 text-white">
            Com nossos serviços profissionais e eficientes, você garante o bom
            funcionamento do motor e evita problemas mais graves no futuro.
            Agende agora e tenha a tranquilidade de estar cuidando bem do seu
            veículo.
          </p>
          <button className="bg-white p-2 rounded-lg mt-3 flex items-center gap-3">
            <FaWhatsapp size={20} />
            <p className="text-black text-base antialiased">Agende agora</p>
          </button>
        </div>

        {/* Servico de alinhamento */}
        <div className="p-5 w-5/6 bg-gradient-to-r from-green-700 to-green-500 rounded-2xl flex flex-col justify-center items-center shadow-lg shadow-slate-600">
          <MdOutlineCarRepair size={50} color="FFFFFF" />
          <h2 className="text-2xl font-bold text-white">Alinhamento</h2>
          <p className="text-sm text-justify mt-3 text-white">
            Deixe seu carro pronto para encarar o dia-a-dia com nossos serviços
            de alinhamento de última geração! Agende agora e sinta a diferença
            no desempenho do seu veículo
          </p>
          <button className="bg-white p-2 rounded-lg mt-3 flex items-center gap-3">
            <FaWhatsapp size={20} />
            <p className="text-black text-base antialiased">Agende agora</p>
          </button>
        </div>

        {/* Balanceamento */}
        <div className="p-5 w-5/6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex flex-col justify-center items-center shadow-lg shadow-slate-600">
          <FaCar size={50} color="FFFFFF" />
          <h2 className="text-2xl font-bold text-white">Balanceamento</h2>
          <p className="text-sm text-justify mt-3 text-white">
            Sinta a diferença no conforto e na dirigibilidade do seu carro com
            nossos serviços de balanceamento de rodas! Agende agora e tenha a
            certeza de estar cuidando bem do seu veículo.
          </p>
          <button className="bg-white p-2 rounded-lg mt-3 flex items-center gap-3">
            <FaWhatsapp size={20} />
            <p className="text-black text-base antialiased">Agende agora</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
