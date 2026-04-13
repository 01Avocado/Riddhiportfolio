'use client';

import { Text, useScroll } from "@react-three/drei";

import { useProgress } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import CloudContainer from "../models/Cloud";
import StarsContainer from "../models/Stars";
import WindowModel from "../models/WindowModel";
import TextWindow from "./TextWindow";

const Hero = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const titleRef = useRef<any>(null);
  const { progress } = useProgress();
  const data = useScroll();

  useEffect(() => {
    if (progress === 100 && titleRef.current) {
      gsap.fromTo(titleRef.current.position, {
        y: -10,
        duration: 1,
        // delay: 1.5,
      }, {
        y: 2,
        duration: 3
      });
    }
  }, [progress]);

  useFrame(() => {
    // Fade out title as we scroll
    if (titleRef.current) {
      const opacity = 1 - data.range(0, 0.15);
      titleRef.current.fillOpacity = opacity;
    }
  });

  const fontProps = {
    font: "./soria-font.ttf",
    fontSize: 1.2,
  };

  return (
    <>
      <Text position={[0, 2, -10]} {...fontProps} ref={titleRef}>Hi, I am Riddhi Kulkarni.</Text>
      <StarsContainer />
      <CloudContainer/>
      <group position={[0, -25, 5.69]}>
        <pointLight castShadow position={[1, 1, -2.5]} intensity={60} distance={10}/>
        <WindowModel receiveShadow/>
        <TextWindow/>
      </group>
    </>
  );
};

export default Hero;
