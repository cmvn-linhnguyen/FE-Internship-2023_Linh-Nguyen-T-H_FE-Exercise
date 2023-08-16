//Count the number of products in the cart
export const updateCartQty = () => {
  const qtyElem = document.getElementById('cart-quantity');
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  const totalQty = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  qtyElem.innerHTML = totalQty.toString();
};

//Add product to cart
export const addToCart = (product) => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartItem = cart.find((item) => item.id === product.id);

  if (!cartItem) {
    cart.push({ ...product, quantity: 1 });
  } else {
    cartItem.quantity += 1;
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartQty();
};
