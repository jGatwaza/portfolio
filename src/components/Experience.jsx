import { ContactShadows, Environment, OrbitControls, Sky } from "@react-three/drei";
import { Avatar } from "./Avatar";

export const Experience = () => {
  return (
    <>
      {/* <OrbitControls /> */}
      <Sky />
      <Environment preset="sunset" />
      <group position-y={-1} position-x={1.5}>
        <ContactShadows scale={10} opacity={0.42} position-x={-1.5} resolution={256} color="#000000" far={10} blur={1}/>
        <Avatar />
        <mesh receiveShadow scale={6.5} rotation-x={-Math.PI * 0.5} position-y={-0.001}>
          <planeGeometry />
          <meshStandardMaterial color="white" />
        </mesh>
      </group>
    </>
  );
};
