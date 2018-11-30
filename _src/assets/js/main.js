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


////////////Here should go imagen de perfil//////////

//////////email field/////////////

const fillEmailSelector = document.querySelector('#email');
const cardEmailSelector = document.querySelector('.icon__mail');

fillEmailSelector.addEventListener('keyup', function(e){
    const writer = e.currentTarget;

    // cardEmailSelector.innerHTML = writer.value;   Lo estamos buscando////
});



/////////////phone  number field////////

const fillPhoneSelector = document.querySelector('#phone');
const cardPhoneSelector = document.querySelector('.icon__phone');

fillPhoneSelector.addEventListener('keyup', function(e){
    const writer = e.currentTarget;

    // cardPhoneSelector.innerHTML = writer.value;   Lo estamos buscando////
});


/////////LinkedIn field////////

const fillLinkedInSelector = document.querySelector('#linkedin');
const cardLinkedInSelector = document.querySelector('.icon__linkedin');

fillLinkedInSelector.addEventListener('keyup', function(e){
    const writer = e.currentTarget;

    // cardLinkedInSelector.innerHTML = writer.value;   Lo estamos buscando////
});


//////////Github field//////


const fillGithubSelector = document.querySelector('#github');
const cardGithubSelector = document.querySelector('.icon__github');

fillGithubSelector.addEventListener('keyup', function(e){
    const writer = e.currentTarget;

    cardGithubSelector.innerHTML = `<span class="i fab fa-github-alt"><a href="${writer.value}"></a></span>`;   
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