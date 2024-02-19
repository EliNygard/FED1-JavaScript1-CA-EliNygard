// import { displayFilms } from "./display-films.mjs";


let filmList = JSON.parse(localStorage.getItem("filmList"));


export const filterFunctions = (filmList) => {             //dette er ikke en funksjon, derfor kan den ikke calles i main, kun en variabel. Hvordan skrive den som en funksjon?
    addEventListenerOnFilmGenre(filmList);
}

const addEventListenerOnFilmGenre = (filmList) => {
    document.querySelectorAll(".sortFilmsByGenre ul li").forEach((genre) => {
        genre.addEventListener("click", filterFilmByGenre(genre.textContent, filmList));
    }); 
};

const filterFilmByGenre = (genre, filmList) => {             // loop through
    if (genre === "All films") {
        displayFilms(filmList);
    } else {
        let filteredFilmList = filmList.filter((film) => film.genre === genre);
        filteredFilmList.forEach(film => {
            film.style.display = "block";
        }) 
        
        
        // displayFilms(filteredFilmList);

        console.log(genre);
        console.log(filteredFilmList);
    }  
};

