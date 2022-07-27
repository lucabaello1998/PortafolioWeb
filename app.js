const dark = document.querySelector('.dark-btn');
const white_sections= document.querySelectorAll('.section-content');
const color_sections= document.querySelectorAll('.section-content-color');
const grey_sections= document.querySelectorAll('.section-content-grey');
const nav= document.querySelector('.nav-header');
const menu= document.querySelectorAll('.menu-nav');
const moon= document.querySelector('#moon');
const burguer= document.querySelector('.burguer');
const headers= document.querySelectorAll('.head');
const number= document.querySelector('.number');

function boton_dark_toggle(){
    moon.classList.toggle("dark-mode-btn");
}

function nav_toogle(){
    nav.classList.toggle("dark")
    for(let i=0; i<menu.length; i++){
        menu[i].classList.toggle("darkmn");
    }
}

function sections_toogle(){
    for(let i=0; i<white_sections.length; i++){
        white_sections[i].classList.toggle("dark");
    }
    for(let i=0; i<grey_sections.length; i++){
        grey_sections[i].classList.toggle("dark");
    }
    number.classList.toggle("number-black");
}

function headers_toogle(){
    for(let i=0; i<headers.length; i++){
        headers[i].classList.toggle("black_head");
    }
}


function dark_general(){
    boton_dark_toggle()
    nav_toogle()
    sections_toogle()
    headers_toogle()
}

dark.addEventListener('click', dark_general);