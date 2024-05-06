import { Center, Float, Html, OrbitControls, Text, Text3D } from "@react-three/drei";
import { useRef } from "react";

const Scene = () => {

  const cubeRef = useRef();
  return (
    <>
      <OrbitControls />

      <Text 
      fontSize={0.4}
      color="pink"
      font="./fonts/1.ttf"
      position-y={1.5}
      rotation-y={Math.PI * 0.1}
      mathWidth={2}
      textAlign="center"
      >
       Something cool !
      
      </Text>

      <Center>
        <Float 
        speed={4}
        floatIntensity={3}

        >
          <Text3D
          font="./fonts/2.json"
          height={0.5}
          size={1}
          letterSpacing={-0.1}
          bevelEnabled
          bevelSegments={20}
          
          >
            DevGui
            <meshNormalMaterial />
          </Text3D>
        </Float>
      </Center>

      {/* <mesh position-y={-1.5}>
        <boxGeometry />
        <meshBasicMaterial color="gray" />
      </mesh>

      <mesh  position-x={-2} position-y={-1.5} ref={cubeRef} >
        <boxGeometry />
        <meshBasicMaterial color="green" />
        <Html
        position={[-0.7, 0.5, 0.5]}
        wrapperClass="text"
        distanceFactor={5} // adiciona uma perspectiva ao texto 
        occlude={[cubeRef]} // crie uma referência para os objetos que podem ocultar o texto depois adiciona a mesh laranja de adiciona dentro do array para que ocultar .

        >
        R3F
      </Html>
      </mesh> */}

      




    </>
  );
};

export default Scene;
