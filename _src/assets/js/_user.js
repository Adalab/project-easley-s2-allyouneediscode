'use strict';

// name field
fillNameSelector.addEventListener('keyup', function(e) {
    const writer = e.currentTarget;
    localStorage.setItem('name', writer.value);
    cardNameSelector.innerHTML = writer.value;
    jsonObject.name = writer.value;
});

// occupation field
fillOccupationSelector.addEventListener('keyup', function(e) {
    const writer = e.currentTarget;
    localStorage.setItem('ocuppation', writer.value);
    cardOccupationSelector.innerHTML = writer.value;
    jsonObject.job = writer.value;
});

/*profile image field*/

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
    localStorage.setItem('image', JSON.stringify(fr.result));
};

//obtaining the image via fakeCheckUploadImage
function getImage(event) {
    const myFile = event.currentTarget.files[0];
    fr.addEventListener('load', writeImage);
    fr.readAsDataURL(myFile);
}

//Upload complete event listener
uploadImage.addEventListener('change', getImage);

/* Social icons */

// email field
fillEmailSelector.addEventListener('keyup', function(e) {
    const writer = e.currentTarget;
    if(writer.value === '') {
        liEmail.innerHTML = '';
        liEmail.classList.add('hidden');
    } else {
        liEmail.innerHTML = `<a class="socialicons-style" href="mailto:${writer.value}"><span class="far fa-envelope"></span></a>`;
        liEmail.classList.remove('hidden');
    }

    localStorage.setItem('email', writer.value);
    jsonObject.email = writer.value;
});

//phone number field
fillPhoneSelector.addEventListener('keyup', function(e) {
    const writer = e.currentTarget;
    if(writer.value === '') {
        liPhone.innerHTML = '';
        liPhone.classList.add('hidden');
    } else {
        liPhone.innerHTML = `<a class="socialicons-style" href="tel:${writer.value}"><span class="fas fa-mobile-alt"></span></a>`;
        liPhone.classList.remove('hidden');
    }
    localStorage.setItem('phone', writer.value);
    jsonObject.phone = writer.value;
});


//LinkedIn field
fillLinkedInSelector.addEventListener('keyup', function(e) {
    const writer = e.currentTarget;
    if(writer.value === '') {
        liLinkedin.innerHTML = '';
        liLinkedin.classList.add('hidden');
    } else {
        liLinkedin.innerHTML = `<a class="socialicons-style" href="https://www.linkedin.com/in/${writer.value}"><span class="fab fa-linkedin-in"></span></a>`;
        liLinkedin.classList.remove('hidden');
    }

    localStorage.setItem('linkedin', writer.value);
    jsonObject.linkedin = writer.value;
});

//Github field
fillGithubSelector.addEventListener('keyup', function(e) {
    const writer = e.currentTarget;
    if(writer.value === '') {
        liGithub.innerHTML = '';
        liGithub.classList.add('hidden');
    } else {
        liGithub.innerHTML = `<a class="socialicons-style" href="https://github.com/${writer.value}"><span class="fab fa-github-alt"></span></a>`;
        liGithub.classList.remove('hidden');
    }

    localStorage.setItem('github', writer.value);
    jsonObject.github = writer.value;
});
