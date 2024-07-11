import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Homecards from '../components/Homecards'

const SugarCube = () => {
  return (
    <div className="bg-pink-600 min-h-screen flex flex-col">
        
    <Header />
    <h1 className="text-black text-4xl mt-[] text-center">Apna mouse use karke card ko swipe kare</h1>
    <div className="my-[20vh]">
    <Homecards />
    </div>
  
    <Footer />
    
  </div>
  )
}

export default SugarCube
