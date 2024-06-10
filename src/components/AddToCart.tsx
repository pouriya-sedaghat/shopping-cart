import { useContext } from "react";

import { CartContext } from "./../context/Cart";

import { Product } from "../../interface/Product";

import { useNavigate } from "react-router-dom";

function AddToCart({ product }: { product: Product }) {
  const {
    state: {
      cart: { cartItems },
    },
    dispatch,
  } = useContext(CartContext);

  const navigate = useNavigate();

  function addToCarthandler() {
    const existingItem = cartItems.find((item) => item.slug === product.slug);

    const quantity = existingItem ? existingItem.quantity! + 1 : 1;

    if (quantity > product.count) return alert("Product Is out.");

    dispatch({ type: "ADD_ITEM", payload: { ...product, quantity } });

    product.main && navigate("/cart");
  }

  return (
    <button
      onClick={addToCarthandler}
      className="btn btn-dark opacity-75 d-block mx-auto"
    >
      Add To Cart
    </button>
  );
}

export default AddToCart;
