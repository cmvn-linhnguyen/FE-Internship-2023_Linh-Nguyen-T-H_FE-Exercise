export const updateCartQuantity = () => {
    const quantityElem = document.getElementById('cart-quantity');
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    quantityElem.innerHTML = totalQuantity.toString();
};
export const addToCart = (product) => {
    const carts = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItem = carts.filter((item) => item.id === product.id)[0];
    if (!cartItem) {
        carts.push(Object.assign(Object.assign({}, product), { quantity: 1 }));
    }
    else {
        cartItem.quantity += 1;
    }
    localStorage.setItem('cart', JSON.stringify(carts));
    updateCartQuantity();
};
export const addCartItemEvent = (cartTable, cartItems) => {
    const tableRows = cartTable.querySelectorAll('.table-row');
    tableRows.forEach((row, index) => {
        const decreaseButton = row.querySelector('.decrease');
        const increaseButton = row.querySelector('.increase');
        const deleteButton = row.querySelector('.delete-button');
        const quantityElement = row.querySelector('.item-quantity');
        const priceElement = row.querySelector('.item-price');
        const updateQuantity = (change) => {
            let quantity = parseInt(quantityElement.textContent) + change;
            quantityElement.textContent = '' + quantity;
            priceElement.textContent = `Total: $${(cartItems[index].discount
                ? quantity *
                    ((cartItems[index].price * (100 - cartItems[index].discount)) / 100)
                : quantity * cartItems[index].price).toFixed(2)}`;
            cartItems[index].quantity = quantity;
            updateCartInfo(cartItems);
            const decreaseButton = document.querySelector(`button.quantity-update.decrease.pro-${cartItems[index].id}`);
            decreaseButton.disabled = quantity === 1;
        };
        decreaseButton.addEventListener('click', () => updateQuantity(-1));
        increaseButton.addEventListener('click', () => updateQuantity(1));
        deleteButton.addEventListener('click', () => {
            cartItems.splice(index, 1);
            updateCartInfo(cartItems);
            row.remove();
        });
    });
};
const updateCartInfo = (cartItems) => {
    updateLocalStorage(cartItems);
    updateTotalPrice(cartItems);
    updateCartQuantity();
};
const updateTotalPrice = (carts) => {
    let totalPriceElement = document.querySelector('.total-price');
    const totalPrice = carts.reduce((sum, item) => {
        const discountedPrice = item.discount
            ? (item.quantity * (100 - item.discount) * item.price) / 100
            : item.quantity * item.price;
        return sum + discountedPrice;
    }, 0);
    totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
};
const updateLocalStorage = (cartItems) => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
};
