function generateCartItem (filmItem) {
    const cartItemsContainer = document.querySelector(".cart-items")

    const cartRow = document.createElement("div");
    cartRow.classList.add("cart-row");

    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    const imageElement = document.createElement("img");
    imageElement.classList.add("cart-item-image");
    imageElement.src = filmItem.image.url;
    imageElement.alt = filmItem.image.alt;

    const priceElement = document.createElement("div");
    priceElement.classList.add("price-element");
    
    const price = document.createElement("p");
    price.classList.add("cart-price");
    price.textContent = `Price: ${filmItem.price}`;

    const priceDiscount = document.createElement("p");
    priceDiscount.classList.add("price-discount");
    priceDiscount.textContent = `Discounted price: ${filmItem.discountedPrice}`;

    const removeButton = document.createElement("button");
    removeButton.classList.add("remove-btn", "cta");
    removeButton.textContent = "Remove";
    removeButton.addEventListener('click', removeCartItem);
    
    priceElement.append(price, priceDiscount);
    cartItem.appendChild(imageElement);
    cartItem.appendChild(priceElement);
    cartItem.appendChild(removeButton);
    cartRow.appendChild(cartItem);
    cartItemsContainer.appendChild(cartRow);
};


function getFilms() {
    const filmsArray = JSON.parse(localStorage.getItem("cart"));
    filmsArray.forEach(film => {
        generateCartItem(film)
    })  
}

function removeCartItem(event) {
    const removeButtonClicked = event.target;
        removeButtonClicked.parentElement.parentElement.remove()
        updateCartTotal();
}

getFilms();