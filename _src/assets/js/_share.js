'use strict';

/*Share functionality*/

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
