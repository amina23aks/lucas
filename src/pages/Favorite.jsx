// src/pages/Favorite.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { favoritesActions } from "../store/favoritesSlice";
import "../styles/favorite.css";

const Favorite = () => {
  const favoriteItems = useSelector((state) => state.favorites.items);
  const dispatch = useDispatch();

  const removeFavorite = (id) => {
    dispatch(favoritesActions.removeFavorite({ id }));
  };

  return (
    <div className="favorite__page">
      <h2>Your Favorites</h2>
      {favoriteItems.length === 0 ? (
        <p>No favorite items yet.</p>
      ) : (
        <ul>
          {favoriteItems.map((item) => (
            <li key={item.id} className="favorite__item">
              <img src={item.image01} alt={item.title} className="favorite__img" />
              <div>
                <h5>{item.title}</h5>
                <p>{item.price}DA</p>
              </div>
              <button
                className="remove-btn"
                onClick={() => removeFavorite(item.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorite;
