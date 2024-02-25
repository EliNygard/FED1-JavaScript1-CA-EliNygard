import { displayFilms } from "./display-films.mjs";

export const filterFunctions = () => {
    let filmList = JSON.parse(localStorage.getItem("filmList"));
    addEventListenerOnFilmGenre(filmList);
};

function addEventListenerOnFilmGenre(filmList) {
    document.querySelectorAll(".sortFilmsByGenre ul li").forEach((genre) => {
        genre.addEventListener("click", () => filterFilmByGenre(genre.textContent, filmList));
    });
}

function filterFilmByGenre(genre, filmList) {
    const filmContainer = document.getElementById('film-container');
    if (genre === "All films") {
        filmContainer.innerHTML = '';
        displayFilms(filmList);
    } else {
        filmContainer.innerHTML = '';
        let filteredFilmList = filmList.filter((film) => film.genre === genre);
        displayFilms(filteredFilmList);
    }
};