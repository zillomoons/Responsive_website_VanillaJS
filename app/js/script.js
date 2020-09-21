const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function() {
    console.log('open hamburger');
    
    if(header.classList.contains('open')){
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeElems.forEach(function(elem){
            elem.classList.remove('fade-in');
            elem.classList.add('fade-out');
        })
    }
    else{ // open hamburger
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElems.forEach(function(elem){
            elem.classList.remove('fade-out');
            elem.classList.add('fade-in');
        })
    }
})