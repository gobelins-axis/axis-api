// Modules
import Player from '../modules/Player';

export default class PlayerManager {
    constructor(options = {}) {
        // Props
        this._joystickManager = options.joystickManager;
        this._buttonManager = options.buttonManager;

        // Setup
        this._player1 = this._createPlayer1();
        this._player2 = this._createPlayer2();
    }

    /**
     * Getters
     */
    get player1() {
        return this._player1;
    }

    get player2() {
        return this._player2;
    }

    /**
     * Public
     */
    destroy() {

    }

    /**
     * Private
     */
    _createPlayer1() {
        const player1 = new Player({
            id: 1,
            joystick: this._joystickManager.joystick1,
            buttons: this._buttonManager.getButtonsById(1),
        });
        return player1;
    }

    _createPlayer2() {
        const player2 = new Player({
            id: 2,
            joystick: this._joystickManager.joystick2,
            buttons: this._buttonManager.getButtonsById(2),
        });
        return player2;
    }
}
