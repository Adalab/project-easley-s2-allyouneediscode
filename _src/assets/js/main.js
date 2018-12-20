'use strict';

/* design section funtionality */

// Variables
const cardTextSelector = document.querySelector('.preview__texts');
const cardNameSelector = document.querySelector('.preview__name');
const cardOccupationSelector = document.querySelector('.preview__occupation');
const fillNameSelector = document.querySelector('#full-name');
const fillOccupationSelector = document.querySelector('#occupation');

const decoRectangleSelector = document.querySelector('.preview__decoration-rectangle');
const socialIconSelector = document.querySelectorAll('.social-icon');
const skillIconSelector = document.querySelectorAll('.skill');
const previewSkills = document.querySelector('.preview__skills-icons');

const checkboxPaletteGreen = document.querySelector('#color-green');
const checkboxPaletteRed = document.querySelector('#color-red');
const checkboxPaletteGrey = document.querySelector('#color-grey');

const checkboxUbuntuSelector = document.querySelector('#font-ubuntu');
const checkboxComicSansSelector = document.querySelector('#font-comic-sans');
const checkboxMontserratSelector = document.querySelector('#font-montserrat');

const fakeUploadImage = document.querySelector('.fake__upload-image');
const uploadImage = document.querySelector('.upload-image');
const fakeCheckUploadImage = document.querySelector('.fake__check-upload-image');
const previewImage = document.querySelector('.preview__image');
const fr = new FileReader();

const fillEmailSelector = document.querySelector('#email');
const fillPhoneSelector = document.querySelector('#phone');
const cardSelector = document.querySelector('.preview__social-icons');
const fillLinkedInSelector = document.querySelector('#linkedin');
const fillGithubSelector = document.querySelector('#github');

const liEmail = document.querySelector('.li__email');
const liPhone = document.querySelector('.li__phone');
const liLinkedin = document.querySelector('.li__linkedin');
const liGithub = document.querySelector('.li__github');

const buttonReset = document.querySelector('.preview__reset');
const formData = document.querySelector('.main__form');
const shareButton = document.querySelector('.main__share--create');
const responseURL = document.querySelector('.main__share--generated-link');
const buttonDrop = document.querySelectorAll('.dropdown');

const boxDesign = document.querySelector('.main__design--container');
const boxFill = document.querySelector('.main__fill--container');
const boxShare = document.querySelector('.main__share--container');
const boxTwitter = document.querySelector('.main__share--generated');

const containerSkills = document.querySelector('.container--skills');
const skillContainer = document.querySelector('.preview__skills-icons');
const socialIconsContainer = document.querySelector('.preview__social-icons');

const jsonObject = {
    'palette': 1,
    'typography': 2,
    'name' : '',
    'job': '',
    'phone': '',
    'email': '',
    'linkedin': '',
    'github': '',
    'photo': '',
    'skills': []
};
