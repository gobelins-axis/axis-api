// Utils
import EventDispatcher from '../utils/EventDispatcher';
import debounce from '../utils/debounce';
import throttle from '../utils/throttle';

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

        this.dispatchEvent('joystick:move', { id: this._id, position: this._position });

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

        // Mouse move
        if (this._ipcRenderer && this._id === 1) this._ipcRenderer.send('mouse:move', this._position);
    }

    /**
     * Private
     */
    _bindAll() {
        this._moveLeftHandler = this._moveLeftHandler.bind(this);
        this._moveLeftThrottledHandler = this._moveLeftThrottledHandler.bind(this);
        this._moveLeftEndHandler = this._moveLeftEndHandler.bind(this);

        this._moveRightHandler = this._moveRightHandler.bind(this);
        this._moveRightThrottledHandler = this._moveRightThrottledHandler.bind(this);
        this._moveRightEndHandler = this._moveRightEndHandler.bind(this);

        this._moveUpHandler = this._moveUpHandler.bind(this);
        this._moveUpThrottledHandler = this._moveUpThrottledHandler.bind(this);
        this._moveUpEndHandler = this._moveUpEndHandler.bind(this);

        this._moveDownHandler = this._moveDownHandler.bind(this);
        this._moveDownThrottledHandler = this._moveDownThrottledHandler.bind(this);
        this._moveDownEndHandler = this._moveDownEndHandler.bind(this);
    }

    _moveLeftHandler() {
        const inputInterval = this._inputLeftIndex > 1 ? this._inputIntervalMin : this._inputIntervalMax;
        this._throttleMoveLeft = throttle(this._moveLeftThrottledHandler, inputInterval * 1000, this._throttleMoveLeft);
        this._debounceMoveLeft = debounce(this._moveLeftEndHandler, this._inputInactiveDelay * 1000, this._debounceMoveLeft);
    }

    _moveLeftThrottledHandler() {
        this._inputLeftIndex++;
        this.dispatchEvent('joystick:quickmove', { direction: 'left', position: this._position });
    }

    _moveLeftEndHandler() {
        this._inputLeftIndex = 0;
    }

    _moveRightHandler() {
        const inputInterval = this._inputRightIndex > 1 ? this._inputIntervalMin : this._inputIntervalMax;
        this._throttleMoveRight = throttle(this._moveRightThrottledHandler, inputInterval * 1000, this._throttleMoveRight);
        this._debounceMoveRight = debounce(this._moveRightEndHandler, this._inputInactiveDelay * 1000, this._debounceMoveRight);
    }

    _moveRightThrottledHandler() {
        this._inputRightIndex++;
        this.dispatchEvent('joystick:quickmove', { direction: 'right', position: this._position });
    }

    _moveRightEndHandler() {
        this._inputRightIndex = 0;
    }

    _moveUpHandler() {
        const inputInterval = this._inputUpIndex > 1 ? this._inputIntervalMin : this._inputIntervalMax;
        this._throttleMoveUp = throttle(this._moveUpThrottledHandler, inputInterval * 1000, this._throttleMoveUp);
        this._debounceMoveUp = debounce(this._moveUpEndHandler, this._inputInactiveDelay * 1000, this._debounceMoveUp);
    }

    _moveUpThrottledHandler() {
        this._inputUpIndex++;
        this.dispatchEvent('joystick:quickmove', { direction: 'up', position: this._position });
    }

    _moveUpEndHandler() {
        this._inputUpIndex = 0;
    }

    _moveDownHandler() {
        const inputInterval = this._inputDownIndex > 1 ? this._inputIntervalMin : this._inputIntervalMax;
        this._throttleMoveDown = throttle(this._moveDownThrottledHandler, inputInterval * 1000, this._throttleMoveDown);
        this._debounceMoveDown = debounce(this._moveDownEndHandler, this._inputInactiveDelay * 1000, this._debounceMoveDown);
    }

    _moveDownThrottledHandler() {
        this._inputDownIndex++;
        this.dispatchEvent('joystick:quickmove', { direction: 'down', position: this._position });
    }

    _moveDownEndHandler() {
        this._inputDownIndex = 0;
    }
}
