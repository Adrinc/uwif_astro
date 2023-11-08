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
    style={{height: '100%', width: '100%'}}
    dpr={[0.5, 1.2]}
    performance={{current: 1,min: 0.1,max: 1,debounce: 200,regress: 0.5}}
    shadows

    gl={{
      antialias: false,
      alpha: true,
      powerPreference: 'high-performance',
      stencil: false,
      depth: false,
      toneMapping: THREE.NoToneMapping,
      toneMappingExposure: 0.6,
      gammaOutput: true,
      outputColorSpace: THREE.SRGBColorSpace,
    }}
   
    >
        <Scene cameraRef={cameraRef} modelRef={modelRef} menuTextRef={menuTextRef} speedTextRef={speedTextRef}/>
    </Canvas>
  );
};

export default Fiber;