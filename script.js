let navbar = document.querySelector('.navbar')
let menubtn = document.getElementById("menu-btn");

menubtn.addEventListener('click', function(){
    navbar.classList.toggle('active')
    cartItem.classList.remove('active')
    searchform.classList.remove('active')
});


let cartItem = document.querySelector('.cart-items-container')
let cartBtn = document.getElementById("cart-btn");

cartBtn.addEventListener('click', function(){
    cartItem.classList.toggle('active')
    navbar.classList.remove('active')
    searchform.classList.remove('active')
});


let searchform = document.querySelector('.search-form')
let searchBtn= document.getElementById("search-btn");

searchBtn.addEventListener('click', function(){
    searchform.classList.toggle('active')
    navbar.classList.remove('active')
    cartItem.classList.remove('active')
});


window.onscroll = ()=>{
    navbar.classList.remove('active')
    cartItem.classList.remove('active')
    searchform.classList.remove('active')
}