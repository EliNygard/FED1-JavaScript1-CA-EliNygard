export function displayFilms(filmItems) {

    const filmsData = filmItems;
    const filmContainer = document.getElementById('film-container');

    filmsData.forEach(film => {
        const filmElement = createFilmElement(film);
        filmContainer.appendChild(filmElement);
    });
};

// steps for add to cart; 
// 1. check if film is added to cart:
//    if added, increment "quantity" by 1
// else, add the game
function addToCart(film) {
    console.log("add to cart", film);
}

function createFilmElement(film) {
    
    const filmDiv = document.createElement('div');
    filmDiv.classList.add('film-item');

    const imageElement = document.createElement('img');
    imageElement.classList.add("film-image")
    imageElement.src = film.image.url;
    imageElement.alt = film.image.alt;

    const titleElement = document.createElement('h2');
    titleElement.textContent = film.title;
    titleElement.classList.add('film-selection__heading', 'film-title');

    const filmPageLink = document.createElement('a');
    filmPageLink.innerHTML = "View film info";
    filmPageLink.href = `../html/filmpage.html`;   
    filmPageLink.classList.add('cta');
    filmPageLink.addEventListener('click', () => {
        localStorage.setItem('film', JSON.stringify(film));
    }); 

    const addToCartButton = document.createElement('button');
    addToCartButton.innerHTML = "Add film to cart";
    addToCartButton.href = `../html/checkout.html`; 
    addToCartButton.classList.add('js-add-to-cart', 'cta');
    addToCartButton.addEventListener('click', () => {
        addToCart(film);
    })
    // addToCart.addEventListener('click', () => {
    //     let cart = JSON.parse(localStorage.getItem("cart"));
    //     cart.push(film);
    //     localStorage.setItem('cart', JSON.stringify(cart));
    //     console.log("added to cart");
    // });

    filmDiv.append(imageElement, titleElement, filmPageLink, addToCartButton);

    return filmDiv;
};

