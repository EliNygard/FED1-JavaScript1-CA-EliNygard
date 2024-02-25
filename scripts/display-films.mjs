import { addToCart as addToCart } from "./addtocart.mjs";

export function displayFilms(filmItems) {

    const filmsData = filmItems;
    const filmContainer = document.getElementById('film-container');

    filmsData.forEach(film => {
        const filmElement = createFilmElement(film);
        filmContainer.appendChild(filmElement);
    });
};

function createFilmElement(film) {
    
    const filmDiv = document.createElement('div');
    filmDiv.classList.add('film-item');
    filmDiv.setAttribute('id', film.id);

    const imageElement = document.createElement('img');
    imageElement.classList.add("film-image")
    imageElement.src = film.image.url;
    imageElement.alt = film.image.alt;

    const titleElement = document.createElement('h3');
    titleElement.textContent = film.title;
    titleElement.classList.add('film-selection__heading', 'film-title');

    const filmPageLink = document.createElement('a');
    filmPageLink.textContent = "View film info";
    filmPageLink.href = "./html/filmpage.html";   
    filmPageLink.classList.add('cta');
    filmPageLink.addEventListener('click', () => {
        localStorage.setItem('film', JSON.stringify(film));
    }); 

    const addToCartButton = document.createElement('button');
    addToCartButton.innerHTML = "Add film to cart"; 
    addToCartButton.classList.add('js-add-to-cart', 'cta');
    addToCartButton.addEventListener('click', addToCart)

    filmDiv.append(imageElement, titleElement, filmPageLink, addToCartButton);

    return filmDiv;
};