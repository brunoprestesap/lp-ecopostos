import React from 'react'
import logo from '../assets/profile_ecopostos.ap.webp'

const Main = () => {
  return (
    <div className="p-5 w-full h-screen bg-gradient-to-b from-[#F6C234] via-yellow-500 to-[#275336]">
        <div className='flex justify-center w-full'>
            <img
                className='rounded-full w-36 shadow-xl shadow-blue-500/50'
                src={logo}
                alt='logo'
            />
        </div>
        <h1 className='text-blue-900 font-bold text-6xl text-center antialiased'>Ecopostos</h1>
        <h2 className='text-center font-bold text-green-900 text-xl my-1'>Combustíveis e troca de óleo</h2>
        <h2 className='text-2xl text-blue-900 text-center font-bold my-16 antialiased'>Abasteça com o combustível mais confiável do estado ou agende agora a troca de óleo e mantenha seu carro em perfeitas condições - deixe-nos cuidar disso para você!</h2>

        <div className='flex flex-col justify-center gap-5'>
            <button className='bg-blue-900 shadow-md shadow-slate-700 rounded-xl p-5'>
                <h2 className='text-white font-bold'>Localize o Ecoposto mais pŕoximo</h2>
            </button>
            <button className='bg-blue-900 shadow-md shadow-slate-700 rounded-xl p-5'>
                <h2 className='text-white font-bold'>Agenda sua troca de óleo</h2>
            </button>
        </div>
    </div>
  )
}

export default Main