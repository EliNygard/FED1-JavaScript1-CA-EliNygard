const filmItem = JSON.parse(localStorage.getItem("film"));

import { handleAddToCart } from "./addtocart.mjs";
import loader from './loader.mjs';

function generateFilmPageItem (filmItem) {

    let main = document.querySelector("main");

    const filmDivItem = document.createElement("div");
    filmDivItem.classList = "film-item";
    filmDivItem.setAttribute('id', filmItem.id);

    const imageElement = document.createElement("img");
    imageElement.classList.add('filmpage-image')
    imageElement.src = filmItem.image.url;
    imageElement.alt = filmItem.image.alt;

    const titleElement = document.createElement("h1");
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
        price.textContent = `Price: ${filmItem.price}`;
        priceElement.appendChild(price);
    }

    const addToCart = document.createElement('button');
    addToCart.innerHTML = "Add film to cart";
    addToCart.href = `../html/checkout.html`; 
    addToCart.classList.add('js-add-to-cart', 'cta');
    addToCart.addEventListener('click', handleAddToCart);

    const ratingElement = document.createElement("p");
    ratingElement.textContent = `Rating by other users: ${filmItem.rating} points`;

    const releasedElement = document.createElement("p");
    releasedElement.textContent = filmItem.released;


    main.appendChild(filmDivItem);
    filmDivItem.appendChild(imageElement);
    filmDivItem.appendChild(titleElement);
    filmDivItem.appendChild(descriptionElement);
    filmDivItem.appendChild(releasedElement);
    filmDivItem.appendChild(priceElement);
    filmDivItem.appendChild(addToCart);
    filmDivItem.appendChild(ratingElement);

    return filmDivItem;
}

function loadFilmPage(){
    loader.show();
    generateFilmPageItem(filmItem);
    loader.hide();
}

loadFilmPage();