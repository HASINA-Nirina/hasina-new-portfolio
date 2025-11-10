"use client";

import React, { useState, useEffect } from "react";
import { Download, User, Code, Link, GitBranch, Mail, Phone, Facebook, Github, Menu, X, Eye, UserStar } from "lucide-react";
import { motion } from "framer-motion";
import { BsEyeglasses } from "react-icons/bs";

// --- Navigation Item Component ---
const NavItem = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-white hover:text-[#17f] transition duration-200 block md:inline-block px-3 py-2 rounded-lg font-medium"
  >
    {children}
  </a>
);

// --- Navbar Component ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour fermer le menu mobile lors du clic sur un lien
  const handleNavClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glassmorph-nav shadow-xl">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Nom */}
          <a href="#hero" className="text-2xl font-bold text-white hover:text-[#17f] transition">
            H<span className="text-[#17f]">JdD</span>
          </a>

          {/* Menu de navigation pour grand écran */}
          <div className="hidden md:flex space-x-6">
            <NavItem href="#hero" onClick={handleNavClick}>Accueil</NavItem>
            <NavItem href="#about" onClick={handleNavClick}>À propos</NavItem>
            <NavItem href="#projects" onClick={handleNavClick}>Projets</NavItem>
            <NavItem href="#contact" onClick={handleNavClick}>Contact</NavItem>
          </div>

          {/* Bouton pour menu mobile */}
          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Contenu du menu mobile (avec animation Framer Motion) */}
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
          closed: { opacity: 0, height: 0, transition: { duration: 0.3 } },
        }}
        className={`md:hidden overflow-hidden ${isOpen ? 'border-t border-white/10' : ''}`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col" onClick={handleNavClick}>
          <NavItem href="#hero">Accueil</NavItem>
          <NavItem href="#about">À propos</NavItem>
          <NavItem href="#projects">Projets</NavItem>
          <NavItem href="#contact">Contact</NavItem>
        </div>
      </motion.div>
    </nav>
  );
};


// Interface pour les données des projets
interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  github?: string;
  imageUrls: string[];
}

// Données de vos projets
const projectsData: Project[] = [
  {
    title: "Application web du gestion formation en ligne d'Universite ECAT Taratra",
    description: "Une application web full-stack pour la gestion de formation a distance entres les étudiants par antennes avec paiements livres et forum de messages.",
    technologies: ["Next.js 15", "FastAPI", "PostgreSQL", "Tailwind CSS"],
    link: "..",
    github: "https://github.com/HASINA-Nirina/",
    imageUrls: [
      "/img/1.png",
      "/img/2.png",
      "/img/3.png",
      "/img/4.png",
      "/img/5.png",
      "/img/6.png",
      "/img/7.png",
      "/img/8.png",
      "/img/9.png",
      "/img/10.png",
    ],
  },
  {
    title: "Application mobile quizz battle geolocalisé entre amis",
    description: "Une application mobile full-stack pour les quizz qui contient des differentes types des questions avec son catégories par niveau et peut aussi pour faire une multiplayer entre amis.",
    technologies: ["Flutter", "Dart", "Supabase", "Socket.io"],
    link:"..",
    github:"https://github.com/HASINA-Nirina/",
    imageUrls: [
      "/img/11.png",
      "/img/12.png",
    ],
  },
];

// Composant pour le diaporama d'images
const ProjectSlideshow: React.FC<{ imageUrls: string[], title: string }> = ({ imageUrls, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Logique d'intervalle pour changer l'index de l'image
  useEffect(() => {
    // Si une seule image, pas besoin de diaporama
    if (imageUrls.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        (prevIndex + 1) % imageUrls.length
      );
    }, 4000); // Change l'image toutes les 4 secondes (ajustable)

    // Nettoyage de l'intervalle lors du démontage du composant
    return () => clearInterval(interval);
  }, [imageUrls.length]);
  
  // Utilise Framer Motion pour une transition d'opacité douce entre les images
  return (
    <div className="relative w-full h-full">
      {imageUrls.map((url, index) => (
        <motion.img
          key={index}
          src={url}
          alt={`Aperçu ${index + 1} du projet ${title}`}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentIndex ? 1 : 0 }}
          transition={{ duration: 1.0 }} // Transition de 1 seconde pour le fondu
          loading="lazy"
        />
      ))}
    </div>
  );
};


// Styles CSS globaux (extrait pour l'injection)
const globalStyles = `
  /* Animation de flottement pour l'image */
  @keyframes floating-image {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  /* Animation de vague de la bordure (contour) */
  @keyframes border-wave {
    0%, 100% {
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }
    25% {
      border-radius: 70% 30% 50% 50% / 40% 70% 30% 60%;
    }
    50% {
      border-radius: 30% 70% 60% 40% / 70% 60% 40% 30%;
    }
    75% {
      border-radius: 50% 50% 70% 30% / 60% 30% 70% 40%;
    }
  }

  .floating-image {
    animation: floating-image 4s ease-in-out infinite;
  }

  /* La classe animate-border-wave a été modifiée pour ne pas interférer avec le background About */
  .animate-border-wave {
    animation: border-wave 8s ease-in-out infinite;
    filter: blur(20px);
    opacity: 0.8;
  }
  
  .glassmorph {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.01));
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }
  .glassmorph-nav {
    /* Fond noir semi-transparent pour la barre de navigation fixe */
    background: rgba(6, 6, 23, 0.9); 
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
  }

  @keyframes typing {
    0% { width: 0 }
    100% { width: 45% }
  }
  @keyframes blink-cursor {
    0%, 100% { border-color: transparent }
    50% { border-color: #17f }
  }
`;

// Configuration Framer Motion pour les sections
const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};


export default function App() {
  // L'URL de la photo de profil (dans le dossier public)
  const profileImageUrl = "/profile.jpg";

  return (
    <main className="relative min-h-screen bg-[#060617] text-white overflow-hidden font-inter pt-20"> 
      {/* arrière-plan grille + vague */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            `repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0 1px, transparent 1px 80px),
              repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0 1px, transparent 1px 80px),
              linear-gradient(180deg, rgba(10,10,20,0.65), rgba(8,8,14,0.85))`,
          backgroundSize: "80px 80px, 80px 80px, cover",
          backgroundPosition: "center",
          filter: "saturate(1.05)",
        }}
      />

      {/* cube / motif flou central */}
      <div aria-hidden className="absolute inset-x-0 top-20 -z-20 flex justify-center" style={{ pointerEvents: "none" }}>
        <div
          className="w-[900px] h-[400px] rounded-3xl opacity-20 blur-2xl"
          style={{
            background:
              "radial-gradient(closest-side at 30% 40%, rgba(23,127,255,0.12), transparent 20%), radial-gradient(closest-side at 70% 60%, rgba(128,70,255,0.08), transparent 30%)",
            transform: "translateY(20px)",
          }}
        />
      </div>

      {/* Section Hero */}
      <section id="hero" className="relative z-10 max-w-7xl mx-auto px-6 flex items-center justify-center min-h-[calc(100vh-80px)]">
        <div className="flex flex-col-reverse md:flex-row-reverse items-center gap-10 md:gap-20 w-full -pt-20 pb-49">
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
              Bonjour, je suis{" "}
              <span className="text-[#17f] drop-shadow-[0_6px_20px_rgba(23,127,255,0.25)]">
                HASINIRINA Jean de Dieu
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-gray-300 text-lg md:text-xl leading-relaxed glassmorph p-8 rounded-2xl border border-white/6">
              Etudiant en Informatique Générale à l&apos; ENI Fianarantsoa
              <br />
              Passionné par le développement web
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4 w-full max-w-sm mx-auto md:max-w-none md:mx-0">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-[#17f] text-black font-medium shadow-lg transform transition hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[#17f]/50 w-full sm:w-auto"
              >
                <Code className="w-5 h-5" />
                Voir mes projets
              </a>

              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-[#17f] text-[#17f] font-medium transition hover:bg-[#17f] hover:text-black hover:shadow-md hover:shadow-[#17f]/30 w-full sm:w-auto"
              >
                <Download className="w-5 h-5" />
                Télécharger mon CV
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <div className="relative">
              <div
                className="absolute -inset-1 rounded-full blur-3xl opacity-70 animate-border-wave"
                style={{
                  background:
                    "conic-gradient(from 180deg at 50% 50%, rgba(23,127,255,0.45), rgba(124,58,237,0.38), rgba(23,127,255,0.45))",
                  transform: "scale(1.12)",
                }}
              />
              <div className="relative rounded-full p-[6px] bg-gradient-to-tr from-[#17f] to-[#7a4cff]">
                <div className="bg-[#0b0b12] rounded-full p-1">
                  <div className="w-[220px] h-[220px] md:w-[260px] md:h-[260px] rounded-full overflow-hidden border-4 border-black/30 shadow-2xl transform transition duration-500 hover:scale-105 floating-image">
                    {/* Note: Dans une application réelle, assurez-vous que about.jpg est bien dans le dossier /public */}
                    <img src={profileImageUrl} alt="Photo de profil" width={520} height={520} className="object-cover w-full h-full" />
                  </div>
                </div>
              </div>
              <div className="hidden md:block mt-4 absolute left-1/2 transform -translate-x-1/2 w-full text-center">
                <div className="inline-block px-3 py-1 rounded-full bg-white/5 text-sm text-gray-200 border border-white/6">
                  Frontend Developer
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section À propos (AVEC IMAGE DE FOND FLOUTÉE) */}
      <motion.section
        id="about"
        className="relative z-10 max-w-9xl mx-auto px-6 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* 🌟 ARRIÈRE-PLAN POUR LA SECTION "ABOUT" 🌟 */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 rounded-3xl overflow-hidden" 
          style={{
            // 1. Image de fond (about.jpeg, dans le dossier public)
            backgroundImage: `url('/about.jpeg')`, 
            backgroundSize: "cover",
            backgroundPosition: "center",
            // 2. Flou et filtre pour un effet gris/sombre flouté
            filter: "blur(5px) grayscale(80%) brightness(0.4)", // 12px de flou, 80% de désaturation, 40% de luminosité (sombre)
            transform: "scale(1.1)", // Éviter les bords blancs après le flou
          }}
        >
          {/* Superposition pour accentuer l'obscurité */}
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        {/* ---------------------------------------------------- */}

        {/* Conteneur du contenu de la section */}
        <div className="w-full md:w-11/12 lg:w-4/5 p-6 md:p-12 rounded-3xl glassmorph border border-white/10 shadow-lg mx-auto relative z-20 flex flex-col lg:flex-row items-center gap-8">
          {/* Texte */}
          <div className="flex-1 relative">
            {/* Titre avec effet machine à écrire en boucle */}
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-[#17f] drop-shadow-[0_6px_20px_rgba(23,127,255,0.25)] relative">
              <span
                className="inline-block overflow-hidden whitespace-nowrap"
                style={{
                  animation: "typing 1s steps(6, end) infinite alternate, blink-cursor 0.7s step-end infinite",
                  borderRight: "4px solid #17f",
                  paddingRight: "2px",
                }}
              >
                À propos
              </span>
            </h2>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Je suis HASINIRINA Jean de Dieu, étudiant en 3ᵉ année de Licence en Informatique à
              l&apos;Université Ecole Nationale d&apos;Informatique Fianarantsoa (ENI). Passionné par le
              développement web et le développement d&apos;applications mobiles, j&apos;utilise des
              technologies modernes comme React, Next.js, TailwindCSS et le framework Flutter <span className="text-[#559dfc]">(Mobile)</span> pour créer des
              applications performantes et intuitives. Je continue en apprendre Git et GitHub pour la gestion de
              version et le travail collaboratif. Compétent en bureautique (Word, PowerPoint, Excel), je
              communique couramment en français et je continue aussi de perfectionner mon anglais. Curieux et
              créatif, je m&apos; inspire de mes loisirs tels que les mangas, les animes et la musique.
            </p>

            <blockquote className="text-[#00bfff] font-bold italic border-l-4 border-[#00bfff] pl-4 mt-6 max-w-2xl">
              « Il n’y a qu’une façon d’échouer, c’est d’abandonner avant d’avoir réussi. » – Georges Clémenceau
            </blockquote>
          </div>

          {/* Icône personne à droite (grand écran) */}
          <div className="hidden lg:flex flex-shrink-0 justify-center items-center">
            <motion.div
              className="text-[#17f] w-32 h-32"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <UserStar className="w-full h-full" />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* --- Section Projets --- */}
      <motion.section
        id="projects"
        className="relative z-10 max-w-7xl mx-auto px-6 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-16 text-white">
          Mes <span className="text-[#17f] drop-shadow-[0_6px_20px_rgba(23,127,255,0.25)]">Projets</span> Récents
        </h2>

        {/* La grille contient maintenant seulement deux colonnes sur grand écran pour les deux projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:w-4/5 mx-auto">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="glassmorph p-6 rounded-3xl border border-white/10 shadow-xl overflow-hidden group hover:shadow-[#17f]/50 transition duration-300 transform hover:-translate-y-1 hover:scale-[1.03] flex flex-col"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* Conteneur du Diaporama */}
              <div className="relative w-full h-40 rounded-xl overflow-hidden mb-4 border border-white/10 flex-shrink-0">
                <ProjectSlideshow imageUrls={project.imageUrls} title={project.title} />
              </div>

              <h3 className="text-2xl font-bold mb-2 text-[#fff]">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4 text-sm flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6 flex-shrink-0">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs font-semibold px-3 py-1 rounded-full bg-[#17f]/10 text-[#17f] border border-[#17f]/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-auto flex-shrink-0">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 text-sm rounded-full bg-[#17f] text-black font-medium transition hover:bg-[#0d6be6]"
                >
                  <Link className="w-4 h-4" />
                  Demo
                </a>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 text-sm rounded-full border border-gray-600 text-gray-300 transition hover:bg-white/10"
                  >
                    <GitBranch className="w-4 h-4" />
                    Code
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* --- Section Contact --- */}
      <motion.section
        id="contact"
        className="relative z-10 mx-auto px-6 pt-20 " // Retrait de la max-w-7xl et du padding-bottom pour l'arrière-plan
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* 🌟 NOUVEL ARRIÈRE-PLAN POUR LA SECTION "CONTACT" (s'étend sur toute la largeur) 🌟 */}
        {/* On s'assure qu'il est au-dessus du footer qui vient juste après */}
        <div 
        aria-hidden
        className="relative inset-0 -z-20 overflow-hidden pb-10 -mb-20 pt-20 -ml-6 -mr-6"> {/* Ajout d'un padding-bottom ici pour espacer le contenu du footer */}
            <div
                aria-hidden
                className="absolute inset-0 -z-10 rounded-3xl overflow-hidden" 
                style={{
                    // 1. Image de fond projects.jpeg
                    backgroundImage: `url('/projects.jpeg')`, 
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    // 2. Flou et filtre pour un effet sombre et flouté (similaire à about)
                    filter: "blur(5px) grayscale(20%) brightness(0.4)",
                    transform: "scale(1.1)", // Éviter les bords blancs après le flou
                }}
            >
                {/* Superposition pour accentuer l'obscurité */}
                <div className="absolute inset-0 bg-black opacity-40"></div>
            </div>
            {/* ---------------------------------------------------- */}

            {/* Contenu du contact (centré et avec max-width) */}
            <div className="max-w-7xl mx-auto relative z-20">
                <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-white">
                    Travaillons <span className="text-[#17f]">Ensemble</span>
                </h2>
                
                {/* Ligne de séparation subtile */}
                <div className="w-20 h-1 mx-auto bg-[#17f] rounded-full mb-10" />

                {/* Texte de Pitch Centré */}
                <p className="text-gray-300 text-lg md:text-xl text-center max-w-3xl mx-auto mb-12 leading-relaxed">
                    Je suis toujours enthousiaste à l&apos;idée de travailler sur des projets intéressants et de collaborer avec des personnes incroyables. Que vous ayez besoin d&apos;une application web, d&apos;une solution mobile ou d&apos;une refonte d&apos;interface, <span className="font-semibold text-[#00bfff]">construisons quelque chose d&apos;impressionnant ensemble !</span>
                </p>

                {/* Bouton CTA Central Proéminent */}
                <div className="text-center mb-20">
                    <a
                        href="mailto:jeandedieuhasinirina82@gmail.com"
                        className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[#00bfff] text-black font-semibold text-lg shadow-2xl shadow-[#00bfff]/50 transform transition duration-300 hover:-translate-y-1 hover:scale-[1.05]"
                    >
                        <Mail className="w-5 h-5" />
                        Me Contacter
                    </a>
                </div>

                {/* Bloc d'informations de Contact */}
                <div className="max-w-4xl mx-auto">

                    {/* Contacts Principaux (Téléphone, Handle) */}
                    <div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-12 lg:gap-20 mb-12">
                        

                        {/* Téléphone */}
                        <div className="flex flex-col items-center text-center">
                            <Phone className="w-8 h-8 text-[#17f] mb-2" />
                            <span className="text-gray-300 font-medium text-lg">+261 38 64 630 00</span>
                        </div>

                        {/* GitHub Handle */}
                        <div className="flex flex-col items-center text-center">
                            <Github className="w-8 h-8 text-[#17f] mb-2" />
                            <span className="text-gray-300 font-medium text-lg">@HASINA-Nirina</span>
                        </div>
                    </div>

                    {/* Liens Sociaux Secondaires */}
                    <div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-12 lg:gap-20">
                        {/* Facebook */}
                        <a
                            href="https://www.facebook.com/NirinaHasina"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center text-center text-gray-400 hover:text-[#b3ff00] transition"
                        >
                            <Facebook className="w-8 h-8 mb-1 text-[#17f]"/>
                            <span className="text-gray-300 font-medium text-lg">facebook.com/NirinaHasina</span>
                        </a>

                        {/* GitHub (Lien complet) */}
                        <a
                            href="https://github.com/HASINA-Nirina"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center text-center text-gray-400 hover:text-[#b3ff00] transition"
                        >
                            <GitBranch className="w-8 h-8 mb-1 text-[#17f]"/>
                            <span className="text-gray-300 font-medium text-lg">github.com/HASINA-Nirina</span>
                        </a>
                        
                    </div>
                </div>
            </div>
        </div>

        {/* Le Footer est maintenant HORS du div qui contient l'image de fond, comme demandé */}
        <footer className="mt-20 text-center text-gray-500 border-t border-white/5 pt-8 pb-8 max-w-18xl mx-auto">
          <p className="text-sm">&copy; {new Date().getFullYear()} HASINIRINA Jean de Dieu. Créé avec passion et une bonne dose de café ☕.</p>
        </footer>
      </motion.section>

      {/* Styles dynamiques pour les animations */}
      <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
    </main>
  );
}