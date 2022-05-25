import EventDispatcher from '../utils/EventDispatcher';

export default class Button extends EventDispatcher {
    constructor(options = {}) {
        super();

        this._id = options.id;
        this._key = options.key;
        this._ledManager = options.ledManager;

        // Setup
        this._led = this._ledManager.getLedByName(`button-${this._key}-${this._id}`);
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

    get led() {
        return this._led;
    }

    /**
     * Public
     */
    keydownHandler(e) {
        this.dispatchEvent('keydown', {
            key: this._key,
            id: this._id,
            keyboardKeys: this._keyboardKeys,
            instance: this,
            originalEvent: e,
        });
    }

    keyupHandler(e) {
        this.dispatchEvent('keyup', {
            key: this._key,
            id: this._id,
            keyboardKeys: this._keyboardKeys,
            instance: this,
            originalEvent: e,
        });
    }

    /**
     * Private
     */
}
