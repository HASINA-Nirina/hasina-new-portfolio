"use client";

import { useState } from "react";
// Importation de toutes les icônes nécessaires de lucide-react
import { Home, User, Folder, Mail, GraduationCap } from "lucide-react"; 

// Nous utilisons des balises <a> HTML classiques pour les liens d'ancrage (#section).

export default function Navbar() {
  const navItems = [
    { name: "Accueil", icon: Home, href: "#" },
    { name: "À propos", icon: User, href: "#about" },
    { name: "Projets", icon: Folder, href: "#projects" },
    // J'active la section "Compétences" pour correspondre à la vidéo
   //{ name: "Compétences", icon: GraduationCap, href: "#competences" }, 
    { name: "Contact", icon: Mail, href: "#contact" },
  ];

  return (
    <>
      {/* 1. Navbar pour le bureau (Fixed Top - visible à partir de md) */}
      <nav className="hidden md:flex fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-[#1a1a1a]/80 backdrop-blur-md shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-[#17f]">HASINA</span>
            </div>

            {/* Menu principal (desktop) */}
            <div className="flex space-x-8 items-center">
              {navItems.map(({ name, icon: Icon, href }) => (
                <a
                  key={`desktop-${name}`}
                  href={href}
                  className="relative flex items-center space-x-1 text-gray-800 dark:text-gray-200 group p-2 rounded-md transition-colors duration-300"
                >
                  {/* Icône + texte bien alignés */}
                  <Icon className="w-4 h-4 group-hover:text-[#17f] transition-colors duration-300" />
                  <span className="text-sm font-medium group-hover:text-[#17f] transition-colors duration-300">
                    {name}
                  </span>

                  {/* Ligne animée sous le lien */}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#17f] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* 2. Barre de navigation fixe en bas (Mobile/Small Screens - masquée à partir de md) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-[#1a1a1a] border-t border-gray-200 dark:border-gray-700 shadow-2xl">
        <div className="flex justify-around items-center h-16 max-w-lg mx-auto">
          {navItems.map(({ name, icon: Icon, href }) => (
            <a
              key={`mobile-${name}`}
              href={href}
              // Assure l'empilement vertical Icône -> Texte et l'effet de groupe
              className="flex flex-col items-center justify-center pt-2 pb-1 text-xs font-medium text-gray-600 dark:text-gray-400 group hover:text-[#17f] transition-colors duration-300 w-full h-full relative"
            >
              {/* Ligne animée en BAS du lien mobile */}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#17f] transition-all duration-300 group-hover:w-full rounded-t-sm"></span>

              {/* Icône */}
              <Icon className="w-5 h-5" /> 
              
              {/* Texte placé juste en dessous avec une taille très petite */}
              <span className="text-[10px] mt-0.5">{name}</span>
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}