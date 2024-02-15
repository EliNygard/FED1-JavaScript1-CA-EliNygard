import { displayFilms } from "./display-films.mjs";


let filmList = JSON.parse(localStorage.getItem("filmList"));

export const filterFunctions = (filmList) => {
    addEventListenerOnFilmGenre(filmList);
    console.log("filter function");
}

const addEventListenerOnFilmGenre = (filmList) => {
    console.log("event listener");
    document.querySelectorAll(".sortFilmsByGenre ul li").forEach((genre) => {
        genre.addEventListener("click", () => {
        filterFilmByGenre(genre.textContent, filmList);
        });
    }); 
}

const filterFilmByGenre = async (genre, filmList) => {             // sjekk hvorfor async
    if (genre === "All films") {
        displayFilms(filmList);
    } else {
        let filteredFilmList = filmList.filter((film) => film.genre === genre);
        displayFilms(filteredFilmList);
        console.log(genre);
        console.log(filteredFilmList);
    }  
}


