import loader from './shared/loader.mjs';

let cart = JSON.parse(localStorage.getItem("cart"));
if (!cart) {
    cart = [];
}

const totalPriceElement = document.querySelector('.cart-total-price');

function getFilms() {
    if (cart.length === 0) {
        const emptyCartMessage = document.createElement('p');
        emptyCartMessage.textContent = "You have no films in your cart. Go to our great film selection and find your next film to watch.";
        const cartItemsContainer = document.querySelector('.cart-items');
        cartItemsContainer.appendChild(emptyCartMessage);
    } else {
        cart.forEach(film => {
            generateCartItem(film)
        });
    }; 
};

function generateCartItem (filmItem) {
    const cartItemsContainer = document.querySelector(".cart-items");
    
    const cartRow = document.createElement("div");
    cartRow.setAttribute('id', filmItem.id)
    cartRow.classList.add("cart-row");

    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    const imageElement = document.createElement("img");
    imageElement.classList.add("cart-item-image");
    imageElement.src = filmItem.image.url;
    imageElement.alt = filmItem.image.alt;

    const priceElement = document.createElement("div");
    priceElement.classList.add("price-element");

    if (filmItem.onSale) {
        const priceDiscount = document.createElement("p");
        priceDiscount.classList.add("price-discount");
        priceDiscount.textContent = `Discounted price: ${filmItem.discountedPrice} kr`;
        priceElement.appendChild(priceDiscount);
    } else {
        const price = document.createElement("p");
        price.classList.add("cart-price");
        price.textContent = `Price: ${filmItem.price} kr`;
        priceElement.appendChild(price);
    }
    
    const quantityElement = document.createElement("p");
    quantityElement.classList.add("film-quantity");
    quantityElement.textContent = `Quantity: ${filmItem.quantity}`;

    const removeButton = document.createElement("button");
    removeButton.classList.add("remove-btn", "cta");
    removeButton.textContent = "Remove";
    removeButton.addEventListener('click', removeCartItem);
    
    cartItem.appendChild(imageElement);
    cartItem.appendChild(priceElement);
    cartItem.appendChild(quantityElement);
    cartItem.appendChild(removeButton);
    cartRow.appendChild(cartItem);
    cartItemsContainer.appendChild(cartRow);

    totalPriceElement.textContent = updateCartTotal();
};

function removeCartItem(event) {
    const removeButtonClicked = event.target;
    const toRemove = removeButtonClicked.closest('.cart-row').id
    removeButtonClicked.closest('.cart-row').remove()
    const indexToRemove = cart.findIndex(item => item.id === toRemove)
    if(indexToRemove !== -1){
        cart.splice(indexToRemove, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        totalPriceElement.textContent = updateCartTotal();
    }

    removeFromCartMessage(); 
};

function removeFromCartMessage() {
    const removeMessage = document.createElement("div");
    removeMessage.classList.add("added-message");
    removeMessage.textContent = "The film was removed from the cart";
    document.body.appendChild(removeMessage);

    setTimeout(() => {
        removeMessage.remove();
    }, 1500);
}

function updateCartTotal() {
    const totalPrice = cart.reduce((total, item) => {
        if (item.discountedPrice !== undefined && item.onSale) {
            total += (item.discountedPrice * item.quantity);
        } else {
            total += (item.price * item.quantity);
        }
        return total;
    }, 0);
    const formattedTotalPrice = totalPrice.toFixed(2);
    return `${formattedTotalPrice} kr`;
};

const buyNowButton = document.querySelector(".btn-purchase");
buyNowButton.addEventListener('click', () => {
    window.location.href = "./checkoutsuccess.html";
    localStorage.clear();
});

function loadCartPage (){
    loader.show();
    getFilms();
    loader.hide();
};

loadCartPage();