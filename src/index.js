import './scss/main.scss';
import { product } from './products.js';

//Injecting data from products.js to make product data reusable on main card and side menu

const productCards = document.querySelectorAll('.product-card-data');

productCards.forEach(card => {
    const productHeading = card.querySelector('.product-heading-data');
    const productImg = card.querySelector('.product-img-data');
    const productPrice = card.querySelector('.product-price-data');

    productHeading.textContent = product.name;
    productImg.src = product.image;
    productImg.alt = product.alt;
    productPrice.textContent = `${product.currency}${product.price.toFixed(2)}`;
});

//Slide out menu 

const openMenu = document.getElementById('openMenu');
const slideMenu = document.getElementById('slideMenu');
const closeMenu = document.getElementById('closeMenu');
const overlay = document.getElementById('overlay');
const loadingIcon = document.getElementById('loadingIcon');
const addToBagBtn = document.querySelectorAll('.addToBagBtn');
const disableScroll = document.querySelector('.home');


// Open product menu

function openProductMenu() {
    //Initiate loading icon
    loadingIcon.classList.add('active');
    //Animate bag
    openMenu.classList.add('active');
    //Set loading icon 1 second delay
    setTimeout(() => {
        //Remove the loading icon
        loadingIcon.classList.remove('active');
        //Slide menu and overlay appear
        slideMenu.classList.add('active');
        overlay.classList.add('active');
    }, 1000);
}

//Triggers 

openMenu.addEventListener('click', openProductMenu);

//All buttons

addToBagBtn.forEach(btn => {
    btn.addEventListener('click', openProductMenu);
});

//Function close product menu after 1 second to see cross animation

function closeProductMenu() {
    closeMenu.classList.add('active');
    setTimeout(() => {
        slideMenu.classList.remove('active');
        overlay.classList.remove('active');
        openMenu.classList.remove('active');
        //Remove close class animation 
        closeMenu.classList.remove('active');
    }, 500);
}

//Triggers

closeMenu.addEventListener('click', closeProductMenu);

overlay.addEventListener('click', closeProductMenu);

