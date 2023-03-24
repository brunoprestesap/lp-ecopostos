import React from 'react'
import Services from '../components/Services'
import Topo from '../components/Topo'

const Home = () => {
  return (
    <div className="transform mx-auto duration-500">
          {/* Hero area */}
          <Topo />

          {/* Card inicial area */}
          <Services />
    </div>
  )
}

export default Home