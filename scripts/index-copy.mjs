import { API_URL } from "./shared/constants.js";

let filmsData = []; // Define filmsData in the global scope

export async function displayFilms(films) {
    filmsData = films.data;
    const filmContainer = document.getElementById('film-container');
    filmContainer.innerHTML = ''; // Clear previous films

    filmsData.forEach(film => {
        const filmElement = createFilmElement(film);
        filmContainer.appendChild(filmElement);
    });
}

export function createFilmElement(film) {
    const filmDiv = document.createElement('div');

    const imageElement = document.createElement('img');
    imageElement.src = film.image.url;
    imageElement.alt = film.image.alt;

    const titleElement = document.createElement('h2');
    titleElement.textContent = film.title;
    titleElement.classList.add('film-selection__heading');

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = film.description;

    const filmPageLink = document.createElement('a');
    filmPageLink.innerHTML = "View Film";
    filmPageLink.href = film.link; // Assuming there's a link property in your film object
    filmPageLink.classList.add('cta');

    filmDiv.appendChild(imageElement);
    filmDiv.appendChild(titleElement);
    filmDiv.appendChild(descriptionElement);
    filmDiv.appendChild(filmPageLink);

    return filmDiv;
}

export async function doFetch(url) {
    try {
        const response = await fetch(url);
        const json = await response.json();
        return json;
    } catch (error) {
        console.log('Error', error);
    }
}

async function filterFilmsByGenre(genre) {
    if (genre === 'All films') {
        return filmsData;
    } else {
        return filmsData.filter(film => film.genre === genre);
    }
}

function setupGenreFilter(films) {
    const selectGenre = document.getElementById('js-select-genre');
    selectGenre.addEventListener('change', async function() {
        const selectedGenre = this.value;
        const filteredFilms = await filterFilmsByGenre(selectedGenre);
        displayFilms({ data: filteredFilms });
    });
}

export async function main() {
    const films = await doFetch(API_URL);
    displayFilms(films);
    setupGenreFilter(films);
}

main();
