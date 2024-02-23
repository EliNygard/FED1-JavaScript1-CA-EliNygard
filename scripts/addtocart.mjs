export function handleAddToCart(event){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const button = event.target;
    const filmId = button.closest('.film-item').id;
    const filmToAdd = findFilmById(filmId);
    
    //check if film added is in cart, if it is increase quantity

    const existingFilmIndex = cart.findIndex(item => item.id === filmId);

    if (existingFilmIndex !== -1) {
        // Film already exists in the cart, increase its quantity
        cart[existingFilmIndex].quantity++;
    } else {
        // Film doesn't exist in the cart, add it with quantity 1
        filmToAdd.quantity = 1;
        cart.push(filmToAdd);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    console.log("Cart updated:", cart);

    // if (filmToAdd) {
    //     // set the q
    //     cart.push(filmToAdd);
    //     localStorage.setItem('cart', JSON.stringify(cart));
    //     console.log("Added to cart:", filmToAdd);
    // } else {
    //     console.error("Film not found with ID:", filmId);
    // }

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