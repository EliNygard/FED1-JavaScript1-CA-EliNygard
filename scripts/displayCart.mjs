// add quantity to a film if it is added more than once to the cart
// remove hardcoded text "Total". Generate. 
// give user feedback when removing a film
// click the films img => takes you to the film page

import loader from './loader.mjs';

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
        priceDiscount.textContent = `Discounted price: ${filmItem.discountedPrice}`;
        priceElement.appendChild(priceDiscount);
    } else {
        const price = document.createElement("p");
        price.classList.add("cart-price");
        price.textContent = `Price: ${filmItem.price}`;
        priceElement.appendChild(price);
    }    

    const removeButton = document.createElement("button");
    removeButton.classList.add("remove-btn", "cta");
    removeButton.textContent = "Remove";
    removeButton.addEventListener('click', removeCartItem);
    
    cartItem.appendChild(imageElement);
    cartItem.appendChild(priceElement);
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
        cart.splice(indexToRemove, 1)
        localStorage.setItem("cart", JSON.stringify(cart))
        totalPriceElement.textContent = updateCartTotal();
    }
    
}
// function updateCartTotal() {
//     const cartItemContainer = document.getElementsByClassName("cart-items")[0];
//     const cartRows = cartItemContainer.getElementsByClassName("cart-row");
//     let total = 0;
//     for (var i = 0; i < cartRows.length; i++) {
//         const cartRow = cartRows[i];
//         const priceElement = cartRow.getElementsByClassName("cart-price")[0]
//         const quantityElement = cartRow.getElementsByClassName("cart-quantity-input")[0];
//         const price = parseFloat(priceElement.innerText.replace("kr", ""));
//         const quantity = quantityElement.value;
//         total = total + (price * quantity);
//     }
//     total = Math.round(total * 100) / 100;          // to desimaler etter komma
//     document.getElementsByClassName("cart-total-price")[0].innerText = total + ' kr';
// }
function updateCartTotal() {
    const totalPrice = cart.reduce((total, item) => {
        if (item.discountedPrice !== undefined && item.onSale) {
            total += item.discountedPrice;
        } else {
            total += item.price;
        }
        return total;
    }, 0);
    const formattedTotalPrice = totalPrice.toFixed(2);
    return formattedTotalPrice;
}




// redirects user to checkout success page: 
const buyNowButton = document.querySelector(".btn-purchase");
buyNowButton.addEventListener('click', () => {
    window.location.href = "./checkoutsuccess.html";
    localStorage.clear();
});


function loadCartPage (){
    loader.show();
    getFilms();
    loader.hide();
}

loadCartPage();