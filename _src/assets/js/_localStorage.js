'use strict';

/* Local Storage */

//Get info from local storage to put in the DOM
if (localStorage.getItem('palette')) {
    jsonObject.palette = JSON.parse(localStorage.getItem('palette'));
}
