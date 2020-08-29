export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const GET_CART = "GET_CART";
export const addToCart = (id) => {
  dispatchEvent({
    type: ADD_TO_CART,
    id,
  });
};

export const getCart = (id) => {
  dispatchEvent({
    type: GET_CART,
    id,
  });
};
