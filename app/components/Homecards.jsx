"use client"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './styles.css';

// import required modules
import { EffectCards } from 'swiper/modules';


const Homecards = () => {
  return (
    <>
    
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>hello ji kaise ho? aao aapki thodi tareef kare</SwiperSlide>
        <SwiperSlide>Maine kha tha aap chaand ho,
Chaand ka noor bhi
Aur uski tarah dur bhi 😞😞</SwiperSlide>
        <SwiperSlide>Lavel sabke nikalenge
        Par aap iss dil se kabhi nahi nikalenge 😊</SwiperSlide>
        <SwiperSlide>Iqbaal bhai ke paas hai bomb
Phatega kya?
Aap mujhe bohot acche lagte ho
Patoge kya? 😉</SwiperSlide>
        <SwiperSlide>Woh kehte hai na, Swarg se utari hui kokil kanti Apsara
        Haan tumhare liye hi kehte hai</SwiperSlide>
        <SwiperSlide>Ji thoda nazdeek raha kariye,
        Meri dur ki nazar kamzor hai</SwiperSlide>
        <SwiperSlide>Ji aap par tax department ki raid padti hai kya?

Agar Pure bhramaand ki khubsurti lekar ghumti ho, toh beauty tax toh bharna padega na</SwiperSlide>
        <SwiperSlide>Ji log bol rhe hai aap par case kardu,
Khud ka itna bada dil hone ke baad bhi,
Meri chura liya</SwiperSlide>
        <SwiperSlide>Are suno woh,
Ek pyaari ladki bohot pasand aayi hai,
Itne gaur se kya dekh rhi ho, 
Aap hi toh ho woh</SwiperSlide>
      </Swiper>
    
    </>
  )
}

export default Homecards
