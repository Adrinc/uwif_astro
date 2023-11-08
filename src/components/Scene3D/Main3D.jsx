import { Canvas, useThree } from "@react-three/fiber";
import { CameraControls } from "@react-three/drei";
import { useEffect, useRef } from "react";
import Scene from './Scene.jsx';
import * as THREE from 'three';

export const Fiber = () => {
  
  const cameraRef = useRef();
const modelRef = useRef();
const speedTextRef= useRef();
const menuTextRef= useRef();

  return (
    <Canvas
      camera={{ position: [10, -20, 5], fov: 45 }}
      style={{ height: "100%"}}
      gl={{
        antialias: false,
        alpha: true,
        powerPreference: 'high-performance',
  /*       stencil: false,
        depth: false, */
        toneMapping: THREE.LinearToneMapping,
        toneMappingExposure: 0.6,
        gammaOutput: true,
        outputColorSpace: THREE.SRGBColorSpace,
      }}
      scene={{ background: new THREE.Color('#00FFF0') }}
    >
        <Scene cameraRef={cameraRef} modelRef={modelRef} menuTextRef={menuTextRef} speedTextRef={speedTextRef}/>
    </Canvas>
  );
};

export default Fiber;