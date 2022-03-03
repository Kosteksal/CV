const nav = document.querySelector('.nav');
const navList = document.querySelector('.nav__list');
const hamburger = document.querySelector('.hamburger');
const link = document.querySelectorAll('.nav__item');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');

hamburger.addEventListener('click', opener);

function opener () {
    nav.classList.toggle('open');
    navList.classList.toggle('open');
    line1.classList.toggle('open');
    line2.classList.toggle('open');
    line3.classList.toggle('open');
};

link.forEach( i => i.addEventListener('click', closeLink));

function closeLink () {
    nav.classList.remove('open');
    navList.classList.remove('open');
    line1.classList.remove('open');
    line2.classList.remove('open');
    line3.classList.remove('open');
}


