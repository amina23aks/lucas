import React from "react"; 
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import BannerImg from "../../../assets/images/cake-brown.png"; // Update with the correct image path
import BgImg from "../../../assets/images/coffee-texture.jpg";
import { Link } from "react-router-dom";
import "../../../styles/about.css"

const bgImage = {
  backgroundImage: `url(${BgImg})`,
  backgroundColor: "#270c03",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const AboutSection = ({ isHomePage }) => {
  return (
    <div style={bgImage}>
      <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Image section */}
            <div data-aos="zoom-in">
              <img
                src={BannerImg}
                alt="biryani img"
                className="max-w-[430px] w-full mx-auto drop-shadow-[10px_-10px_12px_rgba(0,0,0,1)] spin"
              />
            </div>
            {/* Text content section */}
            <div className="flex flex-col justify-center gap-6 sm:pt-0">
              <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold font-cursive">
                Bienvenue chez Luca Castello
              </h1>
              <p data-aos="fade-up" className="text-sm text-gray-500 tracking-wide leading-5">
                Découvrez l'art de la pâtisserie française à travers nos créations raffinées. Chaque gâteau, tarte, entremet et viennoiserie est conçu avec passion pour offrir une expérience culinaire inoubliable.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-5">
                  <div data-aos="fade-up" className="flex items-center gap-3">
                    <GrSecure className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100" />
                    <span>Pâtisseries Premium</span>
                  </div>
                  <div data-aos="fade-up" data-aos-delay="300" className="flex items-center gap-3">
                    <IoFastFood className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-100" />
                    <span>Pâtisseries à emporter</span>
                  </div>
                  <div data-aos="fade-up" data-aos-delay="500" className="flex items-center gap-3">
                    <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-yellow-100" />
                    <span>Créations Fraîches</span>
                  </div>
                </div>
                <div data-aos="slide-left" className="border-l-4 border-primary/50 pl-6 space-y-2">
                  <h1 className="text-2xl font-semibold font-cursive">
                    Passion Gourmande
                  </h1>
                  <p className="text-sm text-gray-500">
                    Tout comme l’art de créer une pâtisserie parfaite, chaque création chez Luca Castello est réalisée avec soin, précision et une passion sans égale pour l’excellence culinaire.
                  </p>
                  {/* Button at the bottom-right of the paragraph */}
                  {isHomePage && (
                    <div className="flex justify-center mt-4">
                        <button className="plus">
                        <Link to="/about">  En savoir plus</Link>
                        </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
