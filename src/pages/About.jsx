import React from "react";
import WelcomeImg from "../../src/assets/images/about.jpg"; // Add your new image
import AboutSection from "../components/UI/AboutSection/AboutSection";
import "../styles/about.css"


const About = () => {
  return (
    <>
      <div>
      <AboutSection /> 
    </div>

      
      <div className="container py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-12 section-spacing">

          <div data-aos="fade-right" className="flex justify-center">
            <img
              src={WelcomeImg}
              alt="Welcome Lucas Castello"
              className="rounded-lg shadow-lg w-full max-w-[500px] border-4 border-gray-100"
            />
          </div>

          {/* Text on the right */}
          <div data-aos="fade-left" className="flex flex-col">
  <h1 className="text-3xl sm:text-4xl font-bold font-cursive mb-4 text-brown-800"> {/* Changed color to brown */}
    Notre histoire
  </h1>
  <p className="text-black leading-9 tracking-wide mb-6"> {/* Increased font size and changed text color to black */}
    La pâtisserie française haut de gamme par l'artisan LUCAS CASTELLO,
    pâtissier d'origine corse et espagnol qui s'est spécialisé dans la
    pâtisserie fine originaire de Lyon, avant de s'installer à Alger et
    d'ouvrir sa propre enseigne depuis 2017. Il crée ses propres gâteaux
    élaborés avec des produits d'importation. Une pâtisserie, qui vous
    offre des réalisations osées, avec des ingrédients issus des quatre
    coins du globe (France, Espagne, Belgique, Madagascar, Brésil, etc…).
    En effet, la pâtisserie par Lucas Castello a mis les petits plats dans
    les grands en travaillant avec des produits nobles (gousse de vanille
    de Madagascar, crème de marron d’Ardèche, la fève de Tonka du Brésil,…),
    mais travaille également avec les meilleurs chocolats comme Valrhona,
    Barry, ou encore Callebaut. Le chef pâtissier français Lucas, ainsi
    que son équipe, vous invitent donc à venir nombreux goûter leurs
    délices, ornés de macarons, de pétales de chocolats, de feuilles d’or
    et d’argent etc... Que l'aventure commence.
  </p>
</div>

        </div>
      </div>
    </>
  );
};

export default About;
