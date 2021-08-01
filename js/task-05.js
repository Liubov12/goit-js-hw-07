const inputRef = document.querySelector('input#name-input');
const spanDisplayRef = document.querySelector('span#name-output');


inputRef.addEventListener('input', textHandler)
function textHandler (event) {
    if (event.target.value.length > 0 && /\S/.test(event.target.value))  {
        spanDisplayRef.textContent = event.target.value;
    } else {
        spanDisplayRef.textContent = 'незнакомец';
    };
};