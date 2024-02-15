export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart) {
    cart = [{
        
    }];
}

function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productID) {
    let matchingItem;

    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    });

    if (matchinItem) {
        matchingItem.quantity += 1;
    } 
    else {
        cart.push({
            productId: productId,
            quantity: 1
        });
    }
}