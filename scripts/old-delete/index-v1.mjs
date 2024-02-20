import { API_URL } from "../shared/constants.js";


function displayFilms(film) {
    const filmContainer = document.getElementById('film-container');

    film.forEach(film => {
        const filmElement = createFilmElement(film);
        filmContainer.appendChild(filmElement);
    });
}

function createFilmElement(film) {
    const filmDiv = document.createElement('div');
    filmDiv.classList.add('film');

    const titleElement = document.createElement('h2');
    titleElement.textContent = film.title;

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = film.description;

    filmDiv.appendChild(titleElement);
    filmDiv.appendChild(descriptionElement);

    return filmDiv;
}


async function doFetch(url) {
    try {
        const response = await fetch(url);
        const json = await response.json();
        return json;
    } catch (error) {
        console.log('Error', error);
    }
}

async function main() {
    const films = await doFetch(API_URL);
    displayFilms(films);
}

main();

