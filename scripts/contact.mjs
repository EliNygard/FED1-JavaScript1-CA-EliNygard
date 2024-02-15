const submitButton = document.querySelector('#submit');

export async function onSubmitClick (event) {
    event.preventDefault();
    alert("The message was sent");
};


submitButton.addEventListener('click', onSubmitClick);