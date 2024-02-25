const submitButton = document.querySelector('#submit');

export async function onSubmitClick (event) {
    event.preventDefault();
    alert("The message was sent");

    document.querySelector("#name").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#message").value = "";
};


submitButton.addEventListener('click', onSubmitClick);