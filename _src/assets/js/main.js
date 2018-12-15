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

//Guión:

//Llamamos al API con fetch y sus respectivas promesas

fetch('https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json')
    .then(response => response.json())
    .then(data => getSkills(data.skills));


//Pedimos toda la información de skills
//Creamos el contenido desde JS con un bucle for


function getSkills(skills){
    for (let i = 0; i < skills.length; i++){

        const skillsContainer = document.querySelector('.container--skills');

        skillsContainer.innerHTML += `<label for="skills-${skills[i]}" class="option-skills"><input class="option-button option-skills-button" id="skills-${skills[i]}" type="checkbox" value="${skills[i]}" name="skills-${skills[i]}"><p class="skills">${skills[i]}</p></label>`;
    }

    //colocamos el addEventListener aquí para que la constante optionSelector no se genere vacía por la asincronía con la API
    const optionSelector = document.querySelectorAll('.option-skills-button');

    for (let i = 0; i<optionSelector.length; i++){
        optionSelector[i].addEventListener('change', jsonCheckedItem);
    }
}

const previewSkills = document.querySelector('.preview__skills-icons');
//metemos las skills que se seleccionen en el jsonObject -o las quitamos-
function jsonCheckedItem(event) {
    let previewList = document.createElement('li');
    previewList.className = `skill skill_${this.value}`;
    let previewElement = document.createTextNode(`${this.value}`);
    previewList.appendChild(previewElement);

    //Hay que crear un selector específico por clase para poder quitar la lista correspondiente en el "else", aunque previewList existe en el DOM no la acepta como "hija"
    let previewChildElement = document.querySelector(`.skill_${this.value}`);

    if(jsonObject.skills.length < 3 && event.target.checked === true) {
        console.log('ramiro');
        previewSkills.appendChild(previewList);

        jsonObject.skills.push(event.target.value);

    } else {
        console.log('paco');

        event.target.checked = false;
        if(previewChildElement){
            previewSkills.removeChild(previewChildElement);

            jsonObject.skills.splice(jsonObject.skills.indexOf(event.target.value), 1);
        }
    }

    console.log(jsonObject.skills);
    console.log(previewSkills);
}



// When 'click'-ing checkbox, add the class corresponding to the selected palette and remove others

function choosePalette() {

    if ((this.value) === 'green-palette') {
        cardNameSelector.classList.add('preview__name--green');
        decoRectangleSelector.classList.add('preview__decoration-rectangle--green');
      
        localStorage.setItem('palette', '1');
        jsonObject.palette = 1;

        for (let i = 0; i < socialIconSelector.length; i++) {
            socialIconSelector[i].classList.add('social-icon--green');
        }

        for (let i = 0; i < skillIconSelector.length; i++) {
            skillIconSelector[i].classList.add('skill--green');
        }

        const skillContainer = document.querySelector('.preview__skills-icons');
        skillContainer.classList.add('icons__container--green');
        skillContainer.classList.remove('icons__container--red');
        skillContainer.classList.remove('icons__container--grey');

        cardNameSelector.classList.remove('preview__name--red', 'preview__name--grey');
        decoRectangleSelector.classList.remove('preview__decoration-rectangle--red', 'preview__decoration-rectangle--grey');
        for (let i = 0; i < socialIconSelector.length; i++) {
            socialIconSelector[i].classList.remove('social-icon--red', 'social-icon--grey');
        }
    }

    else if ((this.value) === 'red-palette') {
        cardNameSelector.classList.add('preview__name--red');
        decoRectangleSelector.classList.add('preview__decoration-rectangle--red');

        localStorage.setItem('palette', '2');
        jsonObject.palette = 2;

        for (let i = 0; i < socialIconSelector.length; i++) {
            socialIconSelector[i].classList.add('social-icon--red');
        }
        for (let i = 0; i < skillIconSelector.length; i++) {
            skillIconSelector[i].classList.add('skill--red');
        }

        const skillContainer = document.querySelector('.preview__skills-icons');
        skillContainer.classList.add('icons__container--red');
        skillContainer.classList.remove('icons__container--green');
        skillContainer.classList.remove('icons__container--grey');

        cardNameSelector.classList.remove('preview__name--green', 'preview__name--grey');
        decoRectangleSelector.classList.remove('preview__decoration-rectangle--green', 'preview__decoration-rectangle--grey');
        for (let i = 0; i < socialIconSelector.length; i++) {
            socialIconSelector[i].classList.remove('social-icon--green', 'social-icon--grey');
        }
    }

    else if ((this.value) === 'grey-palette') {
        cardNameSelector.classList.add('preview__name--grey');
        decoRectangleSelector.classList.add('preview__decoration-rectangle--grey');

        localStorage.setItem('palette', '3');
        jsonObject.palette = 3;

        for (let i = 0; i < socialIconSelector.length; i++) {
            socialIconSelector[i].classList.add('social-icon--grey');
        }
        for (let i = 0; i < skillIconSelector.length; i++) {
            skillIconSelector[i].classList.add('skill--grey');
        }

        const skillContainer = document.querySelector('.preview__skills-icons');
        skillContainer.classList.add('icons__container--grey');
        skillContainer.classList.remove('icons__container--green');
        skillContainer.classList.remove('icons__container--red');

        cardNameSelector.classList.remove('preview__name--green', 'preview__name--red');
        decoRectangleSelector.classList.remove('preview__decoration-rectangle--green', 'preview__decoration-rectangle--red');
        for (let i = 0; i < socialIconSelector.length; i++) {
            socialIconSelector[i].classList.remove('social-icon--green', 'social-icon--red');
        }
    }
}

checkboxPaletteGreen.addEventListener('click', choosePalette);
checkboxPaletteRed.addEventListener('click', choosePalette);
checkboxPaletteGrey.addEventListener('click', choosePalette);


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



/* fill section functionality */

// name field

const fillNameSelector = document.querySelector('#full-name');


fillNameSelector.addEventListener('keyup', function(e) {
    const writer = e.currentTarget;

    localStorage.setItem('name', writer.value);

    cardNameSelector.innerHTML = writer.value;

    jsonObject.name = writer.value;
});

// occupation field

const fillOccupationSelector = document.querySelector('#occupation');

fillOccupationSelector.addEventListener('keyup', function(e) {
    const writer = e.currentTarget;

    localStorage.setItem('ocuppation', writer.value);

    cardOccupationSelector.innerHTML = writer.value;
    jsonObject.job = writer.value;
});


// profile image field

const fakeUploadImage = document.querySelector('.fake__upload-image');
const uploadImage = document.querySelector('.upload-image');
const fakeCheckUploadImage = document.querySelector('.fake__check-upload-image');
const previewImage = document.querySelector('.preview__image');
const fr = new FileReader();

//fakeUploadImage activates UploadImage
const uploadClick = () => {
    uploadImage.click();
};

//clicking fakeUploadImage event listener
fakeUploadImage.addEventListener('click', uploadClick);


//UploadImage is drawn on previewImage
const writeImage = () => {
    previewImage.style.backgroundImage = `url(${fr.result})`;
    fakeCheckUploadImage.style.backgroundImage = `url(${fr.result})`;
    jsonObject.photo = fr.result;
};

//obtaining the image via fakeCheckUploadImage
function getImage(event) {
    const myFile = event.currentTarget.files[0];

    fr.addEventListener('load', writeImage);
    fr.readAsDataURL(myFile);

}

//Upload complete event listener
uploadImage.addEventListener('change', getImage);


//UploadImage is drawn on previewImage
const writeImage = () => {
    previewImage.style.backgroundImage = `url(${fr.result})`;
    fakeCheckUploadImage.style.backgroundImage = `url(${fr.result})`;
    localStorage.setItem('image', JSON.stringify(fr.result));
};


/* Social icons */

// email field

const fillEmailSelector = document.querySelector('#email');
const cardSelector = document.querySelector('.preview__social-icons');
const liEmail = document.querySelector('.li__email');
const liPhone = document.querySelector('.li__phone');
const liLinkedin = document.querySelector('.li__linkedin');
const liGithub = document.querySelector('.li__github');

fillEmailSelector.addEventListener('keyup', function(e) {
    const writer = e.currentTarget;

    localStorage.setItem('email', writer.value);

    liEmail.innerHTML = `<a href="mailto:${writer.value}"><div class="social-icon social-icon--green icon__mail"><span class="far fa-envelope"></span></div></a>`;
    jsonObject.email = writer.value;
});


//phone number field

const fillPhoneSelector = document.querySelector('#phone');

fillPhoneSelector.addEventListener('keyup', function(e) {
    const writer = e.currentTarget;

    localStorage.setItem('phone', writer.value);

    liPhone.innerHTML = `<a href="tel:${writer.value}"><div class="social-icon social-icon--green icon__phone"><span class="fas fa-mobile-alt"></span></div></a>`;
    jsonObject.phone = writer.value;
});


//LinkedIn field

const fillLinkedInSelector = document.querySelector('#linkedin');

fillLinkedInSelector.addEventListener('keyup', function(e) {
    const writer = e.currentTarget;

    localStorage.setItem('linkedin', writer.value);

    liLinkedin.innerHTML = `<a href="https://www.linkedin.com/in/${writer.value}"><div class="social-icon social-icon--green icon__linkedin"><span class="fab fa-linkedin-in"></span></div></a>`;
    jsonObject.linkedin = writer.value;
});

//Github field

const fillGithubSelector = document.querySelector('#github');

fillGithubSelector.addEventListener('keyup', function(e) {
    const writer = e.currentTarget;

    localStorage.setItem('github', writer.value);

    liGithub.innerHTML = `<a href="https://github.com/${writer.value}"><div class="social-icon social-icon--green icon__github"><span class="fab fa-github-alt"></span></div></a>`;
    jsonObject.github = writer.value;
});


//         function handleSkillsHtml() {

//             const htmlLabel = document.querySelector('.skill_html');
//             htmlLabel.classList.toggle('hidden');

function handleSkillsHtml() {
    htmlLabel.classList.toggle('hidden');
    if (htmlLabel.classList.contains('hidden')) {
        localStorage.setItem('html', false);
    } else {
        localStorage.setItem('html', true);
    }
}

function handleSkillsCss() {
    cssLabel.classList.toggle('hidden');
    if (cssLabel.classList.contains('hidden')) {
        localStorage.setItem('css', false);
    } else {
        localStorage.setItem('css', true);
    }
}

function handleSkillsReact() {
    reactLabel.classList.toggle('hidden');
    if (reactLabel.classList.contains('hidden')) {
        localStorage.setItem('react', false);
    } else {
        localStorage.setItem('react', true);
    }
}



cssCheckbox.addEventListener('click', handleSkillsCss);


/* Reset button */

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

/* dropdown */

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


/* Local Storage */

//////Share functionality/////


const shareButton = document.querySelector('.main__share--create');
const responseURL = document.querySelector('.main__share--generated-link');

shareButton.addEventListener('click', sendRequest);



function sendRequest(){
    fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
        method: 'POST',
        body: JSON.stringify(jsonObject),
        headers: {
            'content-type': 'application/json'
        },
    })
        .then(function(resp) { return resp.json(); })
        .then(function(result) {
            if(result.success === true){
                responseURL.href = result.cardURL;
                responseURL.innerHTML = result.cardURL;
                console.log('funciona');
            } else {
                responseURL.innerHTML = 'ERROR: ' + result.error;
            }
        });
}

