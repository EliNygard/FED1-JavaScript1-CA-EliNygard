export function handleAddToCart(event){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const button = event.target
    const filmId = button.closest('.film-item').id
    const filmToAdd = findFilmById(filmId);
    
    //check if film added is in cart, if it is increase quantity

    if (filmToAdd) {
        cart.push(filmToAdd);
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log("Added to cart:", filmToAdd);
    } else {
        console.error("Film not found with ID:", filmId);
    }
}

function findFilmById(filmId) {
    const films = JSON.parse(localStorage.getItem("filmList")) || [];
    return films.find(film => film.id === filmId);
}