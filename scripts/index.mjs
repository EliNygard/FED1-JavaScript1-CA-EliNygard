import { API_URL } from "./shared/constants.js";

import { displayFilms } from "./display-films.mjs";

















  

async function fetchFilms(url) {
    try {
        const response = await fetch(url);
        const json = await response.json();
        return json.data;
    } catch (error) {
        console.log('Error', error);
    }
}

async function main() {
    const filmItems = await fetchFilms(API_URL);
    displayFilms(filmItems);
}

main();
















// const selectGenre = document.getElementById('action');

// selectGenre.addEventListener('change', () => {
//     const selectedGenre = selectGenre.value;
//     const filteredFilms = filmsData.filter(film => film.genre === selectedGenre);

//     displayFilms(filteredFilms);
// });

// let filterInput = document.getElementById("filterinput");

// filterInput.addEventListener('keyup', filterFilms);

// export function filterFilms(){
//     let filterValue = filterInput.value.toUpperCase();
//     let item = grid.querySelectorAll('.film-item');

//     for (let i = 0; i < item.length; i++){
//         let span = item[i].querySelector('.film-title');

//         if(span.innerHTML.toUpperCase().indexOf(filterValue) > -1){
//             item[i].style.display = "initial";
//         }else{
//             item[i].style.display = "none";
//         }
//     }
// }


// let selectGenre = document.querySelectorAll('option');

// selectGenre.addEventListener('click', filterFilmsByGenre);

// export function filterFilmsByGenre(films) {
//     const filmsData = films.data;
    
//     filmsData.forEach(film => {
//         filmsData.find()
//     });
        
// }




