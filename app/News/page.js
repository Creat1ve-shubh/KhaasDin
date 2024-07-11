import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const News = () => {
  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden">
      <Header />
      <div className="flex flex-row gap-10 mx-[20vw]">
      <img className="h-[80vh]" src='/better.jpg'></img>
      <img className="h-[80vh]" src='/better2.jpg'></img>
      <Footer />
      </div>
    </div>
  )
}

export default News
