import {Sparkles,  BakeShadows, Environment, OrbitControls, PerspectiveCamera} from '@react-three/drei'
import React, { Suspense, useEffect } from 'react'

import { ToneMapping , ChromaticAberration, Bloom, EffectComposer, Noise, Vignette } from '@react-three/postprocessing'
import { enviromentConfig, pointLightConfig } from './scene_config';
import { vignetteConfig, chromaticAberrationConfig, bloomConfig, noiseConfig, toneMappingConfig } from './scene_config';
import Moden from './modelos/moden.jsx';

export default function Scene({ cameraRef, modelRef, menuTextRef, SpeedTestTextRef })
{
    let initCamera={far:2000, near: 0.1, fov: 35, position:[0, 0.5,3], rotation:[0, 0, 0]}

    return <> 

    <Suspense fallback={null}>
        <EffectComposer multisampling={8}>
            <ToneMapping {...toneMappingConfig}/>
      
            <ChromaticAberration {...chromaticAberrationConfig} />
            <Bloom {...bloomConfig} />
         
        </EffectComposer>
    </Suspense>
 
    <PerspectiveCamera makeDefault ref={cameraRef} {...initCamera}/>

    <pointLight {...pointLightConfig} shadow-bias={-0.0003} shadow-mapSize={ [ 512*6,512*6] } shadow-normalBias={0.01}/>
    <ambientLight intensity={15} color={"#5d5d5d"} />
    <Suspense>
       <Moden rotation={[0.4,-2,0]} position={[0.1,0.2,0]} />

    

        <BakeShadows/>

        
     
  
    </Suspense>

    </>
}