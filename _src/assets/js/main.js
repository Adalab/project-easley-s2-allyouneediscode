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


////////////Here goes imagen de perfil//////////

const fakeUploadImage = document.querySelector('.fake__upload-image');
const uploadImage = document.querySelector('.upload-image');
const fakeCheckUploadImage = document.querySelector ('.fake__check-upload-image');
const previewImage = document.querySelector('.preview__image');
const fr = new FileReader();

//FakeUploadImage activa UploadImage
const uploadClick = () => {
    uploadImage.click();
}

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
}


////////Social icons /////////////

         ////email field////

const fillEmailSelector = document.querySelector('#email');
const cardSelector = document.querySelector('.preview__social-icons');

fillEmailSelector.addEventListener('keyup', function(e){
    const writer = e.currentTarget;

    cardSelector.innerHTML = `<a href="mailto:${writer.value}"><li class="social-icon icon__mail"><span class="far fa-envelope"></span></li></a>`;    
});


    ////phone  number field////

const fillPhoneSelector = document.querySelector('#phone');

fillPhoneSelector.addEventListener('keyup', function(e){
    const writer = e.currentTarget;

    cardSelector.innerHTML = `<a href="tel:${writer.value}"><li class="social-icon icon__phone"><span class="fas fa-mobile-alt"></span></li></a>`;    
});


   ///LinkedIn field////

const fillLinkedInSelector = document.querySelector('#linkedin');

fillLinkedInSelector.addEventListener('keyup', function(e){
    const writer = e.currentTarget; 

    cardSelector.innerHTML = `<a href="https://www.linkedin.com/in/${writer.value}"><li class="social-icon icon__linkedin"><span class="fab fa-linkedin-in"></span></li></a>`; 
});


     ////Github field///

const fillGithubSelector = document.querySelector('#github');

fillGithubSelector.addEventListener('keyup', function(e){
    const writer = e.currentTarget;

    cardSelector.innerHTML = `<a href="https://github.com/${writer.value}"><li class="social-icon icon__github"><span class="fab fa-github-alt"></span></li></a>`;   
});

const htmlCheckbox = document.querySelector('#skills-html');
const htmlLabel = document.querySelector('.skill_html');

const cssCheckbox = document.querySelector('#skills-css');
const cssLabel = document.querySelector('.skill_css');

const reactCheckbox = document.querySelector('#skills-react');
const reactLabel = document.querySelector('.skill_react');

function handleSkillsHtml () {
    htmlLabel.classList.toggle('hidden');
};

function handleSkillsCss () {
    cssLabel.classList.toggle('hidden');
};

function handleSkillsReact () {
    reactLabel.classList.toggle('hidden');
};

htmlCheckbox.addEventListener('click',handleSkillsHtml);

cssCheckbox.addEventListener('click',handleSkillsCss);

reactCheckbox.addEventListener('click',handleSkillsReact);

/* desplegable */

const buttonDrop = document.querySelector('.dropdown__design');

buttonDrop.addEventListener('click', () => buttonDrop.classList.toggle('.hidden'));