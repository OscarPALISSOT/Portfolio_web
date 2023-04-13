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

    const socialLinks = document.getElementsByClassName('social__link');
    for (let i=0; i<socialLinks.length; i++){
        let link = socialLinks[i];
        let x = link.offsetLeft + link.offsetWidth/2;
        let y = link.offsetTop - link.offsetHeight/2;
        link.addEventListener('mousemove', function (e){
            let xCor = e.clientX - x
            let yCor = e.screenY - y;
            if (Math.abs(xCor) > 50 || Math.abs(yCor) > 50){
                let moveX = - xCor + link.offsetWidth/2;
                let moveY = - yCor - link.offsetHeight/2;
                console.log(moveX, moveY);
                link.style.transform = 'translate(' + moveX + 'px, ' + moveY + 'px)'
            }else{
                link.style.transform = 'translate(' + xCor + 'px, ' + yCor + 'px)';
            }

        })
    }

}