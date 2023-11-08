import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Moden(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("models/moden.gltf");
  const { actions } = useAnimations(animations, group);
  

   useEffect(() => {

     actions['Logo_luzAction'].play();
        
  }, []);


  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Logo_luz"
          castShadow
          receiveShadow
          geometry={nodes.Logo_luz.geometry}
          material={materials.Material}
          position={[0.8449, 0.4949, -0.0299]}
          scale={0.9316}
        />
        <group
          name="Cuerpo"
          position={[0.0072, 0.0599, 0.0047]}
          scale={[0.8419, 0.7523, 0.5009]}
          castShadow
          receiveShadow
        >
          <mesh
            name="Plano002"
            castShadow
            receiveShadow
            geometry={nodes.Plano002.geometry}
            material={materials.white}
            
          />
          <mesh
            name="Plano002_1"
            castShadow
            receiveShadow
            geometry={nodes.Plano002_1.geometry}
            material={materials.yellow}
          />
          <mesh
            name="Plano002_2"
            castShadow
            receiveShadow
            geometry={nodes.Plano002_2.geometry}
            material={materials.Upurple}
          />
          <mesh
            name="Plano002_3"
            castShadow
            receiveShadow
            geometry={nodes.Plano002_3.geometry}
            material={materials.black}
          />
          <mesh
            name="Plano002_4"
            castShadow
            receiveShadow
            geometry={nodes.Plano002_4.geometry}
            material={materials.Bronce}
          />
          <mesh
            name="Plano002_5"
            castShadow
            receiveShadow
            geometry={nodes.Plano002_5.geometry}
            material={materials.gray}
          />
          <mesh
            name="Plano002_6"
            castShadow
            receiveShadow
            geometry={nodes.Plano002_6.geometry}
            material={materials["Material.004"]}
          />
          <mesh
            name="Plano002_7"
            castShadow
            receiveShadow
            geometry={nodes.Plano002_7.geometry}
            material={materials.Plata}
          />
          <mesh
            name="Plano002_8"
            castShadow
            receiveShadow
            geometry={nodes.Plano002_8.geometry}
            material={materials.BotonON}
          />
          <mesh
            name="Plano002_9"
            castShadow
            receiveShadow
            geometry={nodes.Plano002_9.geometry}
            material={materials.Material}
          />
          <mesh
            name="Plano002_10"
            castShadow
            receiveShadow
            geometry={nodes.Plano002_10.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            name="Plano002_11"
            castShadow
            receiveShadow
            geometry={nodes.Plano002_11.geometry}
            material={materials.blackCristal}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("models/moden.gltf");
