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

        let children = [].slice.call(element.children);
        this.isMobile = false;
        this.currentItem = 0;

        this.root = this.createDivWithClass('carrousel');
        this.container = this.createDivWithClass('carrousel__container');

        this.root.setAttribute('tabindex', '0');

        this.root.appendChild(this.container);
        this.element.appendChild(this.root);

        this.items = children.map((child) => {
            let item = this.createDivWithClass('carrousel__item');
            item.appendChild(child);
            this.container.appendChild(item);
            return item;
        })
        this.setStyle();
        this.createNavigation();
        this.onResize();
        window.addEventListener('resize', this.onResize.bind(this));

        // Keyboard navigation
        this.root.addEventListener('keyup', (e) => {
            if (e.key === 'ArrowLeft'){
                this.prev();
            } else if (e.key === 'ArrowRight'){
                this.next();
            }
        })
    }


    /**
     * Applique les bonnes dimensions aux éléments du carrousel
     */
    setStyle() {
        let ratio = this.items.length / this.slidesVisible;
        this.container.style.width = (ratio * 100) + "%";
        this.items.forEach(item => item.style.width = ((100 / this.slidesVisible) / ratio) + "%");
    }

    createNavigation() {
        let nextButton = this.createDivWithClass('carrousel__next');
        let prevButton = this.createDivWithClass('carrousel__prev');
        this.root.appendChild(nextButton);
        this.root.appendChild(prevButton);
        nextButton.addEventListener('click', this.next.bind(this));
        prevButton.addEventListener('click', this.prev.bind(this));
    }

    next() {
        this.goToItem(this.currentItem + this.slidesToScroll);
    }

    prev() {
        this.goToItem(this.currentItem - this.slidesToScroll);
    }

    /**
     * Déplace le carrousel vers l'élément ciblé
     * @param {number} index
     */
    goToItem(index) {
        if (index < 0) {
            index = this.items.length - this.slidesVisible;
        } else if (index >= this.items.length || (this.items[this.currentItem + this.slidesVisible] === undefined && index > this.currentItem)) {
            index = 0;
        }

        let translateX = index * -100 / this.items.length;
        this.container.style.transform = 'translate3d(' + translateX + '%, 0, 0)';
        this.currentItem = index
    }

    onResize() {
        let mobile = window.innerWidth < 768;
        if (mobile !== this.isMobile) {
            this.isMobile = mobile;
            this.setStyle();
        }
    }


    /**
     *
     * @param {string} className
     * @returns {HTMLElement}
     */
    createDivWithClass(className) {
        let div = document.createElement('div');
        div.classList.add(className);
        return div;
    }


    /**
     * @returns {number}
     */
    get slidesVisible() {
        return this.isMobile ? 1 : this.options.slidesVisible;
    }

    /**
     * @returns {boolean}
     */
    get slidesToScroll() {
        return this.isMobile ? 1 : this.options.slidesToScroll;
    }
}


document.addEventListener("DOMContentLoaded", function (event) {

    new Carrousel(document.querySelector('.wp-block-gallery'), {
        slidesToScroll: 1,
        slidesVisible: 2,
    });
});