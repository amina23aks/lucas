import React from "react";
import "../../../styles/category.css";

const categoryData = [
  {
    id: 1,
    display: "Gros modèles",
    imgUrl: require("../../../assets/images/category-01.jpg"),
    description: "De magnifiques créations de pâtisserie, parfaites pour les grandes occasions, alliant saveur et élégance.",
    aosDelay: "100",
  },
  {
    id: 2,
    display: "Tarte",
    imgUrl: require("../../../assets/images/category-02.jpg"),
    description: "Des tartes fraîches et délicieuses, préparées avec des ingrédients de qualité pour une expérience gourmande.",
    aosDelay: "300",
  },
  {
    id: 3,
    display: "Viennoiserie",
    imgUrl: require("../../../assets/images/category-03.jpg"),
    description: "Des viennoiseries légères et fondantes, préparées chaque matin pour un goût inégalé.",
    aosDelay: "500",
  },
  {
    id: 4,
    display: "Entremets",
    imgUrl: require("../../../assets/images/category-04.jpg"),
    description: "Des entremets raffinés, alliant textures et saveurs, pour ravir vos papilles à chaque bouchée.",
    aosDelay: "700",
  },
  
  
];

const Category = () => {
  return (
    <div className="category-section">
      <div className="container">
        {/* Heading Section */}
        <div className="heading-section">
          <h1>Explore Our Categories</h1>
        </div>

        {/* Category Cards */}
        <div className="category-grid">
          {categoryData.map((item) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={item.aosDelay}
              className="category-card"
            >
              <div className="card-image">
                <img src={item.imgUrl} alt={item.display} />
              </div>
              <div className="card-content">
                <h1>{item.display}</h1>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
