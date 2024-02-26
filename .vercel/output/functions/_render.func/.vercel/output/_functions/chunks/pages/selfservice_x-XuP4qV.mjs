/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent } from '../astro_01yF9eX1.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';
import { a as $$BotonFlecha, $ as $$Layout } from './about_jRxWoLsT.mjs';
/* empty css                                */
/* empty css                                */

const $$Astro$8 = createAstro("https://Adrinc.github.io");
const $$HeroSelfServiceSeccion = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$HeroSelfServiceSeccion;
  return renderTemplate`${maybeRenderHead()}<section id="heroselfservice" data-astro-cid-kzoliw5n> <p class="title" data-astro-cid-kzoliw5n>SELF <span class="text-primaryColor" data-astro-cid-kzoliw5n> SERVICE </span> <span class="text-primaryTextColor" data-astro-cid-kzoliw5n> CENTER</span></p> </section> `;
}, "C:/Trabajo/uwifi-astro/uwif_astro_web/src/components/selfservice/Secciones/HeroSelfServiceSeccion.astro", void 0);

const $$Astro$7 = createAstro("https://Adrinc.github.io");
const $$SimpleToolsSeccion = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$SimpleToolsSeccion;
  let buttons = [
    {
      texto: "CREATE AN ACCOUNT",
      link: "#"
    },
    {
      texto: "DOWNLOAD THE APP",
      link: "#"
    },
    {
      texto: "PAY YOUR BILL",
      link: "#"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="simpletools" data-astro-cid-iwpq7nfm> <div class="row-title" data-astro-cid-iwpq7nfm> <h1 class="title" data-astro-cid-iwpq7nfm>Use these simple tools to manage your account and stay connected with <span class="font-bold" data-astro-cid-iwpq7nfm>U-app.</span></h1> </div> <div class="row-buttons" data-astro-cid-iwpq7nfm> ${buttons.map((buttons2) => renderTemplate`${renderComponent($$result, "BotonFlecha", $$BotonFlecha, { ...buttons2, "showIcon": false, "paddingleft": "20px", "paddingright": "20px", "borderColor": "transparent", "borderColorHover": "transparent", "backgroundColor": "var(--primary-buttom-color)", "fontweight": "300", "iconColorHover": "var(--tertiary-color)", "data-astro-cid-iwpq7nfm": true })}`)} </div> <span class="green-ball-blured" data-astro-cid-iwpq7nfm></span> </section> `;
}, "C:/Trabajo/uwifi-astro/uwif_astro_web/src/components/selfservice/Secciones/SimpleToolsSeccion.astro", void 0);

const $$Astro$6 = createAstro("https://Adrinc.github.io");
const $$Robot = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Robot;
  return renderTemplate`${maybeRenderHead()}<div class="robot" data-astro-cid-shq2ultj> <img src="/image/robot.svg" alt="robot friend" data-astro-cid-shq2ultj> </div> `;
}, "C:/Trabajo/uwifi-astro/uwif_astro_web/src/components/global/Robot.astro", void 0);

const $$Astro$5 = createAstro("https://Adrinc.github.io");
const $$SimpleToolsStartSeccion = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$SimpleToolsStartSeccion;
  let buttons = [
    {
      texto: "Have an account? Login ",
      link: "#"
    },
    {
      texto: "Create my account ",
      link: "#"
    },
    {
      texto: "Reset my password ",
      link: "#"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="simpletoolsstart" data-astro-cid-ssvwt2r5> <div class="contenedor" data-astro-cid-ssvwt2r5> <h1 class="title" data-astro-cid-ssvwt2r5>Let’s get started</h1> <h2 class="subtitle" data-astro-cid-ssvwt2r5>Log in to manage your account, upgrade your plan, or shop for new phones.</h2> <div class="row-buttons" data-astro-cid-ssvwt2r5> ${buttons.map((buttons2) => renderTemplate`${renderComponent($$result, "BotonFlecha", $$BotonFlecha, { ...buttons2, "marginTopIncon": "5px", "paddingleft": "30px", "borderColor": "transparent", "borderColorHover": "transparent", "gradientColorCenter": "transparent", "gradientColorLeft": "transparent", "gradientColorRight": "transparent", "fontweight": "500", "iconColor": "var(--tertiary-color)", "fontsize": "30px", "textColorHover": "var(--tertiary-text-color)", "data-astro-cid-ssvwt2r5": true })}`)} </div> </div> <span class="green-ball-blured" data-astro-cid-ssvwt2r5></span> </section> `;
}, "C:/Trabajo/uwifi-astro/uwif_astro_web/src/components/selfservice/Secciones/SimpleToolsStartSeccion.astro", void 0);

const $$Astro$4 = createAstro("https://Adrinc.github.io");
const $$GetUwifiAppSeccion = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$GetUwifiAppSeccion;
  return renderTemplate`${maybeRenderHead()}<section id="heroabout" data-astro-cid-di27y7lm> <div class="contenedor" data-astro-cid-di27y7lm> <div class="columnaIzquierda" data-astro-cid-di27y7lm> <p class="title " data-astro-cid-di27y7lm>
Get the U-wifi app and
<br data-astro-cid-di27y7lm>
get more for U.
</p> <p class="description" data-astro-cid-di27y7lm> Easily pay your bill, manage your account, upgrade your indormation, and contact our support team.</p> <div class="botones" data-astro-cid-di27y7lm> <div data-astro-cid-di27y7lm> <img class="logoBoton" src="/image/AppStore.png" alt="app store logo" data-astro-cid-di27y7lm> </div> <div data-astro-cid-di27y7lm> <img class="logoBoton" src="/image/AndroidStore.png" alt="google play logo" data-astro-cid-di27y7lm> </div> <div class="botonconflecha" data-astro-cid-di27y7lm> ${renderComponent($$result, "BotonFlecha", $$BotonFlecha, { "texto": "Find out more", "link": "#", "marginTopIncon": "5px", "paddingleft": "0px", "borderColor": "transparent", "borderColorHover": "transparent", "fontweight": "500", "iconColor": "var(--tertiary-color)", "fontsize": "30px", "data-astro-cid-di27y7lm": true })} </div> </div> </div> <div data-astro-cid-di27y7lm> <img class="smartphone" src="/image/selfservicepage/App2cut.png" alt="man with mac" data-astro-cid-di27y7lm> </div> </div> <span class="green-ball-blured" data-astro-cid-di27y7lm></span> </section> `;
}, "C:/Trabajo/uwifi-astro/uwif_astro_web/src/components/selfservice/Secciones/GetUwifiAppSeccion.astro", void 0);

const $$Astro$3 = createAstro("https://Adrinc.github.io");
const $$ReadyToPayBillSeccion = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ReadyToPayBillSeccion;
  let buttons = [
    {
      texto: "Download the app",
      link: "#"
    },
    {
      texto: "See how it works ",
      link: "#"
    },
    {
      texto: "Login to your account",
      link: "#"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="simpletoolsstart" data-astro-cid-563bl3wg> <div class="contenedor" data-astro-cid-563bl3wg> <h1 class="title" data-astro-cid-563bl3wg>Ready to pay your bill?</h1> <!--      <h2 class="subtitle">You can also set up AutoPay or arrange to split your bill into two payments.</h2> --> <div class="main-row-contenedor" data-astro-cid-563bl3wg> <div class="columnaIzquierda" data-astro-cid-563bl3wg> <img src="/image/phone.svg" alt="" data-astro-cid-563bl3wg> <div class="row-buttons" data-astro-cid-563bl3wg> ${renderComponent($$result, "BotonFlecha", $$BotonFlecha, { "texto": buttons[0].texto, "link": buttons[0].link, "marginTopIncon": "5px", "paddingleft": "30px", "borderColor": "transparent", "borderColorHover": "transparent", "gradientColorCenter": "transparent", "gradientColorLeft": "transparent", "gradientColorRight": "transparent", "fontweight": "500", "iconColor": "var(--tertiary-color)", "fontsize": "30px", "textColorHover": "var(--tertiary-text-color)", "data-astro-cid-563bl3wg": true })} ${renderComponent($$result, "BotonFlecha", $$BotonFlecha, { "texto": buttons[1].texto, "link": buttons[1].link, "marginTopIncon": "5px", "paddingleft": "30px", "borderColor": "transparent", "borderColorHover": "transparent", "gradientColorCenter": "transparent", "gradientColorLeft": "transparent", "gradientColorRight": "transparent", "fontweight": "500", "iconColor": "var(--tertiary-color)", "fontsize": "30px", "textColorHover": "var(--tertiary-text-color)", "data-astro-cid-563bl3wg": true })} </div> </div> <div class="columnaDerecha" data-astro-cid-563bl3wg> <img src="/image/monitor.svg" alt="" data-astro-cid-563bl3wg> <div class="row-buttons" data-astro-cid-563bl3wg> ${renderComponent($$result, "BotonFlecha", $$BotonFlecha, { "texto": buttons[2].texto, "link": buttons[2].link, "marginTopIncon": "5px", "paddingleft": "30px", "borderColor": "transparent", "borderColorHover": "transparent", "gradientColorCenter": "transparent", "gradientColorLeft": "transparent", "gradientColorRight": "transparent", "fontweight": "500", "iconColor": "var(--tertiary-color)", "fontsize": "30px", "textColorHover": "var(--tertiary-text-color)", "data-astro-cid-563bl3wg": true })} </div> </div> </div> </div> <span class="green-ball-blured" data-astro-cid-563bl3wg></span> </section> `;
}, "C:/Trabajo/uwifi-astro/uwif_astro_web/src/components/selfservice/Secciones/ReadyToPayBillSeccion.astro", void 0);

const $$Astro$2 = createAstro("https://Adrinc.github.io");
const $$WatchHowToSeccion = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$WatchHowToSeccion;
  return renderTemplate`${maybeRenderHead()}<section id="WatchHowToSeccion" data-astro-cid-s6sxxwlr> <div class="contenedor" data-astro-cid-s6sxxwlr> <div class="columnaIzquierda" data-astro-cid-s6sxxwlr> <p class="title " data-astro-cid-s6sxxwlr>
Watch all HOW TO
<br data-astro-cid-s6sxxwlr>
videos we have for U
</p> <p class="description" data-astro-cid-s6sxxwlr>
Find out about self-service options from U-wifi, like how to pay your bill, how to use the app, and all info you need to get the best experience.
</p> ${renderComponent($$result, "BotonFlecha", $$BotonFlecha, { "texto": "Go watch our How to videos", "link": "#", "showIcon": false, "paddingleft": "20px", "paddingright": "20px", "borderColor": "transparent", "borderColorHover": "transparent", "backgroundColor": "var(--primary-buttom-color)", "fontweight": "500", "iconColorHover": "var(--tertiary-color)", "data-astro-cid-s6sxxwlr": true })} </div> </div> <span class="green-ball-blured" data-astro-cid-s6sxxwlr></span> </section> `;
}, "C:/Trabajo/uwifi-astro/uwif_astro_web/src/components/selfservice/Secciones/WatchHowToSeccion.astro", void 0);

const $$Astro$1 = createAstro("https://Adrinc.github.io");
const $$FindOpenSeccion = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FindOpenSeccion;
  let buttons = [
    {
      texto: "Find a store",
      link: "#"
    },
    {
      texto: "See how",
      link: "#"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="findOpenSeccion" data-astro-cid-bmmmfjyb> <div class="contenedor" data-astro-cid-bmmmfjyb> <div class="columnaIzquierda" data-astro-cid-bmmmfjyb> <p class="title " data-astro-cid-bmmmfjyb>
Find a open store
<br data-astro-cid-bmmmfjyb>
near U.
</p> <p class="description" data-astro-cid-bmmmfjyb>
Select stores are operating 10 am to 6 pm local time.
</p> <div class="row-buttons" data-astro-cid-bmmmfjyb> ${buttons.map((button) => renderTemplate`${renderComponent($$result, "BotonFlecha", $$BotonFlecha, { ...button, "textColor": "var(--tertiary-text-color)", "marginTopIncon": "5px", "paddingleft": "0px", "borderColor": "transparent", "borderColorHover": "transparent", "gradientColorCenter": "transparent", "gradientColorLeft": "transparent", "gradientColorRight": "transparent", "fontweight": "500", "iconColor": "var(--primary-color)", "fontsize": "32px", "textColorHover": "var(--tertiary-text-color)", "data-astro-cid-bmmmfjyb": true })}`)} </div> </div> </div> <span class="green-ball-blured" data-astro-cid-bmmmfjyb></span> </section> `;
}, "C:/Trabajo/uwifi-astro/uwif_astro_web/src/components/selfservice/Secciones/FindOpenSeccion.astro", void 0);

const $$Astro = createAstro("https://Adrinc.github.io");
const $$Selfservice = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Selfservice;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Self services" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSelfServices", $$HeroSelfServiceSeccion, {})} ${renderComponent($$result2, "SimpleToolsSeccion", $$SimpleToolsSeccion, {})} ${renderComponent($$result2, "SimpleToolsStartSeccion", $$SimpleToolsStartSeccion, {})} ${renderComponent($$result2, "GetUwifiAppSeccion", $$GetUwifiAppSeccion, {})} ${renderComponent($$result2, "ReadyToPayBillSeccion", $$ReadyToPayBillSeccion, {})} ${renderComponent($$result2, "WatchHowToSeccion", $$WatchHowToSeccion, {})} ${renderComponent($$result2, "FindOpenSeccion", $$FindOpenSeccion, {})} ${renderComponent($$result2, "Robot", $$Robot, {})} ` })}`;
}, "C:/Trabajo/uwifi-astro/uwif_astro_web/src/pages/selfservice.astro", void 0);

const $$file = "C:/Trabajo/uwifi-astro/uwif_astro_web/src/pages/selfservice.astro";
const $$url = "/selfservice";

const selfservice = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Selfservice,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Robot as $, selfservice as s };
