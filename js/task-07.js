const inputFontSizeRef = document.querySelector('input#font-size-control');
const changeTextRef = document.querySelector('span#text');

function handlerFontSize(event) {
    changeTextRef.setAttribute('style', `font-size:${inputFontSizeRef.value}px`)
};

inputFontSizeRef.addEventListener('input', handlerFontSize);