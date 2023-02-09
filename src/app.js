const form = document.querySelector('.form-container');
const displayedMessage = document.querySelector('.previous-message');
const warningMessage = document.querySelector('.warning-message');
const warningContainer = document.querySelector('.warning-container');

form.addEventListener('submit', (e) => {
    // prevent the form's default submission action
    e.preventDefault();
    // Getting message info
    const author = document.querySelector('#author');
    const message = document.querySelector('#message');
    const lastAuthor = document.querySelector('#last-author');
    const lastMessage = document.querySelector('#last-message');

    if (author.value === '' && message.value === '') {
        showWarning('You have to fill both author and message inputs :D');
    } else if (author.value === '') {
        showWarning('You have to set an author');
    } else if (message.value === '') {
        showWarning('You have to set a message');
    } else {
        lastAuthor.innerHTML = author.value;
        lastMessage.innerHTML = message.value;
        displayedMessage.style.visibility = 'visible';
        author.value = '';
        message.value = '';
    }

})

function showWarning(message) {
    const delay = 2500;
    warningMessage.innerHTML = message;
    warningContainer.style.display = 'grid';
    setTimeout(() => {
        warningContainer.style.display = 'none';
    }, delay);
}