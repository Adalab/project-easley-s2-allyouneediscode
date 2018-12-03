'use strict';

/* design section funtionality */

//Declarar las variables 
const cardTextSelector = document.querySelector('.preview__texts');
const cardNameSelector = document.querySelector('.preview__name');
const cardOccupationSelector = document.querySelector ('.preview__occupation');
const checkboxFontSelector = document.querySelectorAll('.option-button');
const checkboxUbuntuSelector = document.querySelector('#font-ubuntu');
const checkboxComicSansSelector = document.querySelector('#font-comic-sans');
const checkboxMontserratSelector = document.querySelector('#font-montserrat');

//Cuando 'click' en checkbox, cambiar clase a las variables con una clase específica de la tipografía

function chooseFont(event) {

    const checkboxElement = event.currentTarget;

    if ((this.value) === 'font-ubuntu') {
        cardTextSelector.classList.add('ubuntu');
        cardTextSelector.classList.remove('comic-sans');
        cardTextSelector.classList.remove('montserrat');
    }

    else if ((this.value) === 'font-comic-sans') {
        cardTextSelector.classList.add('comic-sans');
        cardTextSelector.classList.remove('ubuntu');
        cardTextSelector.classList.remove('montserrat');
    }
    
    else if  ((this.value) === 'font-montserrat') {
        cardTextSelector.classList.add('montserrat');
        cardTextSelector.classList.remove('ubuntu');
        cardTextSelector.classList.remove('comic-sans');
    }
}

checkboxUbuntuSelector.addEventListener('click', chooseFont);
checkboxComicSansSelector.addEventListener('click', chooseFont);
checkboxMontserratSelector.addEventListener('click', chooseFont);



/* campo de escritura */

const fillNameSelector = document.querySelector('#full-name');


fillNameSelector.addEventListener('keyup', function(e){
    const writer = e.currentTarget;

    cardNameSelector.innerHTML = writer.value;
});

/* desplegable */

const buttonDrop = document.querySelector('.dropdown__design');

buttonDrop.addEventListener('click', ()=> buttonDrop.classList.toggle('.hidden'));

