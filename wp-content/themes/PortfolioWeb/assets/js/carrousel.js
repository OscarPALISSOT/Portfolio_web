class Carrousel {

    /**
     *
     * @param {HTMLElement} element
     * @param {Object} options
     * @param {Object} options.slidesToScroll Nombre d'éléments à faire défiler
     * @param {Object} options.slidesVisible Nombre d'éléments visible dans un slide
     */
    constructor(element, options = {}) {

        this.element = element;
        this.options = Object.assign({}, {
            slidesToScroll: 1,
            slidesVisible: 1,
        }, options)

        this.children = [].slice.call(element.children);
        let ratio = this.children.length / this.options.slidesVisible;

        let root = this.createDivWithClass('carrousel');
        let container = this.createDivWithClass('carrousel__container');
        container.style.width = (ratio * 100) + "%";

        root.appendChild(container);
        this.element.appendChild(root);

        this.children.forEach((child) => {
            let item = this.createDivWithClass('carrousel__item');
            item.appendChild(child);
            container.appendChild(item);
        })
    }

    /**
     *
     * @param {string}className
     * @returns {HTMLElement}
     */
    createDivWithClass(className) {
        let div = document.createElement('div');
        div.classList.add(className);
        return div;
    }
}


document.addEventListener("DOMContentLoaded", function(event) {

    new Carrousel(document.querySelector('.wp-block-gallery'), {
        slidesToScroll: 1,
        slidesVisible: 3
    });
});