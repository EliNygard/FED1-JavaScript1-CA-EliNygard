// import { displayFilms } from "../display-films.mjs";

// export const createAddEventListenerGenreButtons = (filmItems) => {
//     document.querySelectorAll ('.js-film-genres-ul li').forEach((li)=>{
//         li.addEventListener('click', ()=>{
//             filterByGenre(filmItems, li.textContent);
//         });
//     });
// }

// const filterByGenre = (filmItems, listText) => {
//     if (listText === 'All films') {
//      displayFilms(filmItems);
//     }
//     else {
//         let filteredList = filmItems.filter((film) =>
//         film.genre === listText);

//         displayFilms(filteredList);
//     }
// }