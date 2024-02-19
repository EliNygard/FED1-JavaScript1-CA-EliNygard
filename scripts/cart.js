let cart = [];

localStorage.setItem('cart', JSON.stringify(cart));


const addToCart = document.querySelectorAll(".js-add-to-cart");
console.log(addToCart);

addToCart.forEach(button => {
    button.addEventListener('click', () => {
        let cart = JSON.parse(localStorage.getItem("cart"));
        cart.push(film);
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log("added to cart");
    });
});





