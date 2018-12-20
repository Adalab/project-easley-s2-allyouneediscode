'use strict';

//Share functionality
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
            //Twitter//

            const twitterShare = document.querySelector('.main__share--generated-twitter');

            function shareOnTwitter(){
                twitterShare.href = 'https://twitter.com/share?url=' + result.cardURL+'&text='+'¡Ey! Mira que tarjeta más molona acabo de hacer con Javascript ' + '&hashtags='+'JavaScript, Adalab';
            }

            twitterShare.addEventListener('click', shareOnTwitter);
        });
}
