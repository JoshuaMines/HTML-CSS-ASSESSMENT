console.log('werwareaswraerwa')

function faveColor(evt) {
    evt.preventDefault();

    alert('MY FAVORITE COLOR IS RED!!!');
}

function favePlace(evt){
    evt.preventDefault();

    alert('MY FAVORITE PLACE IS PHILLI!!!')
}

function faverituals(evt){
    evt.preventDefault();

    alert('SUMMER SOLISTICE IS MY FAVORITE RITUAL!!!')
}

let colors = document.querySelector('button#color');
let places = document.querySelector('button#place');
let rituals = document.querySelector('button#ritual');

colors.addEventListener('click', faveColor);
places.addEventListener('click', favePlace);
rituals.addEventListener('click', faverituals);