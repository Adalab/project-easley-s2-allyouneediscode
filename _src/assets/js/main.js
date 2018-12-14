'use strict';

/* design section funtionality */

// Variables
const cardTextSelector = document.querySelector('.preview__texts');
const cardNameSelector = document.querySelector('.preview__name');
const cardOccupationSelector = document.querySelector('.preview__occupation');

const decoRectangleSelector = document.querySelector('.preview__decoration-rectangle');
const socialIconSelector = document.querySelectorAll('.social-icon');
const skillIconSelector = document.querySelectorAll('.skill');

const checkboxPaletteGreen = document.querySelector('#color-green');
const checkboxPaletteRed = document.querySelector('#color-red');
const checkboxPaletteGrey = document.querySelector('#color-grey');

const checkboxUbuntuSelector = document.querySelector('#font-ubuntu');
const checkboxComicSansSelector = document.querySelector('#font-comic-sans');
const checkboxMontserratSelector = document.querySelector('#font-montserrat');

const containerSkills = document.querySelector('.container--skills');

const jsonObject = {
    "palette": 0,
    "typography": 0,
    "name" : "",
    "job": "",
    "phone": "",
    "email": "",
    "linkedin": "",
    "github": "",
    "photo": "",
    "skills": []
};

// //         function handleSkillsHtml() {

// //             const htmlLabel = document.querySelector('.skill_html');
// //             htmlLabel.classList.toggle('hidden');

// function handleSkillsHtml() {
//     htmlLabel.classList.toggle('hidden');
//     if (htmlLabel.classList.contains('hidden')) {
//         localStorage.setItem('html', false);
//     } else {
//         localStorage.setItem('html', true);
//     }
// }

// function handleSkillsCss() {
//     cssLabel.classList.toggle('hidden');
//     if (cssLabel.classList.contains('hidden')) {
//         localStorage.setItem('css', false);
//     } else {
//         localStorage.setItem('css', true);
//     }
// }

// function handleSkillsReact() {
//     reactLabel.classList.toggle('hidden');
//     if (reactLabel.classList.contains('hidden')) {
//         localStorage.setItem('react', false);
//     } else {
//         localStorage.setItem('react', true);
//     }
// }

