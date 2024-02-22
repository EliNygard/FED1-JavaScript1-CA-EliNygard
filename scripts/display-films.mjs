// message to user when film has been added to cart 
// add filter to the drop down menu


import { handleAddToCart } from "./addtocart.mjs";

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
    filmDiv.setAttribute('id', film.id)

    const imageElement = document.createElement('img');
    imageElement.classList.add("film-image")
    imageElement.src = film.image.url;
    imageElement.alt = film.image.alt;

    const titleElement = document.createElement('h2');
    titleElement.textContent = film.title;
    titleElement.classList.add('film-selection__heading', 'film-title');

    const filmPageLink = document.createElement('a');
    filmPageLink.textContent = "View film info";
    filmPageLink.href = `../html/filmpage.html`;   
    filmPageLink.classList.add('cta');
    filmPageLink.addEventListener('click', () => {
        localStorage.setItem('film', JSON.stringify(film));
    }); 

    const addToCart = document.createElement('button');
    addToCart.innerHTML = "Add film to cart"; 
    addToCart.classList.add('js-add-to-cart', 'cta');
    addToCart.addEventListener('click', handleAddToCart)

    filmDiv.appendChild(imageElement);
    filmDiv.appendChild(titleElement);
    filmDiv.appendChild(filmPageLink);
    filmDiv.appendChild(addToCart);

    return filmDiv;
};