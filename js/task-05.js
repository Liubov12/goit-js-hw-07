const inputRef = document.querySelector('name-input');
const spanDisplayRef = document.querySelector('name-output');

inputRef.oninput = function () {
    if (inputRef.value === '') {
       spanDisplayReft.innerHTML = 'незнакомец';
    } else{
    spanDisplayRef.innerHTML = inputRef.value;
    }
}