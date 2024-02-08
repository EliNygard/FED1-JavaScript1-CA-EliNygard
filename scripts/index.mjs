import { API_URL } from "./shared/constants.js";

const selectGenre = document.getElementById('js-select-genre');

selectGenre.addEventListener('change', () => {
    const selectedGenre = selectGenre.value;
    const filteredFilms = filmsData.filter(film => film.genre === selectedGenre);

    displayFilms(filteredFilms);
});

function displayFilms(films) {
    const filmsData = films.data;
    const filmContainer = document.getElementById('film-container');

    filmsData.forEach(film => {
        const filmElement = createFilmElement(film);
        filmContainer.appendChild(filmElement);
    });
}

function createFilmElement(film) {
    const filmDiv = document.createElement('div');
    // filmDiv.classList.add('');

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
    filmPageLink.href = `./html/`   //`film.html?id=${film.id}`
    filmPageLink.classList.add('cta');

    filmDiv.appendChild(imageElement);
    filmDiv.appendChild(titleElement);
    filmDiv.appendChild(descriptionElement);
    filmDiv.appendChild(filmPageLink);

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

