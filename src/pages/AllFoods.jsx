import React, { useState } from "react";

import { Container, Row, Col } from "reactstrap";

import products from "../assets/data/products.json";
import ProductCard from "../components/UI/product-card/ProductCard";
import ReactPaginate from "react-paginate";

import foodCategoryImg01 from "../assets/images/cake.png";
import foodCategoryImg02 from "../assets/images/Tarte.png";
import foodCategoryImg03 from "../assets/images/Viennoiserie.png";
import foodCategoryImg04 from "../assets/images/Entremets.png";


import "../styles/all-foods.css";
import "../styles/pagination.css";

const AllFoods = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("ALL");
  const [pageNumber, setPageNumber] = useState(0);

  // Filter products by search term and category
  const filteredProducts = products.filter((item) => {
    const matchesCategory =
      category === "ALL" || item.category.toUpperCase() === category;
    const matchesSearch = searchTerm
      ? item.title.toLowerCase().includes(searchTerm.toLowerCase())
      : true;
    return matchesCategory && matchesSearch;
  });

  // Pagination logic
  const productPerPage = 12;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = filteredProducts.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  const pageCount = Math.ceil(filteredProducts.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <section>
      <Container>
        <Row>
          {/* Search Input */}
          <Col lg="6" md="6" sm="6" xs="12">
            <div className="search__widget d-flex align-items-center justify-content-between">
              <input
                type="text"
                placeholder="Je cherche...."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <span>
                <i className="ri-search-line"></i>
              </span>
            </div>
          </Col>

          {/* Category Filter Buttons */}
          <Col lg="12" className="mb-5">
            <div className="food__category d-flex align-items-center justify-content-center gap-4">
              <button
                className={`all__btn ${
                  category === "ALL" ? "foodBtnActive" : ""
                }`}
                onClick={() => setCategory("ALL")}
              >
                All
              </button>
              <button
                className={`d-flex align-items-center gap-2 ${
                  category === "GROS-MODÈLES" ? "foodBtnActive" : ""
                }`}
                onClick={() => setCategory("GROS-MODÈLES")}
              >
                <img src={foodCategoryImg01} alt="" />
                Gros-modèles
              </button>
              <button
                className={`d-flex align-items-center gap-2 ${
                  category === "TARTE" ? "foodBtnActive" : ""
                }`}
                onClick={() => setCategory("TARTE")}
              >
                <img src={foodCategoryImg02} alt="" />
                Tarte
              </button>
              <button
                className={`d-flex align-items-center gap-2 ${
                  category === "VIENNOISERIE" ? "foodBtnActive" : ""
                }`}
                onClick={() => setCategory("VIENNOISERIE")}
              >
                <img src={foodCategoryImg03} alt="" />
                Viennoiserie
              </button>
              <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "ENTREMETS" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("ENTREMETS")}
                >
                  <img src={foodCategoryImg04} alt="" />
                  Entremets
                </button>
            </div>
          </Col>

          {/* Display Products */}
          {displayPage.map((item) => (
            <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
              <ProductCard item={item} />
            </Col>
          ))}

          {/* Pagination */}
          <div>
            <ReactPaginate
              pageCount={pageCount}
              onPageChange={changePage}
              previousLabel={"Prev"}
              nextLabel={"Next"}
              containerClassName="paginationBttns"
            />
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default AllFoods;
