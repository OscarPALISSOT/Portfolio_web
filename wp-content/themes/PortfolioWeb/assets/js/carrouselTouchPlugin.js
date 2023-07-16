/**
 * Permet de gérer le touch sur le carrousel
 */
export class CarrouselTouchPlugin {

    /**
     *
     * @param {Carrousel} carrousel
     */
    constructor (carrousel) {
        carrousel.element.addEventListener('mousedown', this.startDrag.bind(this));
        carrousel.element.addEventListener('touchstart', this.startDrag.bind(this));
        this.carrousel = carrousel;
    }

    /**
     * Démarre le déplacement au touché
     * @param {MouseEvent | TouchEvent} e
     * @param e
     */
    startDrag (e) {
        if (e.touches) {
            if (e.touches.length > 1){
                return;
            } else {
                e = e.touches[0];
            }
        }
        this.origin = {x: e.screenX, y: e.screenY};
        this.carrousel.disableTransition();
        console.log('startDrag');
    }
}