// Utils
import EventDispatcher from '../utils/EventDispatcher';

export default class Player extends EventDispatcher {
    constructor(options = {}) {
        super();

        // Props
        this._id = options.id;
        this._joystick = options.joystick;
        this._buttons = options.buttons;
    }

    /**
     * Getters & Setters
     */
    get joystick() {
        return this._joystick;
    }

    set joystick(joystick) {
        this._joystick = joystick;
    }

    get buttons() {
        return this._buttons;
    }

    set buttons(buttons) {
        this._buttons = buttons;
    }

    /**
     * Public
     */

    /**
     * Private
     */
}
