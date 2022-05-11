// Utils
import EventDispatcher from '../utils/EventDispatcher';
import debounce from '../utils/debounce';

// Config
import config from '../configs/joystick';

// Modules
import normalizeJoystickSignal from '../utils/normalizeJoystickSignal';

export default class Joystick extends EventDispatcher {
    constructor(options = {}) {
        super();

        // Props
        this._id = options.id;

        // Setup
        this._deadzone = config.deadzone;
        this._threshold = config.threshold;
        this._inputInactiveDelay = config.inputInactiveDelay;
        this._inputIntervalMin = config.inputIntervalMin;
        this._inputIntervalMax = config.inputIntervalMax;
        this._inputInterval = this._inputIntervalMax;

        this._ipcRenderer = null;
        this._position = { x: 0, y: 0 };

        this._inputLeftIndex = 0;
        this._inputRightIndex = 0;
        this._inputUpIndex = 0;
        this._inputDownIndex = 0;

        this._bindAll();
    }

    /**
     * Getters & Setters
     */
    get id() {
        return this._id;
    }

    get ipcRenderer() {
        return this._ipcRenderer;
    }

    set ipcRenderer(ipcRenderer) {
        this._ipcRenderer = ipcRenderer;
    }

    get position() {
        return this._position;
    }

    // Config
    get deadzone() {
        return this._deadzone;
    }

    set deadzone(deadzone) {
        this._deadzone = deadzone;
    }

    get threshold() {
        return this._threshold;
    }

    set threshold(threshold) {
        this._threshold = threshold;
    }

    get inputIntervalMin() {
        return this._inputIntervalMin;
    }

    set inputIntervalMin(inputIntervalMin) {
        this._inputIntervalMin = inputIntervalMin;
    }

    get inputIntervalMax() {
        return this._inputIntervalMax;
    }

    set inputIntervalMax(inputIntervalMax) {
        this._inputIntervalMax = inputIntervalMax;
    }

    /**
     * Public
     */
    moveHandler(e) {
        this._position.x = normalizeJoystickSignal(e, this._deadzone).x;
        this._position.y = normalizeJoystickSignal(e, this._deadzone).y;

        // Left
        if (this._position.x <= -1 + this._threshold) {
            this._moveLeftHandler();
        }

        // Right
        if (this._position.x >= 1 - this._threshold) {
            this._moveRightHandler();
        }

        // Up
        if (this._position.y >= 1 - this._threshold) {
            this._moveUpHandler();
        }

        // Down
        if (this._position.y <= -1 + this._threshold) {
            this._moveDownHandler();
        }

        this.dispatchEvent('joystick:move', { id: this._id, position: this._position });
    }

    /**
     * Private
     */
    _bindAll() {
        this._moveLeftHandler = this._moveLeftHandler.bind(this);
        this._moveLeftEndHandler = this._moveLeftEndHandler.bind(this);
        this._moveRightHandler = this._moveRightHandler.bind(this);
        this._moveRightEndHandler = this._moveRightEndHandler.bind(this);
        this._moveUpHandler = this._moveUpHandler.bind(this);
        this._moveUpEndHandler = this._moveUpEndHandler.bind(this);
        this._moveDownHandler = this._moveDownHandler.bind(this);
        this._moveDownEndHandler = this._moveDownEndHandler.bind(this);
    }

    _moveLeftHandler() {
        this._debouceInputLeft = debounce(this._moveLeftEndHandler, this._inputInactiveDelay, this._debouceInputLeft);
        this._inputLeftIndex++;
    }

    _moveLeftEndHandler() {
        console.log('Left End');
        this._inputLeftIndex = 0;
    }

    _moveRightHandler() {
        console.log('Right');
        this._debouceInputRight = debounce(this._moveRightEndHandler, this._inputInactiveDelay, this._debouceInputRight);
        this._inputRightIndex++;
    }

    _moveRightEndHandler() {
        console.log('Right End');
        this._inputRightIndex = 0;
    }

    _moveUpHandler() {
        console.log('Up');
        this._debouceInputUp = debounce(this._moveUpEndHandler, this._inputInactiveDelay, this._debouceInputUp);
        this._inputUpIndex++;
    }

    _moveUpEndHandler() {
        console.log('Up End');
        console.log(this._inputUpIndex);
        this._inputUpIndex = 0;
    }

    _moveDownHandler() {
        console.log('Down');
        this._debouceInputDown = debounce(this._moveDownEndHandler, this._inputInactiveDelay, this._debouceInputDown);
        this._inputDownIndex++;
    }

    _moveDownEndHandler() {
        console.log('Down End');
        this._inputDownIndex = 0;
    }
}
