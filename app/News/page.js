import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'

const News = () => {
  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden">
      <Header />
      <div className="flex flex-row gap-10 mx-[20vw]">
      <Image className="h-[80vh]" src='/better.jpg' alt=""></Image>
      <Image className="h-[80vh]" src='/better2.jpg' alt=""></Image>
      <Footer />
      </div>
    </div>
  )
}

export default News
