export class CarrouselTouchPlugin {

    /**
     *
     * @param {Carrousel} carrousel
     */
    constructor(carrousel) {
        carrousel.container.addEventListener('dragstart', e => e.preventDefault());
        carrousel.container.addEventListener('mousedown', this.startDrag.bind(this));
        carrousel.container.addEventListener('touchstart', this.startDrag.bind(this));
        window.addEventListener('mousemove', this.drag.bind(this));
        window.addEventListener('touchmove', this.drag.bind(this));
        window.addEventListener('touchend', this.endDrag.bind(this));
        window.addEventListener('mouseup', this.endDrag.bind(this));
        window.addEventListener('touchcancel', this.endDrag.bind(this));
        this.carrousel = carrousel;
    }

    /**
     * Démarre le déplacement au touché
     * @param {MouseEvent | TouchEvent} e
     * @param e
     */
    startDrag(e) {
        if (e.touches) {
            if (e.touches.length > 1) {
                return;
            } else {
                e = e.touches[0];
            }
        }
        this.origin = {x: e.screenX, y: e.screenY};
        this.width = this.carrousel.containerWidth
        this.carrousel.disableTransition();
    }

    /**
     * Déplace le carrousel au touché
     * @param {MouseEvent | TouchEvent} e
     */
    drag(e) {
        if (this.origin) {
            let point = e.touches ? e.touches[0] : e;
            let translate = {x: point.screenX - this.origin.x, y: point.screenY - this.origin.y}
            if (e.touches && Math.abs(translate.x) > Math.abs(translate.y)){
                e.preventDefault();
                e.stopPropagation();
            }
            let baseTranslate = this.carrousel.currentItem * -100 / this.carrousel.items.length;
            this.lastTranslate = translate;
            this.carrousel.translate(baseTranslate + 100 * translate.x / this.width);
        }
    }

    /**
     * Arrête le déplacement au touché
     * @param {MouseEvent | TouchEvent} e
     */
    endDrag(e) {
        if (this.origin && this.lastTranslate) {
            this.carrousel.enableTransition();
            if (Math.abs(this.lastTranslate.x / this.carrousel.carouselWidth) > 0.2) {
                if (this.lastTranslate.x > 0) {
                    this.carrousel.prev();
                } else {
                    this.carrousel.next();
                }
            } else {
                this.carrousel.goToItem(this.carrousel.currentItem);
            }
        }
        this.origin = null;
    }
}