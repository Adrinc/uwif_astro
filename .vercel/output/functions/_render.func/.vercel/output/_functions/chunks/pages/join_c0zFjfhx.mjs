/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, i as renderSlot, e as addAttribute, u as unescapeHTML, f as renderComponent } from '../astro_01yF9eX1.mjs';
import 'kleur/colors';
import 'cssesc';
import { $ as $$Layout } from './about_jRxWoLsT.mjs';
import 'clsx';
import { parse } from 'marked';
/* empty css                         */

const $$Astro$2 = createAstro("https://Adrinc.github.io");
const $$BlurryContainer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BlurryContainer;
  return renderTemplate`${maybeRenderHead()}<div class="m-10 mx-auto p-5 max-w-md text-white/80 text-center text-sm flex backdrop-blur-md bg-gradient-to-r from-white/10 rounded-2xl border-dashed border border-primaryColor">${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Trabajo/uwifi-astro/uwif_astro_web/src/components/global/BlurryContainer.astro", void 0);

const $$Astro$1 = createAstro("https://Adrinc.github.io");
const $$Markdown = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Markdown;
  const { content, classN, textAlign = "text-justify" } = Astro2.props;
  console.log(textAlign);
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`${textAlign} flex list-outside flex-col gap-3 text-white/80 font-[200] [&>*>strong]:text-primaryColor [&>*>a]:text-colorSecondary [&>h1]:font-display [&>h1]:text-[32px] [&>h1]:font-[400] [&>h1]:text-[#93f296] [&>h2]:font-display [&>h2]:text-[25px] [&>h2]:font-[400] [&>h2]:text-white [&>h3]:font-display [&>h3]:text-[18px] [&>h3]:font-[400] [&>h3]:text-white [&>ul]:flex [&>ul]:flex-col [&>ul]:gap-3 ${classN} `, "class")}>${unescapeHTML(parse(content))}</div>`;
}, "C:/Trabajo/uwifi-astro/uwif_astro_web/src/components/global/Markdown.astro", void 0);

const $$Astro = createAstro("https://Adrinc.github.io");
const $$Join = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Join;
  const titles = ["Affordable Internet", "Its all for"];
  const logo = {
    url: "/image/uwifi_stroke.png",
    alternativeText: "alternative text"
  };
  const description = `
### Join the waitlist.
Enter your email to secure your spot and get notified when we launch.
`;
  const bento = {
    url: "/image/uwifi_stroke.png",
    alternativeText: "alternative text"
  };
  const FormDescription = "By using this form you agree with the storage and handling of your data by this website.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Join the waitlist.", "showMenus": false, "data-astro-cid-jtzn4zcc": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex md:flex-row flex-col text-white p-10 place-content-center items-center overflow-y-auto min-h-screen gap-10 join-background" data-astro-cid-jtzn4zcc> <section class="flex flex-col items-center justify-center gap-0 z-10" data-astro-cid-jtzn4zcc> <h1 class="font-display md:text-[40px] text-[30px] text-center font-normal tracking-tight" data-astro-cid-jtzn4zcc> ${titles[0]} </h1> <div class="flex flex-wrap items-center justify-center gap-5" data-astro-cid-jtzn4zcc> <h2 class="font-display md:text-[75px] text-[40px] text-center font-semibold tracking-tighter" data-astro-cid-jtzn4zcc> ${titles[1]} </h2> <img${addAttribute(logo["url"], "src")} class="transition-opacity duration-2000 ease-in-out opacity-100" alt="Logo"${addAttribute(100, "width")} data-astro-cid-jtzn4zcc> </div> <!-- <div
                set:html={parse(description)}
                class={\`flex list-outside flex-col gap-3 text-primary-blue text-center [&>*>strong]:text-sky-500 [&>*>a]:text-secondary-red [&>h1]:text-[36px] [&>h1]:font-[600] [&>h1]:text-[#50d71e]  [&>h2]:text-[32px] [&>h3]:text-[26px] [&>ul]:flex [&>ul]:flex-col [&>ul]:gap-3\`}
            /> --> ${renderComponent($$result2, "Markdown", $$Markdown, { "content": description, "textAlign": "text-center", "data-astro-cid-jtzn4zcc": true })} ${renderComponent($$result2, "BlurryContainer", $$BlurryContainer, { "data-astro-cid-jtzn4zcc": true }, { "default": ($$result3) => renderTemplate` <form id="form_join" method="post" action="/api/insert/Subscribers" class="flex flex-col gap-5" data-astro-cid-jtzn4zcc> <input class="grow rounded-full w-full p-2 text-gray-400" type="email" id="email" name="email" required placeholder="E-mail:" data-astro-cid-jtzn4zcc> <input class="grow rounded-full w-full p-2 text-gray-400" type="text" id="zipcode" name="zipcode" required minlength="5" maxlength="10" placeholder="Zip Code:" data-astro-cid-jtzn4zcc> ${FormDescription} <button type="submit" class="w-full rounded-full bg-gradient-to-r from-[#00c207] to-[#08964a] p-2" data-astro-cid-jtzn4zcc>Notify Me!</button> </form> ` })} </section> <div class="text-white flex flex-row items-center z-10" data-astro-cid-jtzn4zcc> <img${addAttribute(bento["url"], "src")} class="transition-opacity duration-2000 ease-in-out opacity-100" alt="Logo"${addAttribute(300, "width")} data-astro-cid-jtzn4zcc> </div> </div> ` })} `;
}, "C:/Trabajo/uwifi-astro/uwif_astro_web/src/pages/join.astro", void 0);

const $$file = "C:/Trabajo/uwifi-astro/uwif_astro_web/src/pages/join.astro";
const $$url = "/join";

const join = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Join,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Markdown as $, join as j };
