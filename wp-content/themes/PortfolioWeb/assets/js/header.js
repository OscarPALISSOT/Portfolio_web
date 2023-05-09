document.addEventListener("DOMContentLoaded", function(event) {

    // hamburger menu
    const hamburgerToggle = document.querySelector('.hamburger__toggle');
    const menu = document.querySelector('.nav_menu');

    hamburgerToggle.addEventListener('click', function (){
        menu.classList.toggle('nav_menu__expanded');
        document.body.classList.toggle('noScroll');
    })

});