window.onload = function (){
    const links = document.getElementsByClassName('footerCol')[1].getElementsByTagName('ul')[0].getElementsByTagName('a');
    for (let i=0; i<links.length; i++){
        let link = links[i];
        let text = link.innerHTML;
        let after = document.createElement('span');
        after.classList.add('afterLinks');
        after.innerHTML = text;
        link.appendChild(after);
    }

}