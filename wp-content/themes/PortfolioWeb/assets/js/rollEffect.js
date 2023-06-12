document.addEventListener("DOMContentLoaded", function(event) {

    // roll effect
    let rollElements = document.querySelectorAll('.roll__effect');

    for (let i=0; i<rollElements.length; i++){
        let rollElement = rollElements[i].children[0];
        let text = rollElement.innerHTML;
        let after = document.createElement('span');
        after.classList.add('afterRollElements');
        after.innerHTML = text;
        rollElement.appendChild(after);
    }


});