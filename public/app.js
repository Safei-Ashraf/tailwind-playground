const burger = document.querySelector('#burger-menu');
const menu = document.querySelector('#menu');

burger.addEventListener('click',()=>{
    menu.classList.toggle('hidden');
});