"use client"


import { ParallaxProvider } from "react-scroll-parallax";

import ParallaxImages from "./components/ParallaxBanner";

import Banner from "./components/Banner";




export default function Home() {

  return (
    <div className="bg-black min-h screen overflow-x-hidden">
     <ParallaxProvider>
      <ParallaxImages />
      </ParallaxProvider>
      <Banner />
      
      </div>
  );
}
