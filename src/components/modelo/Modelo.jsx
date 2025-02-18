
import { useGLTF } from "@react-three/drei";

function Modelo() {
    const { scene } = useGLTF("/src/assets/obj3D/scene.gltf");
    return <primitive object={scene} />;
  }

  export default Modelo
  

/*function Modelo() {

    return (
      <>
      <h1>Modelo</h1>
      </>
    )
  }
  
  export default Modelo*/
  