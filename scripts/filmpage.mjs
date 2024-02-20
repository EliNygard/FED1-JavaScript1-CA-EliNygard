const filmItem = JSON.parse(localStorage.getItem("film"));

function generateFilmPageItem (filmItem) {

    let main = document.querySelector("main");

    const filmItemContainer = document.createElement("div");
    filmItemContainer.classList = "filmpage_content";

    const imageElement = document.createElement("img");
    imageElement.classList.add('filmpage-image')
    imageElement.src = filmItem.image.url;
    imageElement.alt = filmItem.image.alt;

    const titleElement = document.createElement("h1");
    titleElement.classList.add('title');
    titleElement.textContent = filmItem.title;

    const descriptionElement = document.createElement("p");
    descriptionElement.classList.add('synopsis');
    descriptionElement.textContent = filmItem.description;

    const buyFilmButton = document.createElement("button");
    buyFilmButton.innerHTML = "Add film to cart";
    buyFilmButton.classList.add("js-add-to-cart", "cta");

    const ratingElement = document.createElement("p");
    ratingElement.textContent = `Rating by other users: ${filmItem.rating} points`;

    const releasedElement = document.createElement("p");
    releasedElement.textContent = filmItem.released;


    main.appendChild(filmItemContainer);
    filmItemContainer.append(imageElement, titleElement, descriptionElement, releasedElement, buyFilmButton, ratingElement);

    return filmItemContainer;
}

generateFilmPageItem(filmItem);