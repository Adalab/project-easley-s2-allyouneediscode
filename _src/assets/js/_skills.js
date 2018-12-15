'use strict';

/*Este subrayado es porque ESlint considera que las strings van con comillas simples */
const jsonObject = {
    'palette': 0,
    'typography': 0,
    'name' : '',
    'job': '',
    'phone': '',
    'email': '',
    'linkedin': '',
    'github': '',
    'photo': '',
    'skills': []
};

//Llamamos al API con fetch y sus respectivas promesas

fetch('https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json')
    .then(response => response.json())
    .then(data => getSkills(data.skills));


//Pedimos toda la información de skills con un bucle for

function getSkills(skills){
    for (let i = 0; i < skills.length; i++){

        const skillsContainer = document.querySelector('.container--skills');

        skillsContainer.innerHTML += `<label for="skills-${skills[i]}" class="option-skills"><input class="option-button option-skills-button" id="skills-${skills[i]}" type="checkbox" value="${skills[i]}" name="skills-${skills[i]}"><p class="skills">${skills[i]}</p></label>`;
    }

    //Colocamos el addEventListener aquí para que la constante optionSelector no se genere vacía por la asincronía con la API

    const optionSelector = document.querySelectorAll('.option-skills-button');

    for (let i = 0; i<optionSelector.length; i++){
        optionSelector[i].addEventListener('change', jsonCheckedItem);
    }
}

const previewSkills = document.querySelector('.preview__skills-icons');

//Metemos las skills que se seleccionen en el jsonObject -o las quitamos-

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
