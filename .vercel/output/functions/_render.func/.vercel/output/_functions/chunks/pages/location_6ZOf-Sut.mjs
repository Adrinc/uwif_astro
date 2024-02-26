/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent } from '../astro_01yF9eX1.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';
import { a as $$BotonFlecha, $ as $$Layout } from './about_jRxWoLsT.mjs';
/* empty css                             */

const $$Astro$4 = createAstro("https://Adrinc.github.io");
const $$HeroLocationSeccion = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$HeroLocationSeccion;
  return renderTemplate`${maybeRenderHead()}<section id="heroabout" data-astro-cid-aynqdeqv><span class="green-ball-blured" data-astro-cid-aynqdeqv></span> <div class="contenedor" data-astro-cid-aynqdeqv> <h1 class="title" data-astro-cid-aynqdeqv>U-wifi in <span class=" font-bold" data-astro-cid-aynqdeqv>Astro Valley</span></h1> <p class="description" data-astro-cid-aynqdeqv>Fast, reliable and unlimited internet access tailored for Astro Valley Residents</p> <div class="twoColumns" data-astro-cid-aynqdeqv> <div class="columnL" data-astro-cid-aynqdeqv> <div class="columnLRow1" data-astro-cid-aynqdeqv> <p class="font-extrabold text-9xl text-primaryTextColor" data-astro-cid-aynqdeqv>$30</p> <div class="flex flex-column align-middle" data-astro-cid-aynqdeqv> <p class="text-left font-medium text-lg text-white" data-astro-cid-aynqdeqv>/month with <br data-astro-cid-aynqdeqv> Autopay</p> </div> </div> <div class="w-full p-5" data-astro-cid-aynqdeqv> ${renderComponent($$result, "BotonFlecha", $$BotonFlecha, { "link": "/contact", "texto": "BUY NOW", "borderColor": "#ffffff", "iconColor": "#ffffff", "width": "100%", "data-astro-cid-aynqdeqv": true })} </div> </div> <div class="columnR" data-astro-cid-aynqdeqv> <div class="columnLRow1" data-astro-cid-aynqdeqv> <p class="font-extrabold text-9xl text-primaryTextColor" data-astro-cid-aynqdeqv>Free</p> <div class="flex flex-column align-middle" data-astro-cid-aynqdeqv> <p class="text-left font-medium text-lg text-white" data-astro-cid-aynqdeqv>for ACP <br data-astro-cid-aynqdeqv> Subscribers</p> </div> </div> <div class="w-full p-5" data-astro-cid-aynqdeqv> ${renderComponent($$result, "BotonFlecha", $$BotonFlecha, { "link": "/contact", "texto": "APPLY FOR FREE WIFI", "backgroundColor": "#7C47DD", "borderColor": "#ffffff", "iconColor": "#ffffff", "width": "100%", "data-astro-cid-aynqdeqv": true })} </div> </div> </div> </div> </section> `;
}, "C:/Trabajo/uwifi-astro/uwif_astro_web/src/components/location/Secciones/HeroLocationSeccion.astro", void 0);

const $$Astro$3 = createAstro("https://Adrinc.github.io");
const $$WelcomeToWifiSeccion = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$WelcomeToWifiSeccion;
  return renderTemplate`${maybeRenderHead()}<section id="welcometowifi" data-astro-cid-etirkw4v> <span class="green-ball-blured" data-astro-cid-etirkw4v></span> <div class="row-title" data-astro-cid-etirkw4v> <h1 class="title" data-astro-cid-etirkw4v>Welcome to U-wifi, Astro Valley’s <span class=" text-tertiaryTextColor italic" data-astro-cid-etirkw4v>premier internet service provider,</span> where we bring you closer to what matters most.</h1> </div> <div class="rowDosColumnas" data-astro-cid-etirkw4v> <div class="columnaL" data-astro-cid-etirkw4v> <p class="description" data-astro-cid-etirkw4v>Whether you are treaming, gaming, working from home, or exploring the vastness of the internet, U-wifi ensures you’re connected seamlessly and efficiently.</p> <p class="description" data-astro-cid-etirkw4v>With U-wifi, experience unmatched speed, reliability, and unlimited data designed to meet the demands of modern living in Astro Valley.</p> </div> <div class="columnaD" data-astro-cid-etirkw4v> <div class="contenedor" data-astro-cid-etirkw4v> <p class="desRow" data-astro-cid-etirkw4v> * 5G Wi-Fi Gateway device included</p> <p class="desRow" data-astro-cid-etirkw4v> * FREE 2 Day shipping</p> <p class="desRow" data-astro-cid-etirkw4v> * Plug and Play Self Install</p> <p class="desRow" data-astro-cid-etirkw4v> * Redundancy Included</p> <p class="desRow" data-astro-cid-etirkw4v> * Portable (Take it with U)</p> ${renderComponent($$result, "BotonFlecha", $$BotonFlecha, { "link": "/contact", "texto": "SEE MORE DETAILS", "borderColor": "#ffffff", "iconColor": "#ffffff", "data-astro-cid-etirkw4v": true })} </div> </div> </div> </section> `;
}, "C:/Trabajo/uwifi-astro/uwif_astro_web/src/components/location/Secciones/WelcomeToWifiSeccion.astro", void 0);

const $$Astro$2 = createAstro("https://Adrinc.github.io");
const $$ThreeCards = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ThreeCards;
  return renderTemplate`<!-- a div flex row with 3 boxes diferent colors, each box has a flex column inside with a image and a text -->${maybeRenderHead()}<div class="flex-row" data-astro-cid-4fpj6qsa> <div id="box1" class="flex-column" data-astro-cid-4fpj6qsa> <img src="icons/receiveicon.svg" alt="box1" data-astro-cid-4fpj6qsa> <p data-astro-cid-4fpj6qsa>Buy</p> </div> <div id="box2" class="flex-column" data-astro-cid-4fpj6qsa> <img src="icons/receiveicon.svg" alt="box2" data-astro-cid-4fpj6qsa> <p data-astro-cid-4fpj6qsa>Free</p> </div> <div id="box3" class="flex-column" data-astro-cid-4fpj6qsa> <img src="icons/receiveicon.svg" alt="box3" data-astro-cid-4fpj6qsa> <p data-astro-cid-4fpj6qsa>Plug & Play</p> </div> </div> `;
}, "C:/Trabajo/uwifi-astro/uwif_astro_web/src/components/location/ThreeCards.astro", void 0);

const $$Astro$1 = createAstro("https://Adrinc.github.io");
const $$CallNow = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CallNow;
  return renderTemplate`<!-- a div flex row with 3 boxes diferent colors, each box has a flex column inside with a image and a text -->${maybeRenderHead()}<div class="flex-row" data-astro-cid-6gntstjz> <p class="descripcion" data-astro-cid-6gntstjz>Join the U-wifi family today and start enjoying fast, reliable and unlimited internet service tailored for Astro Valley!</p> <div class="columnaDerecha" data-astro-cid-6gntstjz> <p class="title" data-astro-cid-6gntstjz>Call now!</p> <div class="botones" data-astro-cid-6gntstjz> ${renderComponent($$result, "BotonFlecha", $$BotonFlecha, { "texto": "(555) 123-456-7890", "width": "100%", "link": "#", "backgroundColor": "var(--primary-buttom-color)", "iconColor": "var(--primary-text-color)", "iconColorHover": "var(--tertiary-color)", "data-astro-cid-6gntstjz": true })} </div> </div> </div> `;
}, "C:/Trabajo/uwifi-astro/uwif_astro_web/src/components/location/CallNow.astro", void 0);

const $$Astro = createAstro("https://Adrinc.github.io");
const $$Location = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Location;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "LOCATION" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroLocationSeccion", $$HeroLocationSeccion, {})} ${renderComponent($$result2, "WelcomeToWifiSeccion", $$WelcomeToWifiSeccion, {})} ${renderComponent($$result2, "ThreeCards", $$ThreeCards, {})} ${renderComponent($$result2, "CallNow", $$CallNow, {})} ` })}`;
}, "C:/Trabajo/uwifi-astro/uwif_astro_web/src/pages/location.astro", void 0);

const $$file = "C:/Trabajo/uwifi-astro/uwif_astro_web/src/pages/location.astro";
const $$url = "/location";

export { $$Location as default, $$file as file, $$url as url };
