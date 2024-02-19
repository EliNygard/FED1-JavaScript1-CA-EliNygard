import { API_FILM_URL } from "./shared/constants.js";

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
    const filmItems = await fetchFilms(API_FILM_URL);
    localStorage.setItem("filmList", JSON.stringify(filmItems));
    return filmItems
}

export const allFilms = await main();