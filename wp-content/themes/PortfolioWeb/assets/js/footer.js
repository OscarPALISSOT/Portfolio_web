window.onload = function (){
    const links = document.getElementsByClassName('footerCol')[1].getElementsByTagName('ul')[0].getElementsByTagName('a');
    for(let i = 0; i < links.length; i++){
        const afterElement = document.createElement('span');
        const texteElement = links[i].textContent;
        afterElement.style.content = "'" + texteElement + "'";
        links[i].appendChild(afterElement);
    }

}