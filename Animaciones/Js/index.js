'use strict';

let marker = document.querySelector('#marker');
let list = document.querySelectorAll('.ul .li');

function moveIndicator(e) {
    marker.style.left = e.offsetLeft + 'px';
    marker.style.width = e.offsetWidth + 'px';
}

list.forEach(link => {
    link.addEventListener('mousemove', (e) => {
        moveIndicator(e.target);
    })
})

//active

function activeLink() {
    list.forEach((item) =>
        item.classList.remove('active'));
    this.classList.add('active');
}

list.forEach((item) =>
    item.addEventListener('mouseover', activeLink));


let more = document.querySelectorAll('.more');
for (let i = 0; i < more.length; i++) {
    more[i].addEventListener('click', function() {
        more[i].parentNode.classList.toggle('activeCard')
    })
}