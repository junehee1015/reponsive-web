'use strict'
const container = document.querySelector('.container');
const div = document.querySelector('header div');
const ham = document.querySelector('header .fa-align-justify');
const menu = document.querySelector('header ul');

ham.addEventListener('click', () => {
    menu.classList.toggle('menu');
});
container.addEventListener('click', () => {
    menu.classList.remove('menu');
});
div.addEventListener('click', () => {
    menu.classList.remove('menu');
});