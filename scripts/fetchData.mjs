import { API_FILM_URL } from "./shared/constants.js";
import loader from './loader.mjs';

async function fetchFilms(url) {
    try {
        const response = await fetch(url);
        const json = await response.json();
        return json.data;
    } catch (error) {
        console.error("Could not fetch data from api", error);
    }
}

async function main() {
    loader.show();
    console.log(loader);
    const filmItems = await fetchFilms(API_FILM_URL);
    localStorage.setItem("filmList", JSON.stringify(filmItems));
    loader.hide();
    return filmItems;
    
}

export const allFilms = await main();