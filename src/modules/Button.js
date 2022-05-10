import EventDispatcher from '../utils/EventDispatcher';

export default class Button extends EventDispatcher {
    constructor(options = {}) {
        super();

        this._id = options.id;
        this._key = options.key;
        this._keyboardKeys = [];
    }

    /**
     * Getters & Setters
     */
    get id() {
        return this._id;
    }

    get key() {
        return this._key;
    }

    get keyboardKeys() {
        return this._keyboardKeys;
    }

    set keyboardKeys(keys) {
        this._keyboardKeys = keys;
    }

    /**
     * Public
     */
    keydownHandler(e) {
        this.dispatchEvent('keydown', e);
    }

    keyupHandler(e) {
        this.dispatchEvent('keyup', e);
    }

    /**
     * Private
     */
}