'use strict';

const checkboxUbuntuSelector = document.querySelector('#font-ubuntu');
const checkboxComicSansSelector = document.querySelector('#font-comic-sans');
const checkboxMontserratSelector = document.querySelector('#font-montserrat');

//When 'click'-ing checkbox, add the class corresponding to the selected typography and remove others

function chooseFont() {

    if ((this.value) === 'font-ubuntu') {
        cardTextSelector.classList.add('ubuntu');
        cardTextSelector.classList.remove('comic-sans');
        cardTextSelector.classList.remove('montserrat');

        localStorage.setItem('typography', '1');
        jsonObject.typography = 1;
    }

    else if ((this.value) === 'font-comic-sans') {
        cardTextSelector.classList.add('comic-sans');b
        cardTextSelector.classList.remove('ubuntu');
        cardTextSelector.classList.remove('montserrat');

        localStorage.setItem('typography', '2');
        jsonObject.typography = 2;
    }

    else if ((this.value) === 'font-montserrat') {
        cardTextSelector.classList.add('montserrat');
        cardTextSelector.classList.remove('ubuntu');
        cardTextSelector.classList.remove('comic-sans');

        localStorage.setItem('typography', '3');
        jsonObject.typography = 3;
    }
}

checkboxUbuntuSelector.addEventListener('click', chooseFont);
checkboxComicSansSelector.addEventListener('click', chooseFont);
checkboxMontserratSelector.addEventListener('click', chooseFont);
