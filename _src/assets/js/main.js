'use strict';

/* design section funtionality */

//Declarar las variables 
const cardTextSelector = document.querySelector('.preview__texts');
const cardNameSelector = document.querySelector('.preview__name');
const cardOccupationSelector = document.querySelector ('.preview__occupation');

const decoRectangleSelector = document.querySelector('.preview__decoration-rectangle');
const socialIconSelector = document.querySelectorAll('.social-icon');
const skillIconSelector = document.querySelectorAll('.skill');

console.log(socialIconSelector);

const checkboxPaletteGreen = document.querySelector('#color-green');
const checkboxPaletteRed = document.querySelector('#color-red');
const checkboxPaletteGrey = document.querySelector('#color-grey');


const checkboxUbuntuSelector = document.querySelector('#font-ubuntu');
const checkboxComicSansSelector = document.querySelector('#font-comic-sans');
const checkboxMontserratSelector = document.querySelector('#font-montserrat');

//Cuando 'click' en checkbox, cambiar clase a las variables con una clase específica de la paleta de colores

function choosePalette(event) {

    const checkboxElement = event.currentTarget;

    if ((this.value) === 'green-palette') {
        cardNameSelector.classList.add('preview__name--green');
        decoRectangleSelector.classList.add('preview__decoration-rectangle--green');
        for (let i=0; i<socialIconSelector.length; i++){
        socialIconSelector[i].classList.add('social-icon--green');
        }
        for (let i=0; i<skillIconSelector.length; i++){
        skillIconSelector[i].classList.add('skill--green');
        }
        
        cardNameSelector.classList.remove('preview__name--red', 'preview__name--grey');
        decoRectangleSelector.classList.remove('preview__decoration-rectangle--red', 'preview__decoration-rectangle--grey' );
        for (let i=0; i<socialIconSelector.length; i++){
        socialIconSelector[i].classList.remove('social-icon--red', 'social-icon--grey');
        }
        for (let i=0; i<skillIconSelector.length; i++){
        skillIconSelector[i].classList.remove('skill--red', 'skill--grey');
        }
    }

    else if ((this.value) === 'red-palette') {
        cardNameSelector.classList.add('preview__name--red');
        decoRectangleSelector.classList.add('preview__decoration-rectangle--red');
        for (let i=0; i<socialIconSelector.length; i++){
        socialIconSelector[i].classList.add('social-icon--red');
        }
        for (let i=0; i<skillIconSelector.length; i++){
        skillIconSelector[i].classList.add('skill--red');
        }
        
        cardNameSelector.classList.remove('preview__name--green', 'preview__name--grey');
        decoRectangleSelector.classList.remove('preview__decoration-rectangle--green', 'preview__decoration-rectangle--grey' );
        for (let i=0; i<socialIconSelector.length; i++){
        socialIconSelector[i].classList.remove('social-icon--green', 'social-icon--grey');
        }
        for (let i=0; i<skillIconSelector.length; i++){
        skillIconSelector[i].classList.remove('skill--green', 'skill--grey');
        }
    }
    
    else if  ((this.value) === 'grey-palette') {
        cardNameSelector.classList.add('preview__name--grey');
        decoRectangleSelector.classList.add('preview__decoration-rectangle--grey');
        for (let i=0; i<socialIconSelector.length; i++){
        socialIconSelector[i].classList.add('social-icon--grey');
        }
        for (let i=0; i<skillIconSelector.length; i++){
        skillIconSelector[i].classList.add('skill--grey');
        }
        
        cardNameSelector.classList.remove('preview__name--green', 'preview__name--red');
        decoRectangleSelector.classList.remove('preview__decoration-rectangle--green', 'preview__decoration-rectangle--red' );
        for (let i=0; i<socialIconSelector.length; i++){
        socialIconSelector[i].classList.remove('social-icon--green', 'social-icon--red');
        }
        for (let i=0; i<skillIconSelector.length; i++){
        skillIconSelector[i].classList.remove('skill--green', 'skill--red');
        }
    }
}

checkboxPaletteGreen.addEventListener('click', choosePalette);
checkboxPaletteRed.addEventListener('click', choosePalette);
checkboxPaletteGrey.addEventListener('click', choosePalette);


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

