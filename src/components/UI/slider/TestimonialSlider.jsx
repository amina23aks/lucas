import React from "react";
import Slider from "react-slick";

import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";

import "../../../styles/slider.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
            <div>
        <p className="review__text">
          "Les pâtisseries de Luca Castello sont une véritable découverte. Chaque création est un délice qui fond en bouche. Les saveurs sont raffinées, et chaque bouchée est un pur bonheur!"
        </p>
        <div className="slider__content d-flex align-items-center gap-3">
          <img src={ava01} alt="avatar" className="rounded" />
          <h6>Jhon Doe</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "Un service impeccable et des pâtisseries exquises. Que ce soit pour un événement spécial ou un simple plaisir, Luca Castello ne déçoit jamais. Une expérience culinaire hors du commun!"
        </p>
        <div className="slider__content d-flex align-items-center gap-3">
          <img src={ava02} alt="avatar" className="rounded" />
          <h6>Mitchell Marsh</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "Des Tartes aux Entremets, chaque produit est un chef-d'œuvre. Je n'ai jamais goûté de pâtisseries aussi fines et savoureuses. Un véritable régal pour les papilles!"
        </p>
        <div className="slider__content d-flex align-items-center gap-3">
          <img src={ava03} alt="avatar" className="rounded" />
          <h6>Steven Crock</h6>
        </div>
      </div>

    </Slider>
  );
};

export default TestimonialSlider;
