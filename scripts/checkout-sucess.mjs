import loader from './loader.mjs';

function generateCheckoutSuccess() {
    const section = document.querySelector(".checkout-success-message");

    const heading = document.createElement("h1");
    heading.classList.add("color-accent");
    heading.textContent = "Enjoy the film";
    
    const checkoutMessage = document.createElement("p");
    checkoutMessage.textContent = "We have sent you a receipt to your e-mail. It contains a link to the film, and you can watch it as many times as you want.";

    const buttonWatch = document.createElement("a");
    buttonWatch.classList.add("cta");
    buttonWatch.textContent = "Start watching"

    const buttonBuyNewFilm = document.createElement("a");
    buttonBuyNewFilm.classList.add("cta");
    buttonBuyNewFilm.textContent = "Buy a new film";

    section.append(heading, checkoutMessage, buttonWatch, buttonBuyNewFilm);
}

function loadCheckoutSuccessPage (){
    loader.show();
    generateCheckoutSuccess();
    loader.hide();
}

loadCheckoutSuccessPage();