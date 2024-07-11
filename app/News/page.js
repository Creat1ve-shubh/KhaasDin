import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'

const News = () => {
  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden">
      <Header />
      <div className="flex flex-row gap-10 mx-[20vw]">
        <div className="relative h-[80vh] w-full">
          <Image
            src='/better.jpg'
            alt="Description of better.jpg"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative h-[80vh] w-full">
          <Image
            src='/better2.jpg'
            alt="Description of better2.jpg"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default News
