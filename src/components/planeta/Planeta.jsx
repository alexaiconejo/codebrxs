
import { useGLTF } from "@react-three/drei";

function Planeta() {
    const { scene } = useGLTF("/src/assets/stylized_planet/scene.gltf");
    return <primitive object={scene} />;
  }

  export default Planeta