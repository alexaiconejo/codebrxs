import { Canvas } from "@react-three/fiber"
import Geometria from "../geometria/Geometria"
import { OrbitControls, Stars } from "@react-three/drei"
import Planeta from "../planeta/planeta"
function Escena() {

    return (
        <>
         <>
            <h1>૮ ˶ᵔ ᵕ ᵔ˶ ა</h1>
         </>

    <div style={{height:'100vh', overflow: 'hidden'}}>
         <Canvas > 
            <color 
            attach="background" 
            args={['#161c24']} 
            />
           {/* <Geometria/>*/}
            <Planeta/>
            <ambientLight/>
            <OrbitControls autoRotate/>
            <Stars count={1000}/>
            
         </Canvas>
     </div>
                </>
    )
  }
  
  export default Escena