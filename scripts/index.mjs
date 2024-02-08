import { API_URL } from "./shared/constants.js";

function displayFilms(films) {
    for (let i = 0; i < films.length; i++) {
        const title = films[i].title;
        const description = films[i].description;
        //call a function to generate html
        console.log("Title :", title);
    }
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
    // console.log(films);
}

main();
