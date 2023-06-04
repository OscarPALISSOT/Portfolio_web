document.addEventListener("DOMContentLoaded", function(event) {

    // motion effect
    const socialLinks = document.getElementsByClassName('social__link');
    const motionZone = {
        x: 100,
        y:40
    }
    for (let i=0; i<socialLinks.length; i++){
        let link = socialLinks[i];
        let x = link.offsetLeft + link.offsetWidth/2;
        let y = link.offsetTop + link.offsetHeight/2
        link.addEventListener('mousemove', function (e){
            let xCor = e.pageX - x;
            let yCor = e.pageY - y;
            if (Math.abs(xCor) > motionZone.x || Math.abs(yCor) > motionZone.y){
                link.style.transform = 'none'
            }else{
                link.style.transform = 'translate(' + xCor + 'px, ' + yCor + 'px)';
            }

        })
    }

});

