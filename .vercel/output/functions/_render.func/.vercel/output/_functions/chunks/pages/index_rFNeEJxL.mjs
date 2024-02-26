/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent, h as createTransitionScope } from '../astro_01yF9eX1.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';
import { a as $$BotonFlecha, $ as $$Layout } from './about_jRxWoLsT.mjs';
/* empty css                          */
/* empty css                            */
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { Canvas } from '@react-three/fiber';
import { useGLTF, useAnimations, PerspectiveCamera, Environment, PresentationControls } from '@react-three/drei';
import { useRef, useEffect, Suspense } from 'react';
import 'leva';
import { EffectComposer, ToneMapping, Bloom, ChromaticAberration } from '@react-three/postprocessing';
import { BlendFunction, Resolution } from 'postprocessing';
import * as THREE from 'three';

const $$Astro$a = createAstro("https://Adrinc.github.io");
const $$CarruselTextoHorizontal = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$CarruselTextoHorizontal;
  return renderTemplate`${maybeRenderHead()}<div class="content-wrapper" data-astro-cid-d4nkpe7d> <span class="carrusel" data-astro-cid-d4nkpe7d> <!-- https://hotels-web-one.vercel.app/login de hoteles --> <img src="/image/uwifi_stroke.png" alt="uwifi" data-astro-cid-d4nkpe7d> <button class="check-coverage-btn" data-astro-cid-d4nkpe7d>BUY NOW</button> <img src="/image/uwifi_stroke.png" alt="uwifi" data-astro-cid-d4nkpe7d> <button class="check-coverage-btn" data-astro-cid-d4nkpe7d>BUY NOW</button> <img src="/image/uwifi_stroke.png" alt="uwifi" data-astro-cid-d4nkpe7d> <button class="check-coverage-btn" data-astro-cid-d4nkpe7d>BUY NOW</button> <img src="/image/uwifi_stroke.png" alt="uwifi" data-astro-cid-d4nkpe7d> <button class="check-coverage-btn" data-astro-cid-d4nkpe7d>BUY NOW</button> <img src="/image/uwifi_stroke.png" alt="uwifi" data-astro-cid-d4nkpe7d> <button class="check-coverage-btn" data-astro-cid-d4nkpe7d>BUY NOW</button> <img src="/image/uwifi_stroke.png" alt="uwifi" data-astro-cid-d4nkpe7d> <button class="check-coverage-btn" data-astro-cid-d4nkpe7d>BUY NOW</button> <img src="/image/uwifi_stroke.png" alt="uwifi" data-astro-cid-d4nkpe7d> <button class="check-coverage-btn" data-astro-cid-d4nkpe7d>BUY NOW</button> <img src="/image/uwifi_stroke.png" alt="uwifi" data-astro-cid-d4nkpe7d> <button class="check-coverage-btn" data-astro-cid-d4nkpe7d>BUY NOW</button> <img src="/image/uwifi_stroke.png" alt="uwifi" data-astro-cid-d4nkpe7d> <button class="check-coverage-btn" data-astro-cid-d4nkpe7d>BUY NOW</button> <img src="/image/uwifi_stroke.png" alt="uwifi" data-astro-cid-d4nkpe7d> <button class="check-coverage-btn" data-astro-cid-d4nkpe7d>BUY NOW</button> <img src="/image/uwifi_stroke.png" alt="uwifi" data-astro-cid-d4nkpe7d> <button class="check-coverage-btn" data-astro-cid-d4nkpe7d>BUY NOW</button> </span> </div> `;
}, "C:/Trabajo/uwifi-astro/uwif_astro_web/src/components/global/CarruselTextoHorizontal.astro", void 0);

const $$Astro$9 = createAstro("https://Adrinc.github.io");
const $$BuyOrApplyFree = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$BuyOrApplyFree;
  const { direction = "row", fontweightL = "500", fontweightR = "500" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="botones"${addAttribute(`--direction: ${direction};`, "style")} data-astro-cid-s46nvxvm> ${renderComponent($$result, "BotonFlecha", $$BotonFlecha, { "fontweight": fontweightL, "texto": "BUY NOW", "link": "/acp", "iconColor": "var(--primary-text-color)", "link": "https://cb-luna.github.io/uwifi_map_services-build/#/", "data-astro-cid-s46nvxvm": true })} <p class="texto-or font-bold text-primaryTextColor " data-astro-cid-s46nvxvm> OR </p> ${renderComponent($$result, "BotonFlecha", $$BotonFlecha, { "fontweight": fontweightR, "backgroundColor": "var(--primary-buttom-color)", "iconColor": "var(--primary-text-color)", "texto": "APPLY FOR FREE WIFI", "link": "https://cb-luna.github.io/uwifi_map_services_acp_build/", "data-astro-cid-s46nvxvm": true })} </div> `;
}, "C:/Trabajo/uwifi-astro/uwif_astro_web/src/components/global/BuyOrApplyFree.astro", void 0);

const $$Astro$8 = createAstro("https://Adrinc.github.io");
const $$HeroSeccion1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$HeroSeccion1;
  return renderTemplate`${maybeRenderHead()}<section id="home" data-astro-cid-nkfzof7j> <!-- Video para pantallas grandes --> <video class="block md:hidden" autoplay muted loop id="myVideo" data-astro-cid-nkfzof7j${addAttribute(createTransitionScope($$result, "d6tcttow"), "data-astro-transition-persist")}> <source src="videos/u-wifi-opener-prod-mobile.mp4" type="video/mp4" data-astro-cid-nkfzof7j> </video> <!-- Video para pantallas pequeñas --> <video class="hidden md:block" autoplay muted loop id="myVideoMobile" data-astro-cid-nkfzof7j${addAttribute(createTransitionScope($$result, "bejs26oy"), "data-astro-transition-persist")}> <source src="videos/u-wifi-opener-prod.mp4" type="video/mp4" data-astro-cid-nkfzof7j> </video> <div class="botones-back-column" data-astro-cid-nkfzof7j> <div class="botones-back" data-astro-cid-nkfzof7j> ${renderComponent($$result, "BuyOrApplyFree", $$BuyOrApplyFree, { "fontweightL": "500", "fontweightR": "500", "data-astro-cid-nkfzof7j": true })} </div> </div> </section> `;
}, "C:/Trabajo/uwifi-astro/uwif_astro_web/src/components/index/Secciones/HeroSeccion1.astro", "self");

const enviromentConfig = {
    encoding:THREE.SRGBColorSpace,
    files: [
        './enviroments/px.png',
        './enviroments/nx.png',
        './enviroments/py.png',
        './enviroments/ny.png',
        './enviroments/pz.png',
        './enviroments/nz.png'
    ]
    };

    const pointLightConfig = {
      name: 'directional_light',
      castShadow: true,
      intensity: 10,
      position: [1.9, 3, 1],
      penumbra: 0.5,
      color: '#fff',
    };

({
    offset: 0.1,
    darkness: 0.7,
    blendFunction: BlendFunction.OVERLAY,
  });
  
  const chromaticAberrationConfig = {
    offset: [0.0005, 0.0005],
    blendFunction: BlendFunction.SCREEN,
  };
  
  const bloomConfig = {
    mipmapBlur: true,
    intensity: 1,
    luminanceThreshold: 0.7,
    luminanceSmoothing: 0.7,
    resolutionX: Resolution.AUTO_SIZE,
    resolutionY: Resolution.AUTO_SIZE,
    kernelSize: 1,
    blendFunction: BlendFunction.OVERLAY,

  };
  
  ({
    opacity: 0.6,
    blendingFunction: BlendFunction.NORMAL,
    premultiply: true,
  });
  
  const toneMappingConfig = {
    blendFunction: BlendFunction.SCREEN,
    mode: 3
    };

function Moden$1(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("models/moden.glb");
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    actions["Logo_luzAction"].play();
  }, []);
  return /* @__PURE__ */ jsx("group", { ref: group, ...props, dispose: null, children: /* @__PURE__ */ jsxs("group", { name: "Scene", children: [
    /* @__PURE__ */ jsx(
      "mesh",
      {
        name: "Logo_luz",
        castShadow: true,
        receiveShadow: true,
        geometry: nodes.Logo_luz.geometry,
        material: materials.Material,
        position: [0.845, 0.495, -0.03],
        scale: 0.932
      }
    ),
    /* @__PURE__ */ jsxs(
      "group",
      {
        name: "Cuerpo",
        position: [0.354, 0.539, 3e-3],
        scale: [0.012, 0.033, 0.012],
        children: [
          /* @__PURE__ */ jsx(
            "mesh",
            {
              name: "Cubo015",
              castShadow: true,
              receiveShadow: true,
              geometry: nodes.Cubo015.geometry,
              material: materials.Material
            }
          ),
          /* @__PURE__ */ jsx(
            "mesh",
            {
              name: "Cubo015_1",
              castShadow: true,
              receiveShadow: true,
              geometry: nodes.Cubo015_1.geometry,
              material: materials.white
            }
          ),
          /* @__PURE__ */ jsx(
            "mesh",
            {
              name: "Cubo015_2",
              castShadow: true,
              receiveShadow: true,
              geometry: nodes.Cubo015_2.geometry,
              material: materials.blackCristal
            }
          ),
          /* @__PURE__ */ jsx(
            "mesh",
            {
              name: "Cubo015_3",
              castShadow: true,
              receiveShadow: true,
              geometry: nodes.Cubo015_3.geometry,
              material: materials.gray
            }
          ),
          /* @__PURE__ */ jsx(
            "mesh",
            {
              name: "Cubo015_4",
              castShadow: true,
              receiveShadow: true,
              geometry: nodes.Cubo015_4.geometry,
              material: materials.yellow
            }
          ),
          /* @__PURE__ */ jsx(
            "mesh",
            {
              name: "Cubo015_5",
              castShadow: true,
              receiveShadow: true,
              geometry: nodes.Cubo015_5.geometry,
              material: materials.Upurple
            }
          ),
          /* @__PURE__ */ jsx(
            "mesh",
            {
              name: "Cubo015_6",
              castShadow: true,
              receiveShadow: true,
              geometry: nodes.Cubo015_6.geometry,
              material: materials.black
            }
          ),
          /* @__PURE__ */ jsx(
            "mesh",
            {
              name: "Cubo015_7",
              castShadow: true,
              receiveShadow: true,
              geometry: nodes.Cubo015_7.geometry,
              material: materials.Bronce
            }
          ),
          /* @__PURE__ */ jsx(
            "mesh",
            {
              name: "Cubo015_8",
              castShadow: true,
              receiveShadow: true,
              geometry: nodes.Cubo015_8.geometry,
              material: materials["Material.004"]
            }
          ),
          /* @__PURE__ */ jsx(
            "mesh",
            {
              name: "Cubo015_9",
              castShadow: true,
              receiveShadow: true,
              geometry: nodes.Cubo015_9.geometry,
              material: materials.Plata
            }
          ),
          /* @__PURE__ */ jsx(
            "mesh",
            {
              name: "Cubo015_10",
              castShadow: true,
              receiveShadow: true,
              geometry: nodes.Cubo015_10.geometry,
              material: materials.BotonON
            }
          ),
          /* @__PURE__ */ jsx(
            "mesh",
            {
              name: "Cubo015_11",
              castShadow: true,
              receiveShadow: true,
              geometry: nodes.Cubo015_11.geometry,
              material: materials["Material.001"]
            }
          )
        ]
      }
    )
  ] }) });
}
useGLTF.preload("models/moden.glb");

function Scene() {
  let initCamera = { far: 2e3, near: 0.1, fov: 35, position: [0, 0.5, 3], rotation: [0, 0, 0] };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Suspense, { fallback: null, children: /* @__PURE__ */ jsxs(EffectComposer, { multisampling: 4, children: [
      /* @__PURE__ */ jsx(ToneMapping, { ...toneMappingConfig }),
      /* @__PURE__ */ jsx(Bloom, { ...bloomConfig }),
      /* @__PURE__ */ jsx(ChromaticAberration, { ...chromaticAberrationConfig })
    ] }) }),
    /* @__PURE__ */ jsx(PerspectiveCamera, { makeDefault: true, ...initCamera }),
    /* @__PURE__ */ jsx(Environment, { ...enviromentConfig }),
    /* @__PURE__ */ jsx("pointLight", { ...pointLightConfig, "shadow-bias": -3e-4, "shadow-mapSize": [512 * 6, 512 * 6], "shadow-normalBias": 0.01 }),
    /* @__PURE__ */ jsx("ambientLight", { intensity: 9.2, color: "#5d5d5d" }),
    /* @__PURE__ */ jsx(Suspense, { children: /* @__PURE__ */ jsx(
      PresentationControls,
      {
        config: { mass: 2, tension: 500 },
        snap: { mass: 4, tension: 1500 },
        rotation: [0.2, -2, 0],
        polar: [-Math.PI / 3, Math.PI / 3],
        azimuth: [-Math.PI / 1.4, Math.PI / 2],
        children: /* @__PURE__ */ jsx(Moden$1, { position: [-0.2, 0, 0] })
      }
    ) })
  ] });
}

const Moden = () => {
  return /* @__PURE__ */ jsx(
    Canvas,
    {
      style: { height: "100%", width: "100%" },
      dpr: [0.5, 1.2],
      performance: { current: 1, min: 0.1, max: 1, debounce: 200, regress: 0.5 },
      shadows: true,
      gl: {
        antialias: false,
        alpha: true,
        powerPreference: "high-performance",
        stencil: false,
        depth: false,
        toneMapping: THREE.NoToneMapping,
        toneMappingExposure: 0.6,
        gammaOutput: true,
        outputColorSpace: THREE.SRGBColorSpace
      },
      children: /* @__PURE__ */ jsx(Scene, {})
    }
  );
};

const $$Astro$7 = createAstro("https://Adrinc.github.io");
const $$HeroSeccion2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$HeroSeccion2;
  return renderTemplate`${maybeRenderHead()}<section id="#bestinternet" data-astro-cid-bn6s3qso> <main class="flex flex-row gap-4 box-border" data-astro-cid-bn6s3qso> <div class="columna-izquierda" data-astro-cid-bn6s3qso> <div class="gradient-text" data-astro-cid-bn6s3qso>The best internet</div> <div data-astro-cid-bn6s3qso><span class="subtitle" data-astro-cid-bn6s3qso>connection for <img class="image" loading="lazy" alt="uwifi white logo" srcset="faviui.png" data-astro-cid-bn6s3qso></span></div> <p class="description" data-astro-cid-bn6s3qso>In our fast-paced world, imagine a high-speed home internet service that keeps you connected, outpaces the competition, all at a pleasantly surprising low cost!</p> <div class=" botones flex flex-row content-start max-md:justify-center" data-astro-cid-bn6s3qso> ${renderComponent($$result, "BuyOrApplyFree", $$BuyOrApplyFree, { "data-astro-cid-bn6s3qso": true })} </div> </div> <div class="flex justify-center items-center relative" data-astro-cid-bn6s3qso> <span class="green-ball-blured" id="ball1" data-astro-cid-bn6s3qso></span> <div class="moden" data-astro-cid-bn6s3qso>${renderComponent($$result, "Moden", Moden, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Trabajo/uwifi-astro/uwif_astro_web/src/components/Scene3D/ModenScene/Main3D", "client:component-export": "default", "data-astro-cid-bn6s3qso": true, "data-astro-transition-persist": createTransitionScope($$result, "4o2ppcdl") })}</div> </div> </main> </section> `;
}, "C:/Trabajo/uwifi-astro/uwif_astro_web/src/components/index/Secciones/HeroSeccion2.astro", "self");

const $$Astro$6 = createAstro("https://Adrinc.github.io");
const $$ACPSeccion = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ACPSeccion;
  return renderTemplate`${maybeRenderHead()}<section id="acp" data-astro-cid-s6m3ekpi> <div class="row-acp" data-astro-cid-s6m3ekpi> <span class="title" data-astro-cid-s6m3ekpi>We are an <span class="acp" data-astro-cid-s6m3ekpi> ACP </span> Provider!</span> </div> <p class="description" data-astro-cid-s6m3ekpi>We´re keeping people connected by participation in the FCC´s Affordable Connectivity Program. Qualifying households will be able to receive a $30/mo discount on their <span style="display: inline-block; font-weight: 500" data-astro-cid-s6m3ekpi>UWIFI Plan.</span></p> <div class="fila-fc" data-astro-cid-s6m3ekpi> <div class="columnas-fc" data-astro-cid-s6m3ekpi> <span class="purple-ball-blured" data-astro-cid-s6m3ekpi></span> <img alt="fc logo" class="fc-logo" loading="lazy" src="/image/fc.png" data-astro-cid-s6m3ekpi> <div class="fc-info" data-astro-cid-s6m3ekpi> <p data-astro-cid-s6m3ekpi>AFFORDABLE</p> <p data-astro-cid-s6m3ekpi>CONNECTIVITY</p> <p data-astro-cid-s6m3ekpi>PROGRAM</p> </div> </div> </div> ${renderComponent($$result, "BuyOrApplyFree", $$BuyOrApplyFree, { "data-astro-cid-s6m3ekpi": true })} <div class="main-enroll-active-use" data-astro-cid-s6m3ekpi> <div class="enroll-active-use" data-astro-cid-s6m3ekpi> <div class="flex  flex-col items-center gap-6" data-astro-cid-s6m3ekpi> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 89 99" fill="none" data-astro-cid-s6m3ekpi> <path d="M87.5379 72.8144L75.5762 60.8354C75.1167 60.3715 74.57 60.0032 73.9677 59.7519C73.3654 59.5006 72.7193 59.3712 72.0668 59.3712C71.4143 59.3712 70.7682 59.5006 70.1659 59.7519C69.5635 60.0032 69.0169 60.3715 68.5574 60.8354L50.8619 78.5564C50.4038 79.019 50.0414 79.5675 49.7954 80.1706C49.5494 80.7737 49.4248 81.4195 49.4285 82.0709V94.0499C49.4285 95.3627 49.9493 96.6218 50.8762 97.5501C51.8032 98.4784 53.0604 98.9999 54.3714 98.9999H66.3331C66.9836 99.0037 67.6284 98.8788 68.2307 98.6325C68.8329 98.3861 69.3806 98.0232 69.8425 97.5644L87.5379 79.8434C88.0012 79.3833 88.3689 78.8358 88.6199 78.2326C88.8708 77.6294 89 76.9824 89 76.3289C89 75.6755 88.8708 75.0285 88.6199 74.4253C88.3689 73.8221 88.0012 73.2746 87.5379 72.8144ZM64.2571 89.0999H59.3142V84.1499L72.0668 71.3789L77.0096 76.3289L64.2571 89.0999ZM34.6 89.0999H14.8286C13.5176 89.0999 12.2604 88.5784 11.3334 87.6501C10.4065 86.7218 9.8857 85.4627 9.8857 84.1499V14.85C9.8857 13.5372 10.4065 12.2781 11.3334 11.3498C12.2604 10.4215 13.5176 9.89999 14.8286 9.89999H39.5428V24.75C39.5428 28.6884 41.1051 32.4656 43.886 35.2505C46.6669 38.0354 50.4386 39.6 54.3714 39.6H69.1999V44.55C69.1999 45.8628 69.7207 47.1218 70.6477 48.0501C71.5746 48.9784 72.8319 49.5 74.1428 49.5C75.4537 49.5 76.7109 48.9784 77.6379 48.0501C78.5649 47.1218 79.0856 45.8628 79.0856 44.55V34.353C79.0341 33.8982 78.9347 33.4502 78.7891 33.0165V32.571C78.5514 32.062 78.2344 31.5942 77.8499 31.185L48.1928 1.485C47.7842 1.09997 47.317 0.7825 46.8088 0.544499C46.6613 0.523512 46.5115 0.523512 46.364 0.544499L44.7822 0H14.8286C10.8958 0 7.12408 1.56455 4.34318 4.34946C1.56229 7.13437 0 10.9115 0 14.85V84.1499C0 88.0884 1.56229 91.8655 4.34318 94.6505C7.12408 97.4354 10.8958 98.9999 14.8286 98.9999H34.6C35.9109 98.9999 37.1681 98.4784 38.0951 97.5501C39.0221 96.6218 39.5428 95.3627 39.5428 94.0499C39.5428 92.7371 39.0221 91.478 38.0951 90.5497C37.1681 89.6214 35.9109 89.0999 34.6 89.0999ZM49.4285 16.8795L62.2305 29.7H54.3714C53.0604 29.7 51.8032 29.1785 50.8762 28.2502C49.9493 27.3218 49.4285 26.0628 49.4285 24.75V16.8795ZM24.7143 59.3999H54.3714C55.6823 59.3999 56.9395 58.8784 57.8665 57.9501C58.7935 57.0218 59.3142 55.7628 59.3142 54.45C59.3142 53.1371 58.7935 51.8781 57.8665 50.9498C56.9395 50.0215 55.6823 49.5 54.3714 49.5H24.7143C23.4033 49.5 22.1461 50.0215 21.2191 50.9498C20.2922 51.8781 19.7714 53.1371 19.7714 54.45C19.7714 55.7628 20.2922 57.0218 21.2191 57.9501C22.1461 58.8784 23.4033 59.3999 24.7143 59.3999ZM24.7143 39.6H29.6571C30.968 39.6 32.2253 39.0784 33.1522 38.1501C34.0792 37.2218 34.6 35.9628 34.6 34.65C34.6 33.3371 34.0792 32.0781 33.1522 31.1498C32.2253 30.2215 30.968 29.7 29.6571 29.7H24.7143C23.4033 29.7 22.1461 30.2215 21.2191 31.1498C20.2922 32.0781 19.7714 33.3371 19.7714 34.65C19.7714 35.9628 20.2922 37.2218 21.2191 38.1501C22.1461 39.0784 23.4033 39.6 24.7143 39.6ZM34.6 69.2999H24.7143C23.4033 69.2999 22.1461 69.8214 21.2191 70.7498C20.2922 71.6781 19.7714 72.9371 19.7714 74.2499C19.7714 75.5628 20.2922 76.8218 21.2191 77.7501C22.1461 78.6784 23.4033 79.1999 24.7143 79.1999H34.6C35.9109 79.1999 37.1681 78.6784 38.0951 77.7501C39.0221 76.8218 39.5428 75.5628 39.5428 74.2499C39.5428 72.9371 39.0221 71.6781 38.0951 70.7498C37.1681 69.8214 35.9109 69.2999 34.6 69.2999Z" fill="white" data-astro-cid-s6m3ekpi></path> </svg> <p class="title" data-astro-cid-s6m3ekpi>Enroll</p> </div> <p class="description" data-astro-cid-s6m3ekpi>
Complete a short questionnaire to 
                check if you qualify for Lifeline and 
                the Affordable Connectivity Program 
                (ACP), a federal initiative ensuring 
                broadband access for all Americans.</p> </div> <div class="enroll-active-use" data-astro-cid-s6m3ekpi> <div class="flex flex-col items-center gap-6" data-astro-cid-s6m3ekpi> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 104 109" fill="none" data-astro-cid-s6m3ekpi> <path d="M69.0669 73.9853L78.9233 83.8417L98.6361 64.1289" stroke="white" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-s6m3ekpi></path> <path d="M93.7077 44.4155V34.5591C93.7059 32.8307 93.2497 31.1331 92.3847 29.6366C91.5197 28.1402 90.2764 26.8976 88.7795 26.0333L54.2821 6.32051C52.7837 5.45543 51.084 5 49.3538 5C47.6237 5 45.924 5.45543 44.4256 6.32051L9.92821 26.0333C8.43132 26.8976 7.18803 28.1402 6.32303 29.6366C5.45804 31.1331 5.00177 32.8307 5 34.5591V73.9848C5.00177 75.7132 5.45804 77.4108 6.32303 78.9072C7.18803 80.4037 8.43132 81.6463 9.92821 82.5106L44.4256 102.223C45.924 103.088 47.6237 103.544 49.3538 103.544C51.084 103.544 52.7837 103.088 54.2821 102.223L64.1385 96.6052M27.1769 16.1769L71.5308 41.5572" stroke="white" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-s6m3ekpi></path> <path d="M6.42969 29.6316L49.3544 54.2726M49.3544 54.2726L92.279 29.6316M49.3544 54.2726V103.555" stroke="white" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-s6m3ekpi></path> </svg> <p class="title" data-astro-cid-s6m3ekpi>Activate</p> </div> <p class="description" data-astro-cid-s6m3ekpi>
Once you’re approved, we’ll send 
                your 5G device for free. When your 
                package arrives, just follow the 
                instructions and you’ll be connected 
                in no time!</p> </div> <div class="enroll-active-use" data-astro-cid-s6m3ekpi> <div class="flex flex-col items-center gap-6" data-astro-cid-s6m3ekpi> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 85" fill="none" data-astro-cid-s6m3ekpi> <path d="M5 31.9656C18.4591 19.3669 36.3152 12.3535 54.8725 12.377M69.8342 16.4197L76.7116 24.1705C76.8594 24.3356 77.0429 24.4659 77.2486 24.5517C77.4543 24.6375 77.6769 24.6767 77.9 24.6663C78.1231 24.6559 78.341 24.5963 78.5375 24.4917C78.7341 24.3872 78.9043 24.2404 79.0357 24.0623L93 5M89.7832 48.7705C70.5025 29.7525 39.2424 29.7525 19.9617 48.7705M74.8215 64.7885C69.5306 59.5713 62.3547 56.6404 54.8725 56.6404C47.3902 56.6404 40.2144 59.5713 34.9235 64.7885M54.8725 80V77.541" stroke="white" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-s6m3ekpi></path> </svg> <p class="title" data-astro-cid-s6m3ekpi>Use</p> </div> <p class="description" data-astro-cid-s6m3ekpi>
Keeping your service is as simple as 
                doing what you love.</p> </div> </div> </section> `;
}, "C:/Trabajo/uwifi-astro/uwif_astro_web/src/components/index/Secciones/ACPSeccion.astro", void 0);

const $$Astro$5 = createAstro("https://Adrinc.github.io");
const $$TarjetaPaqueteEspecial = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$TarjetaPaqueteEspecial;
  const { precio, modelo, description, lista } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="contenedor-tarjeta" data-astro-cid-se2tznlk> <div class="tarjeta" data-astro-cid-se2tznlk> <div data-astro-cid-se2tznlk> <h1 class="title" data-astro-cid-se2tznlk>SUPER 5G</h1> <div class="precio-contenedor" data-astro-cid-se2tznlk> <p class="price" data-astro-cid-se2tznlk>$${precio}</p> <p class="text-white text-xl text-left max-md:text-sm" data-astro-cid-se2tznlk> /month with <span class="text-white font-bold text-xl text-left" data-astro-cid-se2tznlk> AutoPay</span></p> </div> <p class="title self-start" data-astro-cid-se2tznlk>FREE for ACP Suscribers</p> </div> <ul class="fila" data-astro-cid-se2tznlk> <li class="description" data-astro-cid-se2tznlk> <span class="icono" data-astro-cid-se2tznlk> <img alt="icono check" class="image" src="image/checkwhite.svg" data-astro-cid-se2tznlk> </span>
5G Wi-Fi Gateway device included
</li> <li class="description" data-astro-cid-se2tznlk> <span class="icono" data-astro-cid-se2tznlk> <img alt="icono check" class="image" src="image/checkwhite.svg" data-astro-cid-se2tznlk> </span> <span class=" font-bold" data-astro-cid-se2tznlk>FREE</span> <span data-astro-cid-se2tznlk> 2 Day Shipping</span> </li> <li class="description" data-astro-cid-se2tznlk> <span class="icono" data-astro-cid-se2tznlk> <img alt="icono check" class="image" src="image/checkwhite.svg" data-astro-cid-se2tznlk> </span>
Plug and Play
<span class=" font-bold" data-astro-cid-se2tznlk>Self Insall</span> </li> <li class="description" data-astro-cid-se2tznlk> <span class="icono" data-astro-cid-se2tznlk> <img alt="icono check" class="image" src="image/checkwhite.svg" data-astro-cid-se2tznlk> </span>
Redundancy Included
</li> <li class="description" data-astro-cid-se2tznlk> <span class="icono" data-astro-cid-se2tznlk> <img alt="icono check" class="image" src="image/checkwhite.svg" data-astro-cid-se2tznlk> </span>
Portable (Take it with <img alt="uwifi white logo" class="uwifiicon" src="image/ublanca.svg" data-astro-cid-se2tznlk> )
</li> </ul> <div class="buyOrApply" data-astro-cid-se2tznlk> ${renderComponent($$result, "BuyOrApplyFree", $$BuyOrApplyFree, { "direction": "column", "data-astro-cid-se2tznlk": true })} </div> <p class="description" data-astro-cid-se2tznlk><span class=" font-bold" data-astro-cid-se2tznlk>CALL NOW! </span> (123)456-789-000</p> <a href="/" class="link" data-astro-cid-se2tznlk>See more details</a> </div> </div> `;
}, "C:/Trabajo/uwifi-astro/uwif_astro_web/src/components/TarjetaPaqueteEspecial.astro", void 0);

const $$Astro$4 = createAstro("https://Adrinc.github.io");
const $$JustOnePlanSeccion = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$JustOnePlanSeccion;
  let listas = [
    { icono: "image/checkwhite.svg", texto: "5G Wi-Fi Gateway device included" },
    { icono: "image/checkwhite.svg", texto: "FREE 2 Day Shipping" },
    { icono: "image/checkwhite.svg", texto: "Plug and Play Self Insall" },
    { icono: "image/checkwhite.svg", texto: "Redundancy Included" },
    { icono: "image/checkwhite.svg", texto: "Portable" }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="plan" data-astro-cid-vm7osakd> <div class="main-container" data-astro-cid-vm7osakd> <div class="columna-izquierda" data-astro-cid-vm7osakd> <div class="title" id="homeinternet" data-astro-cid-vm7osakd>
Don't overpay for a <span class="text-tertiaryTextColor" data-astro-cid-vm7osakd><br data-astro-cid-vm7osakd>5G home internet </span><br data-astro-cid-vm7osakd> experience!
</div> <div class="title" id="oneplan" data-astro-cid-vm7osakd>
JUST <span class="text-tertiaryTextColor" data-astro-cid-vm7osakd>ONE</span> PLAN?
</div> <div class="subtitle" data-astro-cid-vm7osakd> <p data-astro-cid-vm7osakd>Yes, we make it <span class="text-secondaryColor font-bold" data-astro-cid-vm7osakd>simple.</span> </p> </div> <p class="description" data-astro-cid-vm7osakd>Discover perfection in simplicity. Our single subscription has it all, without the hassle.</p> <p class="description-inferior" data-astro-cid-vm7osakd>Only the best for <img alt="uwifi logo white" class="image" loading="lazy" srcset="faviui.png" data-astro-cid-vm7osakd></p> </div> <div class="columna-derecha" data-astro-cid-vm7osakd> <span class="green-ball-blured" id="ball3" data-astro-cid-vm7osakd></span> ${renderComponent($$result, "TarjetaPaqueteEspecial", $$TarjetaPaqueteEspecial, { "precio": "30", "modelo": "Value", "description": "The best value for your money.", "lista": listas, "data-astro-cid-vm7osakd": true })} </div> </div> </section> `;
}, "C:/Trabajo/uwifi-astro/uwif_astro_web/src/components/index/Secciones/JustOnePlanSeccion.astro", void 0);

const $$Astro$3 = createAstro("https://Adrinc.github.io");
const $$DividerPlus = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$DividerPlus;
  return renderTemplate`${maybeRenderHead()}<div class="divider" data-astro-cid-xdqginpx> <div class="rounded" data-astro-cid-xdqginpx></div> <h1 class="plus" data-astro-cid-xdqginpx>PLUS</h1> <hr class="rounded" data-astro-cid-xdqginpx> </div> `;
}, "C:/Trabajo/uwifi-astro/uwif_astro_web/src/components/DividerPlus.astro", void 0);

const $$Astro$2 = createAstro("https://Adrinc.github.io");
const $$TabletSeccion = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TabletSeccion;
  return renderTemplate`${maybeRenderHead()}<section id="freetablet" data-astro-cid-yytca7gu> <p class="title" data-astro-cid-yytca7gu>FREE <span class="text-primaryTextColor" data-astro-cid-yytca7gu> TABLET!*</span></p> <img src="/image/uwifitablet.png" alt="tablet" class="image" data-astro-cid-yytca7gu> <span class="green-ball-blured" data-astro-cid-yytca7gu></span> <p class="parrafo" data-astro-cid-yytca7gu>*Free tablet if you are subject to the ACP program</p> </section> `;
}, "C:/Trabajo/uwifi-astro/uwif_astro_web/src/components/index/Secciones/TabletSeccion.astro", void 0);

const $$Astro$1 = createAstro("https://Adrinc.github.io");
const $$BentogridSeccion2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BentogridSeccion2;
  return renderTemplate`${maybeRenderHead()}<section id="#bentogrid" class="" data-astro-cid-dhvo4iln> <img class="web hidden md:block object-contain" src="/image/bento/bweb.png" alt="" data-astro-cid-dhvo4iln> <img class="tablet hidden sm:block md:hidden object-contain" src="/image/bento/btablet.png" alt="" data-astro-cid-dhvo4iln> <img class="movil block sm:hidden object-contain" src="/image/bento/bmovil.png" alt="" data-astro-cid-dhvo4iln> </section> `;
}, "C:/Trabajo/uwifi-astro/uwif_astro_web/src/components/index/Secciones/BentogridSeccion2.astro", void 0);

const $$Astro = createAstro("https://Adrinc.github.io");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSeccion1", $$HeroSeccion1, {})} ${renderComponent($$result2, "CarruselTextoHorizontal", $$CarruselTextoHorizontal, {})} ${renderComponent($$result2, "HeroSeccion2", $$HeroSeccion2, {})} ${renderComponent($$result2, "CarruselTextoHorizontal", $$CarruselTextoHorizontal, {})} ${renderComponent($$result2, "BentogridSeccion2", $$BentogridSeccion2, {})} ${renderComponent($$result2, "CarruselTextoHorizontal", $$CarruselTextoHorizontal, {})} ${renderComponent($$result2, "JustOnePlanSeccion", $$JustOnePlanSeccion, {})} ${renderComponent($$result2, "DividerPlus", $$DividerPlus, {})} ${renderComponent($$result2, "TabletSeccion", $$TabletSeccion, {})} ${renderComponent($$result2, "CarruselTextoHorizontal", $$CarruselTextoHorizontal, {})} ${renderComponent($$result2, "ACPSeccion", $$ACPSeccion, {})} ` })}`;
}, "C:/Trabajo/uwifi-astro/uwif_astro_web/src/pages/index.astro", void 0);

const $$file = "C:/Trabajo/uwifi-astro/uwif_astro_web/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
