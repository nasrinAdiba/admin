let popup = document.querySelector(".window");
let flash = document.querySelector(".open-window");
let close = document.querySelector(".close-window");

flash.onclick = function() {
    popup.style.display = "block";
}

close.onclick = function() {
    popup.style.display = "none";
}

const navSlide = () => {
    const Burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-link');


    Burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });

}

navSlide();