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
        this._gamepadEmulator = null;
        this._gamepadEmulatorKeys = [];

        this._bindAll();
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

    get gamepadEmulator() {
        return this._gamepadEmulator;
    }

    set gamepadEmulator(gamepadEmulator) {
        if (this._gamepadEmulator) return;

        this._gamepadEmulator = gamepadEmulator;

        this._gamepadEmulator.addEventListener('gamepad:keydown', this._gamepadKeydownHandler);
        this._gamepadEmulator.addEventListener('gamepad:keyup', this._gamepadKeyupHandler);
    }

    get gamepadEmulatorKeys() {
        return this._gamepadEmulatorKeys;
    }

    set gamepadEmulatorKeys(keys) {
        this._gamepadEmulatorKeys = keys;
    }

    /**
     * Public
     */
    setLedColor(color) {
        this._led?.setColor(color);
    }

    keydownHandler() {
        this.dispatchEvent('keydown', {
            key: this._key,
            id: this._id,
            keyboardKeys: this._keyboardKeys,
            gamepadEmulatorKeys: this._gamepadEmulatorKeys,
            instance: this,
        });
    }

    keyupHandler() {
        this.dispatchEvent('keyup', {
            key: this._key,
            id: this._id,
            keyboardKeys: this._keyboardKeys,
            instance: this,
        });
    }

    /**
     * Private
     */
    _bindAll() {
        this._gamepadKeydownHandler = this._gamepadKeydownHandler.bind(this);
        this._gamepadKeyupHandler = this._gamepadKeyupHandler.bind(this);
    }

    _gamepadKeydownHandler(index) {
        if (!this._gamepadEmulatorKeys.includes(index)) return;

        this.keydownHandler();
    }

    _gamepadKeyupHandler(index) {
        if (!this._gamepadEmulatorKeys.includes(index)) return;

        this.keyupHandler();
    }
}
