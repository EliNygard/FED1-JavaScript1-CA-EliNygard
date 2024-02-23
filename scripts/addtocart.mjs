export function handleAddToCart(event){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const button = event.target;
    const filmId = button.closest('.film-item').id;
    const filmToAdd = findFilmById(filmId);
    
    //check if film added is in cart, if it is increase quantity

    if (filmToAdd) {
        // set the q
        cart.push(filmToAdd);
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log("Added to cart:", filmToAdd);
    } else {
        console.error("Film not found with ID:", filmId);
    }

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
    // addedMessage.style.position = "fixed";
    // addedMessage.style.top = "50%";
    // addedMessage.style.left = "50%";
    // addedMessage.style.transform = "translate(-50%, -50%)";
    // addedMessage.style.backgroundColor = "lightgreen";
    // addedMessage.style.padding = "10px";
    // addedMessage.style.borderRadius = "5px";
    // addedMessage.style.zIndex = "9999";
    document.body.appendChild(addedMessage);

    setTimeout(() => {
        addedMessage.remove();
    }, 2000);
}