import React from "react";
import "./CheckoutItem.scss";
import { connect } from "react-redux";

import {
  removeItem,
  addItem,
  subtractItem,
} from "../../redux/cart/cartActions";

const CheckoutItem = ({ cartItem, removeItem, addItem, subtractItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => subtractItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">£{price}</span>
      <div className="remove-button" onClick={() => removeItem(cartItem)}>
        &#10006;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItem(item)),
  addItem: (item) => dispatch(addItem(item)),
  subtractItem: (item) => dispatch(subtractItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
