import fs from 'fs';
import path from 'path';

export function getImagesWithTexts() {
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