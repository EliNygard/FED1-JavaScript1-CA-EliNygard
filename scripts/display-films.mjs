export function displayFilms(filmItems) {
    const filmsData = filmItems;
    const filmContainer = document.getElementById('film-container');

    filmsData.forEach(film => {
        const filmElement = createFilmElement(film);
        filmContainer.appendChild(filmElement);
    });
}

export function createFilmElement(film) {
    const filmDiv = document.createElement('div');
    filmDiv.classList.add('film-item');

    const imageElement = document.createElement('img');
    imageElement.src = film.image.url;
    imageElement.alt = film.image.alt;

    const titleElement = document.createElement('h2');
    titleElement.textContent = film.title;
    titleElement.classList.add('film-selection__heading', 'film-title');

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = film.description;

    const filmPageLink = document.createElement('a');
    filmPageLink.innerHTML = "View film info";
    filmPageLink.href = `./html/`   //`film.html?id=${film.id}`
    filmPageLink.classList.add('cta');

    const buyFilmButton = document.createElement('button');
    buyFilmButton.innerHTML = "Add film to cart";
    buyFilmButton.classList.add('js-add-to-cart', 'cta');

    filmDiv.appendChild(imageElement);
    filmDiv.appendChild(titleElement);
    // filmDiv.appendChild(descriptionElement);
    filmDiv.appendChild(filmPageLink);
    filmDiv.appendChild(buyFilmButton);

    return filmDiv;
}

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('js-add-to-cart')) {
        console.log('added film to cart');
    }
});

// document.querySelectorAll('.js-add-to-cart')
//     .forEach((button) => {
//         button.addEventListener('click', () => {
//             console.log('added film to cart');
//         });
//     });