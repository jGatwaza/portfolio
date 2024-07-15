import React, { useEffect, useState } from "react";
import {
  ContactShadows,
  Environment,
  Sky,
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
      <Sky />
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
          <planeGeometry />
          <meshStandardMaterial color="white" />
        </mesh>
      </group>
    </>
  );
};
