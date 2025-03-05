import React, { useState, useEffect } from "react";

import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import heroImg from "../assets/images/lucas-hero.png";
import "../styles/hero-section.css";

import { Link } from "react-router-dom";

import Category from "../components/UI/category/Category.jsx";
import AboutSection from "../components/UI/AboutSection/AboutSection.jsx";
import "../styles/home.css";

import featureImg01 from "../assets/images/delivery.gif";
import featureImg02 from "../assets/images/cake.gif";
import featureImg03 from "../assets/images/box.gif";

import products from "../assets/data/products.json";
import ProductCard from "../components/UI/product-card/ProductCard.jsx";
import whyImg from "../assets/images/why.jpg";

import networkImg from "../assets/images/network.jpeg";

import TestimonialSlider from "../components/UI/slider/TestimonialSlider.jsx";
import { useDispatch } from "react-redux"; // Import useDispatch for favorites
import { favoritesActions } from "../store/favoritesSlice"; // Import actions for favorites

const featureData = [
  {
    title: "Livraison Rapide",
    imgUrl: featureImg01,
    desc: "Des pâtisseries fraîches et délicieuses livrées rapidement à votre porte, pour satisfaire vos envies sucrées.",
  },
  
  {
    title: "Dégustation sur Place",
    imgUrl: featureImg02,
    desc: "Venez savourer nos créations directement dans notre pâtisserie, où chaque bouchée est un pur moment de plaisir.",
  },
  
  {
    title: "Retrait Facile",
    imgUrl: featureImg03,
    desc: "Commandez en ligne et récupérez vos pâtisseries en toute simplicité, prêtes à être dégustées.",
  },
];

const Home = () => {
  const [Tarte, setTarte] = useState([]);

  const dispatch = useDispatch(); // Initialize dispatch

  useEffect(() => {
    const filteredTarte = products.filter((item) => item.category === "Tarte");
    const sliceTarte = filteredTarte.slice(0, 4);
    setTarte(sliceTarte);
  }, []);

  const addToFavorites = (item) => {
    dispatch(favoritesActions.addFavorite(item)); // Add to favorites handler
  };

  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content  ">
              <h5 className="mb-3">Bienvenue chez Lucas Castello</h5>
              <h1 className="mb-4 hero__title">
                Découvrez nos <span>délices artisanaux</span> et pâtisseries <br /> 
                créés avec amour et livrés <span>frais et à temps</span>
              </h1>

              <p>
                Des Gros modèles aux Entremets, Viennoiseries et Tartes, Luca Castello vous offre une expérience pâtissière raffinée et unique. Commandez dès maintenant et laissez-nous ajouter une touche sucrée à vos moments spéciaux !
              </p>

              <div className="hero__btns d-flex align-items-center gap-5 mt-4">
              <button className="order__btn d-flex align-items-center justify-content-between">
                <Link to="/About">En savoir plus sur Luca Castello</Link> <i class="ri-arrow-right-s-line"></i>
              </button>


                <button className="all__foods-btn">
                  <Link to="/Menu">Explorez notre menu</Link>
                </button>
              </div>

              <div className="hero__service d-flex align-items-center gap-5 mt-5">
                <p className="d-flex align-items-center gap-2">
                  <span className="shipping__icon">
                    <i class="ri-car-line"></i>
                  </span> 
                  Livraison
                </p>

                <p className="d-flex align-items-center gap-2">
                  <span className="shipping__icon">
                    <i class="ri-shield-check-line"></i>
                  </span> 
                  Paiement 100% sécurisé
                </p>
              </div>

              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pb-0 pr-0">
        <Category />
      </section>

      <section className="pt pr">
        <AboutSection isHomePage={true} /> {/* Pass the prop to render the button */}
      </section>
    
     

      <section>
        <Container>
          <Row>
       <Col lg="12" className="text-center">
          <h5 className="feature__subtitle mb-4">Nos créations</h5>
          <h2 className="feature__title">Détendez-vous chez vous</h2>
          <h2 className="feature__title">
            Nous nous <span>occuperons de tout</span>
          </h2>
          <p className="mb-1 mt-4 feature__text">
            Des Gros modèles aux Entremets, Tartes et Viennoiseries, nous créons des pâtisseries délicieuses et raffinées pour chaque occasion.
          </p>
          <p className="feature__text">
            Laissez-nous apporter une touche sucrée à votre journée avec nos produits artisanaux, préparés avec soin et livrés à votre porte.
          </p>
       </Col>


            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-25 mb-3"
                  />
                  <h5 className=" fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

    

      <section className="why__choose-us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whyImg} alt="why-tasty-treat" className="w-100" />
            </Col>

            <Col lg="6" md="6">
  <div className="why__tasty-treat">
    <h2 className="tasty__treat-title mb-4">
      Pourquoi choisir <span>nos délices</span> ?
    </h2>
    <p className="tasty__treat-desc">
      Des pâtisseries artisanales, créées avec passion et soin, pour offrir une expérience gourmande inoubliable. Chaque bouchée est un voyage dans l'univers sucré de Luca Castello.
    </p>

    <ListGroup className="mt-4">
      <ListGroupItem className="border-0 ps-0">
        <p className="choose__us-title d-flex align-items-center gap-2">
          <i class="ri-checkbox-circle-line"></i> Des pâtisseries fraîches et savoureuses
        </p>
        <p className="choose__us-desc">
          Préparées avec les meilleurs ingrédients pour garantir une saveur authentique et irrésistible.
        </p>
      </ListGroupItem>

      <ListGroupItem className="border-0 ps-0">
        <p className="choose__us-title d-flex align-items-center gap-2">
          <i class="ri-checkbox-circle-line"></i> Un soutien de qualité
        </p>
        <p className="choose__us-desc">
          Nous sommes à votre écoute, prêts à répondre à vos besoins et à vous conseiller.
        </p>
      </ListGroupItem>

      <ListGroupItem className="border-0 ps-0">
        <p className="choose__us-title d-flex align-items-center gap-2">
          <i class="ri-checkbox-circle-line"></i> Commandez de n'importe où
        </p>
        <p className="choose__us-desc">
          Peu importe où vous êtes, nous vous apportons nos créations directement à votre porte.
        </p>
      </ListGroupItem>
    </ListGroup>
  </div>
</Col>

</Row>
</Container>
</section>

<section className="pt-0">
  <Container>
    <Row>
      <Col lg="12" className="text-center mb-5">
        <h2>Tartes</h2>
      </Col>

      {Tarte.map((item) => (
        <Col lg="3" md="4" sm="6" xs="6" key={item.id}>
          <ProductCard
            item={item}
            onFavorite={() => addToFavorites(item)} // Add favorite functionality
          />
        </Col>
      ))}
    </Row>
  </Container>
</section>

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
            <div className="testimonial">
              <h5 className="testimonial__subtitle mb-4">Témoignages</h5>
              <h2 className="testimonial__title mb-4">
                Ce que nos <span>clients</span> en disent
              </h2>
              <p className="testimonial__desc">
                Nos clients apprécient la qualité exceptionnelle et l'authenticité de nos pâtisseries. Chaque création est une véritable œuvre d'art culinaire, préparée avec soin et passion.
              </p>

                <TestimonialSlider />
              </div>
            </Col>

            <Col lg="6" md="6">
              <img src={networkImg} alt="testimonial-img" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
