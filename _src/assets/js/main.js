'use strict';

/* Name field */

const fillNameSelector = document.querySelector('#full-name');
const cardNameSelector = document.querySelector('.preview__name');

fillNameSelector.addEventListener('keyup', function(e){
    const writer = e.currentTarget;

    cardNameSelector.innerHTML = writer.value;
});

//////////occupation field///////////

const fillOccupationSelector = document.querySelector('#occupation');
const cardOccupationSelector = document.querySelector('.preview__occupation');

fillOccupationSelector.addEventListener('keyup', function(e){
    const writer = e.currentTarget;

    cardOccupationSelector.innerHTML = writer.value;
});















/* desplegable */

const buttonDrop = document.querySelector('.dropdown__design');

buttonDrop.addEventListener('click', () => buttonDrop.classList.toggle('.hidden'));