import './App.css'
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Modelo from './components/modelo/modelo';
import Escena from './components/escena/Escena';


function App() {
  return (
    <><>
      <h1>CODEBRXS</h1>

    </><Canvas 
     camera={{ position: [0, 0, 5] }}
     onCreated={({ gl }) => {
       gl.setSize(window.innerWidth, window.innerHeight);
     }}    
    >
        <ambientLight intensity={1.25} />
        <Modelo />
        <OrbitControls />
      </Canvas>
      <Escena></Escena>
      </>
  );
}

export default App
