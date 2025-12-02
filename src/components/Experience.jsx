import React, { useEffect, useState } from "react";
import {
  ContactShadows,
  Environment,
  OrbitControls,
  Sky,
  Grid,
} from "@react-three/drei";
import { Avatar } from "./Avatar";

export const Experience = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1400);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1400);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Sky sunPosition={[1000, 2000, 5000]}/>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableRotate={true}
        maxPolarAngle={Math.PI * 0.5}
        minPolarAngle={Math.PI * 0.5}
      />
      <Environment preset="sunset" />
      <group position-y={-1} position-x={isMobile ? 0 : 1.5}>
        <ContactShadows
          scale={10}
          opacity={0.42}
          position-x={isMobile ? 0 : -1.5}
          resolution={256}
          color="#000000"
          far={10}
          blur={1}
        />
        <Avatar />
        <mesh
          receiveShadow
          scale={6.5}
          rotation-x={-Math.PI * 0.5}
          position-y={-0.001}
        >
          <planeGeometry/>
          <meshStandardMaterial color={"#adc4c3"} />
        </mesh>

        <Grid
          position={[0, 0.002, 0]}
          args={[100, 100]}
          cellSize={0.812}
          cellThickness={2}
          cellColor="#000000"
          sectionSize={10}
          sectionThickness={1}
          sectionColor="#000000"
          fadeStrength={20}
          fadeDistance={70}
          infiniteGrid = {false}
        />
      </group>
    </>
  );
};
