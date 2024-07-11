import React from 'react'
import Button from '../components/EndButton'
import HeartExplosionButton from '../components/EndButton'
import Footer from '../components/Footer'
import Header from '../components/Header'

const End = () => {
  return (
    <div className="bg-[#c29ac2] overflow-x-hidden min-h-screen">
      
      <div className="mt-[20vh] text-black text-center"><h1 className="text-2xl">Yo!</h1>
      <p className="text-xl mx-[20vh]">Pehli baat toh ye ki joh tum tiktok----oh wait nahi i mean HAPPYYYYYYYYYYY BIRTHDAAAYYYYYYYYYY!!!!!!!! Janam din mubarak!! iss
        Shubh ki shreya shubhkaamnaaye aapko, Enjoy karna bohot! I hope aapko ye sab pasand aaya ho and maybe i managed to make your day even 
        more special(hehe). Please mujhe btana kya aaccha lga kya nahi. God bless you! Take care!  (also neeche photo pe hover karke dekhna kuch magic dikhega hehe)</p></div>
     <HeartExplosionButton />
     <Footer/>
    </div>
  )
}

export default End
