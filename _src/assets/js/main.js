'use strict';

/* design section funtionality */

//Declarar las variables 
const cardTextSelector = document.querySelector('.preview__texts');
const cardNameSelector = document.querySelector('.preview__name');
const cardOccupationSelector = document.querySelector('.preview__occupation');

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

function choosePalette() {

    if ((this.value) === 'green-palette') {
        cardNameSelector.classList.add('preview__name--green');
        decoRectangleSelector.classList.add('preview__decoration-rectangle--green');
        for (let i = 0; i < socialIconSelector.length; i++) {
            socialIconSelector[i].classList.add('social-icon--green');
        }
        for (let i = 0; i < skillIconSelector.length; i++) {
            skillIconSelector[i].classList.add('skill--green');
        }

        cardNameSelector.classList.remove('preview__name--red', 'preview__name--grey');
        decoRectangleSelector.classList.remove('preview__decoration-rectangle--red', 'preview__decoration-rectangle--grey');
        for (let i = 0; i < socialIconSelector.length; i++) {
            socialIconSelector[i].classList.remove('social-icon--red', 'social-icon--grey');
        }
        for (let i = 0; i < skillIconSelector.length; i++) {
            skillIconSelector[i].classList.remove('skill--red', 'skill--grey');
        }
    }

    else if ((this.value) === 'red-palette') {
        cardNameSelector.classList.add('preview__name--red');
        decoRectangleSelector.classList.add('preview__decoration-rectangle--red');
        for (let i = 0; i < socialIconSelector.length; i++) {
            socialIconSelector[i].classList.add('social-icon--red');
        }
        for (let i = 0; i < skillIconSelector.length; i++) {
            skillIconSelector[i].classList.add('skill--red');
        }

        cardNameSelector.classList.remove('preview__name--green', 'preview__name--grey');
        decoRectangleSelector.classList.remove('preview__decoration-rectangle--green', 'preview__decoration-rectangle--grey');
        for (let i = 0; i < socialIconSelector.length; i++) {
            socialIconSelector[i].classList.remove('social-icon--green', 'social-icon--grey');
        }
        for (let i = 0; i < skillIconSelector.length; i++) {
            skillIconSelector[i].classList.remove('skill--green', 'skill--grey');
        }
    }

    else if ((this.value) === 'grey-palette') {
        cardNameSelector.classList.add('preview__name--grey');
        decoRectangleSelector.classList.add('preview__decoration-rectangle--grey');
        for (let i = 0; i < socialIconSelector.length; i++) {
            socialIconSelector[i].classList.add('social-icon--grey');
        }
        for (let i = 0; i < skillIconSelector.length; i++) {
            skillIconSelector[i].classList.add('skill--grey');
        }

        cardNameSelector.classList.remove('preview__name--green', 'preview__name--red');
        decoRectangleSelector.classList.remove('preview__decoration-rectangle--green', 'preview__decoration-rectangle--red');
        for (let i = 0; i < socialIconSelector.length; i++) {
            socialIconSelector[i].classList.remove('social-icon--green', 'social-icon--red');
        }
        for (let i = 0; i < skillIconSelector.length; i++) {
            skillIconSelector[i].classList.remove('skill--green', 'skill--red');
        }
    }
}

checkboxPaletteGreen.addEventListener('click', choosePalette);
checkboxPaletteRed.addEventListener('click', choosePalette);
checkboxPaletteGrey.addEventListener('click', choosePalette);


//Cuando 'click' en checkbox, cambiar clase a las variables con una clase específica de la tipografía

function chooseFont() {

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

    else if ((this.value) === 'font-montserrat') {
        cardTextSelector.classList.add('montserrat');
        cardTextSelector.classList.remove('ubuntu');
        cardTextSelector.classList.remove('comic-sans');
    }
}

checkboxUbuntuSelector.addEventListener('click', chooseFont);
checkboxComicSansSelector.addEventListener('click', chooseFont);
checkboxMontserratSelector.addEventListener('click', chooseFont);



/* campo de escritura */

/* Name field */

const fillNameSelector = document.querySelector('#full-name');


fillNameSelector.addEventListener('keyup', function (e) {
    const writer = e.currentTarget;

    cardNameSelector.innerHTML = writer.value;
});

//////////occupation field///////////

const fillOccupationSelector = document.querySelector('#occupation');

fillOccupationSelector.addEventListener('keyup', function (e) {
    const writer = e.currentTarget;

    cardOccupationSelector.innerHTML = writer.value;
});


////////////Here goes imagen de perfil//////////

const fakeUploadImage = document.querySelector('.fake__upload-image');
const uploadImage = document.querySelector('.upload-image');
const fakeCheckUploadImage = document.querySelector('.fake__check-upload-image');
const previewImage = document.querySelector('.preview__image');
const fr = new FileReader();

//FakeUploadImage activa UploadImage
const uploadClick = () => {
    uploadImage.click();
};

//hacemos click en FakeUploadImage 
fakeUploadImage.addEventListener('click', uploadClick);

//se obtiene la imagen del fakeCheckUploadImage
function getImage(event) {
    const myFile = event.currentTarget.files[0];
    fr.addEventListener('load', writeImage);
    fr.readAsDataURL(myFile);
}

//Añadimos listeners a los botones
uploadImage.addEventListener('change', getImage);

//UploadImage se pinta en previewImage
const writeImage = () => {
    previewImage.style.backgroundImage = `url(${fr.result})`;
    fakeCheckUploadImage.style.backgroundImage = `url(${fr.result})`;
};

////////Social icons /////////////

////email field////

const fillEmailSelector = document.querySelector('#email');
const cardSelector = document.querySelector('.preview__social-icons');
const li__email = document.querySelector('.li__email');
const li__phone = document.querySelector('.li__phone');
const li__linkedin = document.querySelector('.li__linkedin');
const li__github = document.querySelector('.li__github');

fillEmailSelector.addEventListener('keyup', function (e) {
    const writer = e.currentTarget;
    // event.preventDefault(); 
    li__email.innerHTML = `<a href="mailto:${writer.value}"><div class="social-icon social-icon--green icon__mail"><span class="far fa-envelope"></span></div></a>`;
});


////phone  number field////

const fillPhoneSelector = document.querySelector('#phone');

fillPhoneSelector.addEventListener('keyup', function (e) {
    const writer = e.currentTarget;

    li__phone.innerHTML = `<a href="tel:${writer.value}"><div class="social-icon social-icon--green icon__phone"><span class="fas fa-mobile-alt"></span></div></a>`;
});


///LinkedIn field////

const fillLinkedInSelector = document.querySelector('#linkedin');

fillLinkedInSelector.addEventListener('keyup', function (e) {
    const writer = e.currentTarget;

    li__linkedin.innerHTML = `<a href="https://www.linkedin.com/in/${writer.value}"><div class="social-icon social-icon--green icon__linkedin"><span class="fab fa-linkedin-in"></span></div></a>`;
});

////Github field///

const fillGithubSelector = document.querySelector('#github');

fillGithubSelector.addEventListener('keyup', function (e) {
    const writer = e.currentTarget;

    li__github.innerHTML = `<a href="https://github.com/${writer.value}"><div class="social-icon social-icon--green icon__github"><span class="fab fa-github-alt"></span></div></a>`;
});

const htmlCheckbox = document.querySelector('#skills-html');
const htmlLabel = document.querySelector('.skill_html');

const cssCheckbox = document.querySelector('#skills-css');
const cssLabel = document.querySelector('.skill_css');

const reactCheckbox = document.querySelector('#skills-react');
const reactLabel = document.querySelector('.skill_react');

function handleSkillsHtml() {
    htmlLabel.classList.toggle('hidden');
}

function handleSkillsCss() {
    cssLabel.classList.toggle('hidden');
}

function handleSkillsReact() {
    reactLabel.classList.toggle('hidden');
}

htmlCheckbox.addEventListener('click', handleSkillsHtml);

cssCheckbox.addEventListener('click', handleSkillsCss);

reactCheckbox.addEventListener('click', handleSkillsReact);

//Reset button

const buttonReset = document.querySelector('.preview__reset');
const formData = document.querySelector('.main__form');

function resetForm() {

    formData.reset();
    cardNameSelector.innerHTML = 'Nombre Apellido';
    cardOccupationSelector.innerHTML = 'Front-end developer';
    previewImage.style.backgroundImage = `url(https://placehold.it/200x200/ffcc00/0000ff/?text=TEXT)`;
    fakeCheckUploadImage.style.backgroundImage = ``;
    cardSelector.innerHTML = '';
    cardNameSelector.classList.add('preview__name--green');
    decoRectangleSelector.classList.add('preview__decoration-rectangle--green');
    for (let i = 0; i < socialIconSelector.length; i++) {
        socialIconSelector[i].classList.add('social-icon--green');
    }
    for (let i = 0; i < skillIconSelector.length; i++) {
        skillIconSelector[i].classList.add('skill--green');
    }
    cardNameSelector.classList.remove('preview__name--red', 'preview__name--grey');
    decoRectangleSelector.classList.remove('preview__decoration-rectangle--red', 'preview__decoration-rectangle--grey');
    for (let i = 0; i < socialIconSelector.length; i++) {
        socialIconSelector[i].classList.remove('social-icon--red', 'social-icon--grey');
    }
    for (let i = 0; i < skillIconSelector.length; i++) {
        skillIconSelector[i].classList.remove('skill--red', 'skill--grey');
    }
    cardTextSelector.classList.add('comic-sans');
    cardTextSelector.classList.remove('ubuntu', 'montserrat');
    htmlLabel.classList.add('hidden');
    cssLabel.classList.add('hidden');
    reactLabel.classList.add('hidden');

}

buttonReset.addEventListener('click', resetForm);

/* desplegable */

const buttonDrop = document.querySelectorAll('.dropdown');
const boxDesign = document.querySelector('.main__design--container');
const boxFill = document.querySelector('.main__fill--container');
const boxShare = document.querySelector('.main__share--container');

function dropDown(event) {
    const btnSelected = event.currentTarget;
    if (btnSelected.classList.contains('dropdown__design') === true) {
        boxDesign.classList.toggle('hidden');
    } else if (btnSelected.classList.contains('dropdown__fill') === true) {
        boxFill.classList.toggle('hidden');
    } else {
        boxShare.classList.toggle('hidden');
    }
}
for (let i = 0; i < buttonDrop.length; i++) {
    buttonDrop[i].addEventListener('click', dropDown);
}