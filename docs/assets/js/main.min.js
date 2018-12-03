'use strict';

/* campo de escritura */

const fillNameSelector = document.querySelector('#full-name');
const cardNameSelector = document.querySelector('.preview__name');

fillNameSelector.addEventListener('keyup', function(e){
    const writer = e.currentTarget;

    cardNameSelector.innerHTML = writer.value;
});

/* desplegable */

const buttonDrop = document.querySelector('.dropdown__design');

buttonDrop.addEventListener('click', ()=> buttonDrop.classList.toggle('.hidden'));