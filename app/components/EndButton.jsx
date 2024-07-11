"use client" 

import React, { useState, useEffect, useRef } from 'react';

const HeartTunnelImage = ({ src, alt, width = 200, height = 200 }) => {
  const [hearts, setHearts] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const requestRef = useRef();
  const previousTimeRef = useRef();

  const createHeart = () => ({
    id: Date.now() + Math.random(),
    x: 0,
    y: 0,
    size: Math.random() * 20 + 10,
    speed: Math.random() * 2 + 1,
    angle: Math.random() * Math.PI * 2,
    opacity: 1,
  });

  const activateTunnel = () => {
    setIsActive(true);
    if (hearts.length === 0) {
      setHearts(Array(50).fill().map(createHeart));
    }
  };

  const deactivateTunnel = () => {
    setIsActive(false);
  };

  const animate = (time) => {
    if (previousTimeRef.current != undefined) {
      const deltaTime = time - previousTimeRef.current;
      
      setHearts(prevHearts => prevHearts.map(heart => {
        const distance = heart.speed * deltaTime * 0.05;
        const newX = heart.x + Math.cos(heart.angle) * distance;
        const newY = heart.y + Math.sin(heart.angle) * distance;
        const newOpacity = heart.opacity - 0.005;

        if (newOpacity <= 0 || Math.abs(newX) > width / 2 || Math.abs(newY) > height / 2) {
          return createHeart();
        }

        return {
          ...heart,
          x: newX,
          y: newY,
          opacity: newOpacity,
        };
      }));
    }

    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (isActive) {
      requestRef.current = requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(requestRef.current);
    }
    return () => cancelAnimationFrame(requestRef.current);
  }, [isActive]);

  return (
   
    <div className="relative mx-[80vh]" style={{ width: `${width + 100}px`, height: `${height + 100}px` }}>
      <div className="absolute my-[40vh] inset-0 flex justify-center items-center">
        <img
          src='/img2.jpg'
          alt={alt}
          onMouseEnter={activateTunnel}
          onMouseLeave={deactivateTunnel}
          className="z-10 rounded-lg shadow-lg"
          style={{ width: `${width}px`, height: `${height}px`, objectFit: 'cover' }}
        />
      </div>
      
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="absolute pointer-events-none mx-[2vh] my-[20vh]"
          style={{
            left: '50%',
            top: '50%',
            fontSize: `${heart.size}px`,
            opacity: heart.opacity,
            transform: `translate(calc(${heart.x}px - 50%), calc(${heart.y}px - 50%))`,
          }}
        >
          ❤️
        </div>
      ))}
    </div>
    
  );
};

export default HeartTunnelImage;