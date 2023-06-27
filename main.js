console.log("ds")
const menuButton = document.querySelectorAll('.menu-trigger');
const menu = document.getElementById('menuside');
const menuclose = document.querySelector(".menuclose")
const navactive = document.querySelector(".sticky-header-active")
menuButton.forEach((e) =>{
  e.addEventListener('click', function() {
    menu.classList.toggle('show');
  });
})
menuclose.addEventListener('click', function() {
  menu.classList.remove('show');
});
window.addEventListener('scroll', function(){
    if(scrollY >= 140){
        navactive.classList.add("navactivee")
    }else{
        navactive.classList.remove("navactivee")
    }
})
const prevArrow = document.querySelector('.arrow.prev');
const nextArrow = document.querySelector('.arrow.next');
const slides = document.querySelectorAll('.slide');

let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

prevArrow.addEventListener('click', () => {
  showSlide(currentSlide - 1);
});

nextArrow.addEventListener('click', () => {
  showSlide(currentSlide + 1);
});

showSlide(currentSlide);