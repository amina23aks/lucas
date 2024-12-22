import React from "react";

import "../../../styles/product-card.css";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";
import { favoritesActions } from "../../../store/favoritesSlice"; // Import favorites actions


const ProductCard = (props) => {
  const { id, title, image01, price } = props.item;
  const dispatch = useDispatch();

  const toggleFavorite = () => {
    dispatch(favoritesActions.addFavorite(props.item)); // Correctly pass `props.item`
  };

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
      })
    );
  };

  return (
    <div className="product__item">
      <div className="product__img">
        <img src={image01} alt="product-img" className="w-50" />
      </div>

      <div className="product__content">
        <h5>
          <Link to={`/foods/${id}`}>{title}</Link>
        </h5>
        <div className=" d-flex align-items-center justify-content-between ">
          <span className="product__price">${price}</span>
          <button className="favorite-btn" onClick={toggleFavorite}>
          <i class="ri-heart-add-line"></i> {/* Favorite Icon */}
          </button>
          <button className="addTOCart__btn" onClick={addToCart}>
            <i className="ri-shopping-cart-line"></i> {/* Cart Icon */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
