const images = [
    {
        url:
            'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url:
            'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url:
            'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];

const galleryRef = document.querySelector('ul#gallery');
let stringForHtml;
let imgArray = images.forEach(image => {
    galleryRef.insertAdjacentHTML('beforeend', `<li class="list-style"><img src="${image.url}" alt="${image.alt}"></img></li>`)
    return stringForHtml ;
});
galleryRef.insertAdjacentHTML('beforeend', stringForHtml);
//добавляем стили

document.body.style.cssText = `
   background-color: aqua;
`;
var elems = document.getElementsByTagName('img');
for (var i = 0; i < elems.length; i++) {
    elems[i].style.width = '500px';
    elems[i].style.height = '300px';

};

