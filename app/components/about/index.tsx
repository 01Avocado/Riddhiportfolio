'use client';

import { Text, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { isMobile } from "react-device-detect";
import * as THREE from "three";

const About = () => {
  const data = useScroll();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true) }, []);

  const groupRef = useRef<THREE.Group>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const titleRef = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const textRef = useRef<any>(null);

  const isMobileView = mounted && isMobile;

  const fontProps = {
    font: "./soria-font.ttf",
    color: "white",
    anchorX: "center" as const,
    anchorY: "middle" as const,
  };

  useFrame((state, delta) => {
    const visibility = data.range(0.08, 0.4);
    const opacity = data.range(0.1, 0.1) * (1 - data.range(0.4, 0.1));

    if (groupRef.current) {
      groupRef.current.visible = visibility > 0;
      groupRef.current.position.y = THREE.MathUtils.damp(groupRef.current.position.y, -8 - (10 * visibility), 4, delta);

      // Rotate text group to match camera rotation so it appears flat to the viewer
      const cameraRotationA = data.range(0, 0.3);
      const targetRotationX = -0.5 * Math.PI * cameraRotationA;
      groupRef.current.rotation.x = THREE.MathUtils.damp(groupRef.current.rotation.x, targetRotationX, 5, delta);
    }

    if (titleRef.current) titleRef.current.fillOpacity = opacity;
    if (textRef.current) textRef.current.fillOpacity = opacity;
  });

  return (
    <group ref={groupRef} position={[0, -10, 0]} renderOrder={100}>
      <Text
        {...fontProps}
        fontSize={isMobileView ? 1.5 : 2.5}
        position={[0, isMobileView ? 3.5 : 4.5, 0]}
        ref={titleRef}
        material-depthTest={false}
      >
        ABOUT ME
      </Text>
      <Text
        {...fontProps}
        fontSize={isMobileView ? 0.4 : 0.75}
        maxWidth={isMobileView ? 6 : 12}
        textAlign="center"
        position={[0, 0, 0]}
        ref={textRef}
        material-depthTest={false}
      >
        {"I am an AI/ML Engineer passionate about building intelligent systems and pushing the boundaries of technology. \n\n With a background in research and development, I strive to create impactful solutions that combine technical excellence with creative thinking."}
      </Text>
    </group>
  );
};

export default About;
