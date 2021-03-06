// Utils
import getArray from '../utils/getArray';
import EventDispatcher from '../utils/EventDispatcher';

export default class Player extends EventDispatcher {
    constructor(options = {}) {
        super();

        // Props
        this._id = options.id;
        this._joysticks = options.joysticks ? getArray(options.joysticks) : [];
        this._buttons = options.buttons || [];

        // Setup
        this._bindAll();
        this._setupEventListeners();
    }

    /**
     * Getters & Setters
     */
    get id() {
        return this._id;
    }

    get joysticks() {
        return this._joysticks;
    }

    set joysticks(joysticks) {
        this._joysticks = getArray(joysticks);
    }

    get buttons() {
        return this._buttons;
    }

    set buttons(buttons) {
        this._removeEventListeners();
        this._buttons = buttons;
        this._setupEventListeners();
    }

    /**
     * Public
     */
    destroy() {
        this._removeEventListeners();
    }

    /**
     * Private
     */
    _bindAll() {
        this._keydownHandler = this._keydownHandler.bind(this);
        this._keyupHandler = this._keyupHandler.bind(this);
        this._joystickMoveHandler = this._joystickMoveHandler.bind(this);
        this._joystickQuickmoveHandler = this._joystickQuickmoveHandler.bind(this);
    }

    _setupEventListeners() {
        for (let i = 0; i < this._joysticks.length; i++) {
            this._joysticks[i].addEventListener('joystick:move', this._joystickMoveHandler);
            this._joysticks[i].addEventListener('joystick:quickmove', this._joystickQuickmoveHandler);
        }

        for (let i = 0; i < this._buttons.length; i++) {
            this._buttons[i].addEventListener('keydown', this._keydownHandler);
            this._buttons[i].addEventListener('keyup', this._keyupHandler);
        }
    }

    _removeEventListeners() {
        for (let i = 0; i < this._joysticks.length; i++) {
            this._joysticks[i].removeEventListener('joystick:move', this._joystickMoveHandler);
            this._joysticks[i].removeEventListener('joystick:quickmove', this._joystickQuickmoveHandler);
        }

        for (let i = 0; i < this._buttons.length; i++) {
            this._buttons[i].removeEventListener('keydown', this._keydownHandler);
            this._buttons[i].removeEventListener('keyup', this._keyupHandler);
        }
    }

    _keydownHandler(e) {
        this.dispatchEvent('keydown', e);
    }

    _keyupHandler(e) {
        this.dispatchEvent('keyup', e);
    }

    _joystickMoveHandler(e) {
        this.dispatchEvent('joystick:move', e);
    }

    _joystickQuickmoveHandler(e) {
        this.dispatchEvent('joystick:quickmove', e);
    }
}
