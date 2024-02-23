// message remove $ if can't be fixed

export function addToCart(event){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const button = event.target;
    const filmId = button.closest('.film-item').id;
    const filmToAdd = findFilmById(filmId);

    const existingFilmIndex = cart.findIndex(item => item.id === filmId);

    if (existingFilmIndex !== -1) {
        cart[existingFilmIndex].quantity++;
    } else {
        filmToAdd.quantity = 1;
        cart.push(filmToAdd);
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    addToCartMessage();  
}

function findFilmById(filmId) {
    const films = JSON.parse(localStorage.getItem("filmList")) || [];
    return films.find(film => film.id === filmId);
}

function addToCartMessage() {
    const addedMessage = document.createElement('div');
    addedMessage.classList.add("added-message");
    addedMessage.textContent = "`${}` The film was added to your cart!";
    document.body.appendChild(addedMessage);

    setTimeout(() => {
        addedMessage.remove();
    }, 2000);
}