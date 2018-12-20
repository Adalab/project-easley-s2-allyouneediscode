'use strict';

/* dropdown */

const mainArrow = document.querySelectorAll('.main__arrow');

function dropDown(event) {
    const btnSelected = event.currentTarget;
    if (btnSelected.classList.contains('dropdown__design') === true) {
        boxDesign.classList.toggle('hidden');

        mainArrow[0].classList.toggle('fa-angle-down');
        mainArrow[0].classList.toggle('fa-angle-up');
    } else if (btnSelected.classList.contains('dropdown__fill') === true) {
        boxFill.classList.toggle('hidden');

        mainArrow[1].classList.toggle('fa-angle-down');
        mainArrow[1].classList.toggle('fa-angle-up');
    } else if (btnSelected.classList.contains('dropdown__share') === true){
        shareButton.classList.toggle('hidden');
        boxShare.classList.toggle('hidden');
        boxTwitter.classList.add('hidden');

        mainArrow[2].classList.toggle('fa-angle-down');
        mainArrow[2].classList.toggle('fa-angle-up');
    }

}
for (let i = 0; i < buttonDrop.length; i++) {
    buttonDrop[i].addEventListener('click', dropDown);
}
shareButton.addEventListener('click',showLink);

function showLink(){
    boxTwitter.classList.remove('hidden');
}
