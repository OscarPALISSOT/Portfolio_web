document.addEventListener("DOMContentLoaded", function(event) {

    // hamburger menu
    const hamburgerToggle = document.querySelector('.hamburger__toggle');
    const menu = document.querySelector('.nav_menu');

    hamburgerToggle.addEventListener('click', function (){
        menu.classList.toggle('nav_menu__expanded');
        hamburgerToggle.classList.toggle('hamburger__toggle__expanded');
        document.body.classList.toggle('noScroll');
    })


    // wrap letters in span
    const links = menu.querySelectorAll('a');
    links.forEach(link => {
        const text = link.textContent;
        const letters = text.split('');
        const wrappedLetters = letters.map(letter => `<span>${letter}</span>`);
        link.innerHTML = wrappedLetters.join('');
    });

    //border on scroll
    const header = document.querySelector('.header__border');

    window.addEventListener('scroll', function(){
        if(window.scrollY > 0){
            header.classList.add('header__border__active');
        } else {
            header.classList.remove('header__border__active');
        }
    });

});