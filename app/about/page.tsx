"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function AboutPage() {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (globalThis.location.hash === "#about" && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <main className="relative min-h-screen bg-[#060617] text-white flex items-center justify-center px-6 py-16">
      <div
        className="absolute inset-0 -z-10 flex justify-center"
        style={{ pointerEvents: "none" }}
      >
        <div
          className="w-[800px] h-[400px] rounded-3xl opacity-20 blur-2xl"
          style={{
            background:
              "radial-gradient(closest-side at 30% 40%, rgba(23,127,255,0.12), transparent 20%), radial-gradient(closest-side at 70% 60%, rgba(128,70,255,0.08), transparent 30%)",
            transform: "translateY(20px)",
          }}
        />
      </div>

      <motion.div
        ref={aboutRef}
        id="about"
        className="relative z-10 w-full max-w-4xl p-8 md:p-12 rounded-3xl glassmorph border border-white/10 shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold mb-6 text-center md:text-left text-[#17f] drop-shadow-[0_6px_20px_rgba(23,127,255,0.25)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          À propos de moi
        </motion.h2>

        <motion.p
          className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Je suis HASINIRINA Jean de Dieu, étudiant en 3ᵉ année de Licence en Informatique à
          l&apos;Université Ecole Nationale d&apos;Informatique Fianarantsoa (ENI). Passionné par le
          développement web et le développement d&apos;applications mobiles, j&apos;utilise des
          technologies modernes comme React et Next.js et le framework Flutter pour créer des
          applications performantes et intuitives. Je continue en apprendre Git et GitHub pour la gestion de
          version et le travail collaboratif. Compétent en bureautique (Word, PowerPoint, Excel), je
          communique couramment en français et je continue aussi de perfectionner mon anglais. Curieux et
          créatif, je m&apos;inspire de mes loisirs tels que les mangas, les animes et la musique.
        </motion.p>

        <motion.blockquote
          className="text-[#00bfff] font-bold italic border-l-4 border-[#00bfff] pl-4 max-w-2xl mx-auto md:mx-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          « Il n’y a qu’une façon d’échouer, c’est d’abandonner avant d’avoir réussi. » – Georges Clémenceau
        </motion.blockquote>
      </motion.div>
    </main>
  );
}
