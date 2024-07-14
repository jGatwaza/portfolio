import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";
import LandingPage from "./components/LandingPage";
function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [0, 0, 6], fov: 30 }}>
        <color attach="background" args={["#ececec"]} />
        <ScrollControls pages={0}>
           <Experience />
           <Scroll html>
           <LandingPage/>
           </Scroll>
        </ScrollControls>
      </Canvas>
    </>
  );
}

export default App;
