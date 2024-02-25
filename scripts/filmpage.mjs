const filmItem = JSON.parse(localStorage.getItem("film"));

import { addToCart } from "./addtocart.mjs";
import loader from './shared/loader.mjs';

function generateFilmPageItem (filmItem) {

    let main = document.querySelector("main");

    const filmContainer = document.createElement("div");
    filmContainer.classList = "film-item";
    filmContainer.setAttribute('id', filmItem.id);
    filmContainer.setAttribute('quantity', filmItem.quantity);

    const imageElement = document.createElement("img");
    imageElement.classList.add('filmpage-image');
    imageElement.src = filmItem.image.url;
    imageElement.alt = filmItem.image.alt;

    const titleElement = document.createElement("h3");
    titleElement.classList.add('title');
    titleElement.textContent = filmItem.title;

    const descriptionElement = document.createElement("p");
    descriptionElement.classList.add('synopsis');
    descriptionElement.textContent = filmItem.description;

    const priceElement = document.createElement("div");
    priceElement.classList.add("price-element");

    if (filmItem.onSale) {
        const priceDiscount = document.createElement("p");
        const priceBefore = document.createElement("p");
        priceDiscount.classList.add("price-discount");
        priceBefore.classList.add("price-before");
        priceDiscount.textContent = `Discounted price: ${filmItem.discountedPrice}`;
        priceBefore.textContent = `Before: ${filmItem.price}`;
        priceElement.append(priceDiscount, priceBefore);
    } else {
        const price = document.createElement("p");
        price.classList.add("cart-price");
        price.textContent = `Price: ${filmItem.price} kr`;
        priceElement.appendChild(price);
    }

    const addToCartButton = document.createElement('button');
    addToCartButton.innerHTML = "Add film to cart";
    addToCartButton.href = `../html/checkout.html`; 
    addToCartButton.classList.add('js-add-to-cart', 'cta');
    addToCartButton.addEventListener('click', addToCart);

    const ratingElement = document.createElement("p");
    ratingElement.textContent = `Rating by other users: ${filmItem.rating} points`;

    const releasedElement = document.createElement("p");
    releasedElement.textContent = filmItem.released;

    main.appendChild(filmContainer);
    filmContainer.append(imageElement, titleElement, descriptionElement, 
        releasedElement, priceElement, addToCartButton, ratingElement);

    return filmContainer;
};

function loadFilmPage(){
    loader.show();
    generateFilmPageItem(filmItem);
    loader.hide();
};

loadFilmPage();