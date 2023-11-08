import {Sparkles,  BakeShadows, Environment, OrbitControls, PerspectiveCamera} from '@react-three/drei'
import React, { Suspense, useEffect } from 'react'

import { ToneMapping , ChromaticAberration, Bloom, EffectComposer, Noise, Vignette } from '@react-three/postprocessing'
import { enviromentConfig, pointLightConfig } from './js/scene_config';
import { vignetteConfig, chromaticAberrationConfig, bloomConfig, noiseConfig, toneMappingConfig } from './scene_config';
import ScreenSizeListener from './js/listeners/listenScreenSize';

export default function Scene({ cameraRef, modelRef, menuTextRef, SpeedTestTextRef })
{


    return <> 

    <Suspense fallback={null}>
        <EffectComposer multisampling={4}>
            <ToneMapping {...toneMappingConfig}/>
            <Vignette {...vignetteConfig} />
            <ChromaticAberration {...chromaticAberrationConfig} />
            <Bloom {...bloomConfig} />
            <Noise {...noiseConfig} />
        </EffectComposer>
    </Suspense>
   <OrbitControls/>
    <PerspectiveCamera makeDefault ref={cameraRef} {...initCamera}/>
    <Environment {...enviromentConfig}/>
    <pointLight {...pointLightConfig} shadow-bias={-0.0003} shadow-mapSize={ [ 512*6,512*6] } shadow-normalBias={0.01}/>
    <ambientLight intensity={1} color={"#5d5d5d"} />
    <Suspense fallback={<Placeholder position-y={1} scale={[2, 3, 2]} />}>


        <Sparkles rotation={[0, Math.PI/2,0]}   position={[-21, 3.5, -14]} count={200} scale={[6.5,6.5,2]} size={2.5} speed={0.1}/> 

        <BakeShadows/>

        
     
        <ScreenSizeListener camera={cameraRef} modelRef={modelRef} menuTextRef={menuTextRef}/>
    </Suspense>

    </>
}