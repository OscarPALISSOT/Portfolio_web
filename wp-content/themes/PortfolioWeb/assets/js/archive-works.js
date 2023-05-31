addEventListener("load", function(event) {

    // size of first__work__item and last__work__item, same size as the others items

    const firstWorkItem = document.querySelector('.first__work__item');
    const lastWorkItem = document.querySelector('.last__work__item');
    const workItems = document.querySelectorAll('.work__item');

    const workItemHeight = workItems[1].offsetHeight;
    firstWorkItem.style.height = workItemHeight + 'px';
    lastWorkItem.style.height = workItemHeight + 'px';

    addEventListener("resize", (event) => {
        const workItemHeight = workItems[1].offsetHeight;
        firstWorkItem.style.height = workItemHeight + 'px';
        lastWorkItem.style.height = workItemHeight + 'px';
    });

    // Size gallery to the height of the left gallery

    const leftGallery = document.querySelector('.left__gallery');
    const gallery = document.querySelector('.gallery');
    const leftGalleryHeight = leftGallery.offsetHeight;
    gallery.style.height = leftGalleryHeight + 'px';


    // scroll effect on the right gallery

    const rightGallery = document.querySelector('.right__gallery');
    window.addEventListener("scroll", () => {
        let scrollTop = window.scrollY;
        let docHeight = document.body.offsetHeight;
        let winHeight = window.innerHeight;
        let scrollPercent = scrollTop / (docHeight - winHeight);
        console.log(scrollPercent);
        rightGallery.style.transform = 'translateY(' + scrollPercent * -1 * leftGalleryHeight + 'px)';
    });

});