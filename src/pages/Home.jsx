import React from 'react'
import Diferenciais from '../components/Diferenciais'
import Services from '../components/Services'
import Topo from '../components/Topo'

const Home = () => {
  return (
    <div className="transform mx-auto duration-500">
          {/* Hero area */}
          <Topo />

          {/* Card inicial area */}
          <Services />

          {/* Diferenciais */}
          <Diferenciais />
    </div>
  )
}

export default Home