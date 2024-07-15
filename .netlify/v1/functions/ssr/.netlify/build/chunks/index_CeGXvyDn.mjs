/* empty css                         */
import { c as createComponent, r as renderTemplate, a as addAttribute, b as createAstro, d as renderComponent, e as renderHead, f as renderSlot, m as maybeRenderHead } from './astro/server_Bc31avQS.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import fs from 'fs';
import path from 'path';

const $$Astro$3 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/carlo/OneDrive/Documents/Material y proyectos de programaci\xF3n/Proyectos propios/apis/hbd-project/secret-project/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$2 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="bg-slate-300" class="body"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/carlo/OneDrive/Documents/Material y proyectos de programaci\xF3n/Proyectos propios/apis/hbd-project/secret-project/src/layout/Layout.astro", void 0);

const $$Astro$1 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const { title, subtitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header class="relative h-96 mb-8 bg-cover bg-center bg-no-repeat " style="background-image:url('/public/head/im40.jpg')"> <section class="absolute bg-black bg-opacity-45 w-full h-full flex flex-col items-center justify-center text-center head"> <h1 class="text-white font-bold text-title capitalize"> ${title} </h1> <h3 class="text-subtitle text-white font-bold capitalize"> ${subtitle} </h3> </section> </header>`;
}, "C:/Users/carlo/OneDrive/Documents/Material y proyectos de programaci\xF3n/Proyectos propios/apis/hbd-project/secret-project/src/components/Header/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="text-center uppercase pt-20 "> <span class="">derechos resevardos 2024</span> </footer>`;
}, "C:/Users/carlo/OneDrive/Documents/Material y proyectos de programaci\xF3n/Proyectos propios/apis/hbd-project/secret-project/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { img, text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="card"> <img${addAttribute(img, "src")} alt="Imagen de nosotros"> <div class="hidden-text"> <p>${text}</p> </div> </div>`;
}, "C:/Users/carlo/OneDrive/Documents/Material y proyectos de programaci\xF3n/Proyectos propios/apis/hbd-project/secret-project/src/components/Card/Card.astro", void 0);

function getImagesWithTexts() {
  const imageDir = path.join(process.cwd(), 'public', 'image');
  const images = fs.readdirSync(imageDir).filter(file => file.endsWith('.jpg'));

  const texts = [
    "Eres mi sol en los días nublados.",
    "Tu sonrisa ilumina mi vida.",
    "Te amo más de lo que las palabras pueden expresar.",
    "Cada momento contigo es un tesoro.",
    "Eres mi razón de ser.",
    "Gracias por existir.",
    "Eres mi sueño hecho realidad.",
    "Mi amor por ti crece cada día.",
    "Contigo, todo es posible.",
    "Eres mi alegría constante.",
    "A tu lado, todo es mejor.",
    "Eres mi inspiración diaria.",
    "Tu amor me hace fuerte.",
    "Eres mi refugio y mi paz.",
    "Eres la dueña de mi corazón.",
    "Mi amor por ti es eterno.",
    "Cada día te amo más.",
    "Eres mi estrella brillante.",
    "Mi mundo es perfecto contigo.",
    "Te amo hoy y siempre.",
    "Eres mi persona favorita.",
    "Eres mi felicidad absoluta.",
    "Dejame abrazarte para siempre.❤️",
    "Eres mi compañera perfecta.",
    "A tu lado, soy mejor.",
    "Eres mi amor verdadero.",
    "Te amo con todo mi ser.",
    "Eres mi razón para sonreír.",
    "Eres mi todo.",
    "Mi vida es completa contigo.",
    "Eres mi amor eterno.",
    "Tu amor es mi mayor regalo.",
    "Eres mi sol y mis estrellas.",
    "Contigo, el mundo es maravilloso.",
    "Eres mi mejor amiga y amor.",
    "Eres mi vida entera.",
    "Tu amor me hace feliz.",
    "Eres mi amor infinito.",
    "Eres mi luz en la oscuridad.",
    "Eres mi paz y mi hogar.",
    "Eres el amor de mi vida.",
    "Te amo más de lo que imaginas.",
    "Eres mi felicidad completa.",
    "Mi corazón es tuyo.",
    "Eres mi alma gemela.",
  ];


  return images.map((file, index) => ({
    src: `/image/${file}`,
    text: texts[index] || "Nunca te olvidaré"
  }));
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const imagesWithTexts = getImagesWithTexts();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Peque HBD\u{1F382}" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "title": "Nuestra Historia de Amor.", "subtitle": "Cada momento contigo es un tesoro, mi amor \u2764\uFE0F" })} ${maybeRenderHead()}<div class="flex justify-center"> <audio id="musica" src="/audio/kany-garcia-para-siempre.mp3" controls autoplay loop></audio> </div> <div class="gallery"> ${imagesWithTexts.map(({ src, text }) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "img": src, "text": text })}`)} </div> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/carlo/OneDrive/Documents/Material y proyectos de programaci\xF3n/Proyectos propios/apis/hbd-project/secret-project/src/pages/index.astro", void 0);

const $$file = "C:/Users/carlo/OneDrive/Documents/Material y proyectos de programación/Proyectos propios/apis/hbd-project/secret-project/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
