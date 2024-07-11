import React from 'react'

import Footer from '../components/Footer'
import Header from '../components/Header'

const Onemorething = () => {
  return (
    <div className=" bg-gradient-to-r from-violet-600 to-indigo-600 min-h-screen overflow-x-hidden">
      <Footer />
      

      
      <h1 className=" text-white text-3xl text-center mt-[15vh]">Aapke liye kuch gaane banane ka try kara hai ji. thode soft and soothing, thode vibes waale. hopefully pasand aayenge 🤞 </h1>
      <div className="mx-[80vh] my-[10vh] text-white text-3xl p-8">
      
      <audio controls>
        
        <source src='/FatesDance.mp3' type='audio/mpeg'/>
      </audio>
      <br></br>
      
      <audio controls>
        
        <source src='/highenergy.mp3' type='audio/mpeg'/>
      </audio>
      <br></br>
      <audio controls>
        
        <source src='/first.mp3' type='audio/mpeg'/>
      </audio>
      <br></br>
      <audio controls>
        
        <source src='/ogenergetic.mp3' type='audio/mpeg'/>
      </audio>
      <br></br>
      <audio controls>
        <source src='/MoonlitNight.mp3' type='audio/mpeg'/>
      </audio>
      <br></br>
      <audio controls>
        <source src='/signature.mp3' type='audio/mpeg'/>
      </audio>
      <br></br>
      
      <audio controls>
        <source src='/energetic.mp3' type='audio/mpeg'/>
      </audio>
      </div>
      
    
      <Header />
    </div>
  )
}

export default Onemorething
