// Utils
import EventDispatcher from '../utils/EventDispatcher';

export default class GamepadEmulator extends EventDispatcher {
    constructor(index) {
        super();

        // Props
        this._buttons = [];
        this._index = index;

        // Setup
        this._bindAll();
        this._setupEventListeners();
    }

    /**
     * Public
     */
    update() {
        const gamepad = navigator.getGamepads()[this._index];
        if (!gamepad) return;

        // Buttons
        for (let i = 0; i < this._buttons.length; i++) {
            const button = this._buttons[i];
            button.current.pressed = gamepad.buttons[i].pressed;
            if (button.current.pressed !== button.previous.pressed) {
                this.buttonStateChangedHandler(i, button.current.pressed);
            }
            button.previous.pressed = button.current.pressed;
        }

        // Joystick
        this.joystickMoveHandler(gamepad.axes);
    }

    isConnected() {
        return !!navigator.getGamepads()[this._index];
    }

    /**
     * Private
     */
    _bindAll() {
        this._gamepadConnectedHandler = this._gamepadConnectedHandler.bind(this);
    }

    _setupEventListeners() {
        window.addEventListener('gamepadconnected', this._gamepadConnectedHandler);
    }

    _gamepadConnectedHandler() {
        const gamepad = navigator.getGamepads()[this._index];

        if (!gamepad) return;

        console.log(`🎮 GAMEPAD ${this._index} CONNECTED`);

        for (let i = 0; i < gamepad.buttons.length; i++) {
            this._buttons.push({
                previous: {
                    pressed: gamepad.buttons[i].pressed,
                },
                current: {
                    pressed: gamepad.buttons[i].pressed,
                },
            });
        }
    }

    buttonStateChangedHandler(index, state) {
        console.log(index);
        if (state) this.dispatchEvent('gamepad:keydown', index);
    }

    joystickMoveHandler(axes) {
        // Left
        this.dispatchEvent('gamepad:joystick:move', { index: 0, position: { x: axes[0], y: axes[1] } });
        // Right
        this.dispatchEvent('gamepad:joystick:move', { index: 1, position: { x: axes[2], y: axes[5] } });
    }
}
