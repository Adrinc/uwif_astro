/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent, h as createTransitionScope } from '../astro_01yF9eX1.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';
import { a as $$BotonFlecha, $ as $$Layout } from './about_jRxWoLsT.mjs';
import { D as DropMenuStyle } from '../support.01a45a70_NyPQ3GXJ.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
/* empty css                            */
import { $ as $$Robot } from './selfservice_x-XuP4qV.mjs';

const $$Astro$3 = createAstro("https://Adrinc.github.io");
const $$SupportSeccion = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SupportSeccion;
  return renderTemplate`${maybeRenderHead()}<section id="faq&support" data-astro-cid-hatfhywc> <p class="title flex align-middle justify-center mb-8" data-astro-cid-hatfhywc>SUPPORT</p> <div class="doted" data-astro-cid-hatfhywc> <p class="description flex align-middle justify-center text-center" data-astro-cid-hatfhywc>Save time and manage your account online with our Self-service Center or using <span class="font-bold" data-astro-cid-hatfhywc>U-app.</span></p> ${renderComponent($$result, "BotonFlecha", $$BotonFlecha, { "link": "/selfservice", "texto": "CHECK IT OUT", "backgroundColor": "#00c207", "iconColor": "#ffffff", "data-astro-cid-hatfhywc": true })} </div> <span class="green-ball-blured" data-astro-cid-hatfhywc></span> </section> `;
}, "C:/Trabajo/uwifi-astro/uwif_astro_web/src/components/Support/Secciones/SupportSeccion.astro", void 0);

const $$Astro$2 = createAstro("https://Adrinc.github.io");
const $$ContactNumbers = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ContactNumbers;
  const dataIzquierda = [
    {
      title: "Purchasing at U-wifi",
      rows: [
        "Residential: 1-800-123-UWIFI",
        "Business: 1-800-123-UWIFI"
      ]
    },
    {
      title: "General Customer Care & Technical Support",
      rows: [
        "From the U-app, on your phone.",
        "From your phone: 111",
        "Call: 1-800-123-UWIFI",
        "So we can troubleshoot with you."
      ]
    },
    {
      title: "U-wifi High Speed Internet Support",
      rows: [
        "U-wifi 5G Home Internet Sales: 1-800-123-UWIFI",
        "U-wifi 5G Home Internet Tech Support: 1-800-123-UWIFI"
      ]
    },
    {
      title: "International Callers",
      rows: [
        "Call: 1-800-123-UWIFI",
        "All calls made to this number from a",
        "Customer Care representatives are available daily from 4 a.m. to Midnight PST."
      ]
    }
  ];
  const dataDerecha = [
    {
      title: "Short Codes",
      rows: [
        'Just dial the short-code below as if you were making a phone call (information is not available via text message), hit "Send," and we\u2019ll give you the info you need. It\u2019s fast, easy, and free!',
        "For your account balance and last payment received info."
      ]
    },
    {
      title: "Contact us - TTY",
      rows: [
        "TTY service is available for people who are Deaf, Hard of Hearing or have a Speech Disability.",
        "Dial 111 to reach a Relay Agent."
      ]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="contactnumbers" data-astro-cid-5m3cg4kz> <h1 data-astro-cid-5m3cg4kz>CONTACT NUMBERS</h1> <div class="contactNumbersContainer" data-astro-cid-5m3cg4kz> <div class="columnaIzquierda" data-astro-cid-5m3cg4kz> ${dataIzquierda.map((item) => renderTemplate`<div class="mb-8 gap-4" data-astro-cid-5m3cg4kz> <h2 class="carttile" data-astro-cid-5m3cg4kz>${item.title}</h2> <p class="description" data-astro-cid-5m3cg4kz> ${item.rows.map((row) => renderTemplate`<p data-astro-cid-5m3cg4kz>${row}</p>`)} </p> </div>`)} </div> <div class="columnaDerecha" data-astro-cid-5m3cg4kz> ${dataDerecha.map((item) => renderTemplate`<div class="mb-8 gap-8" data-astro-cid-5m3cg4kz> <h2 class="carttile" data-astro-cid-5m3cg4kz>${item.title}</h2> <p class="description" data-astro-cid-5m3cg4kz> ${item.rows.map((row) => renderTemplate`<p data-astro-cid-5m3cg4kz>${row}</p>`)} </p> </div>`)} </div> <span class="green-ball-blured" id="ball1" data-astro-cid-5m3cg4kz></span> </div> </section> `;
}, "C:/Trabajo/uwifi-astro/uwif_astro_web/src/components/Support/Secciones/ContactNumbers.astro", void 0);

const DropMenu = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  return /* @__PURE__ */ jsxs("div", { className: "mb-20", children: [
    /* @__PURE__ */ jsx("button", { className: DropMenuStyle.dropbutton, onClick: toggleOpen, children: /* @__PURE__ */ jsxs("div", { className: "flex w-full justify-between items-center align-middle gap-4 ", children: [
      /* @__PURE__ */ jsxs("p", { className: DropMenuStyle.question, children: [
        question,
        " "
      ] }),
      /* @__PURE__ */ jsx("div", { className: isOpen ? "transform rotate-90" : "", children: /* @__PURE__ */ jsx("svg", { "alt-arial": "button icon", width: "32", height: "32", viewBox: "0 0 31 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("g", { id: "chevron-right 1", children: /* @__PURE__ */ jsx("path", { id: "Vector", d: "M11.6987 23.5705L19.4126 15.8566L11.6987 8.1427", stroke: "#ffff", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" }) }) }) })
    ] }) }),
    isOpen && /* @__PURE__ */ jsx("p", { className: DropMenuStyle.answer, children: answer })
  ] });
};

const $$Astro$1 = createAstro("https://Adrinc.github.io");
const $$CommonQuestionsSeccion = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CommonQuestionsSeccion;
  const dataIzquierda = [
    {
      question: "What are the different ways I can pay my bill?",
      answer: "You can pay your bill online, by phone, by mail, or in person. We accept Visa, MasterCard, Discover, and American Express. You can also pay with a check or money order."
    },
    {
      question: "What should I do if my gateway is lost or stolen?",
      answer: "If your gateway is lost or stolen, please contact us immediately. We will deactivate your gateway and send you a new one. You will be responsible for the cost of the new gateway."
    }
  ];
  const dataDerecha = [
    {
      question: "What should I do if my gateway is lost or stolen?",
      answer: "If your gateway is lost or stolen, please contact us immediately. We will deactivate your gateway and send you a new one. You will be responsible for the cost of the new gateway."
    },
    {
      question: "Can I use my all devices on U-wifi network?",
      answer: "Yes, you can connect any device to the U-wifi network. However, we recommend that you use a gateway to connect your devices to the network. This will provide you with the best possible connection."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="questions" data-astro-cid-za7bqge7> <h1 data-astro-cid-za7bqge7>Common questions about U-wifi Internet</h1> <div class="questionContainer " data-astro-cid-za7bqge7> <div class="columnaIzquierda" data-astro-cid-za7bqge7> ${dataIzquierda.map((item) => renderTemplate`<div class="mb-8 gap-8" data-astro-cid-za7bqge7> ${renderComponent($$result, "DropMenu", DropMenu, { "client:visible": true, "question": item.question, "answer": item.answer, "client:component-hydration": "visible", "client:component-path": "C:/Trabajo/uwifi-astro/uwif_astro_web/src/components/react_components/DropMenu", "client:component-export": "default", "data-astro-cid-za7bqge7": true, "data-astro-transition-persist": createTransitionScope($$result, "4kwb3ouo") })} </div>`)} </div> <div class="columnaDerecha" data-astro-cid-za7bqge7> ${dataDerecha.map((item) => renderTemplate`<div class="mb-8 gap-8" data-astro-cid-za7bqge7> ${renderComponent($$result, "DropMenu", DropMenu, { "client:visible": true, "question": item.question, "answer": item.answer, "client:component-hydration": "visible", "client:component-path": "C:/Trabajo/uwifi-astro/uwif_astro_web/src/components/react_components/DropMenu", "client:component-export": "default", "data-astro-cid-za7bqge7": true, "data-astro-transition-persist": createTransitionScope($$result, "7e27ewkm") })} </div>`)} </div> </div> <span class="green-ball-blured" data-astro-cid-za7bqge7></span> </section> `;
}, "C:/Trabajo/uwifi-astro/uwif_astro_web/src/components/Support/Secciones/CommonQuestionsSeccion.astro", "self");

const $$Astro = createAstro("https://Adrinc.github.io");
const $$Support = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Support;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "FAQ & SUPPORT" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SupportSeccion", $$SupportSeccion, {})} ${renderComponent($$result2, "ContactNumbers", $$ContactNumbers, {})} ${renderComponent($$result2, "CommonQuestionsSeccion", $$CommonQuestionsSeccion, {})} ${renderComponent($$result2, "Robot", $$Robot, {})} ` })}`;
}, "C:/Trabajo/uwifi-astro/uwif_astro_web/src/pages/support.astro", void 0);

const $$file = "C:/Trabajo/uwifi-astro/uwif_astro_web/src/pages/support.astro";
const $$url = "/support";

export { $$Support as default, $$file as file, $$url as url };
