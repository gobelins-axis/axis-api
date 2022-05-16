// Modules
import Player from '../modules/Player';

export default class PlayerManager {
    constructor(options = {}) {
        // Props
        this._joystickManager = options.joystickManager;
        this._buttonManager = options.buttonManager;

        // Setup
        this._players = [];
    }

    /**
     * Getters
     */
    get players() {
        return this._players;
    }

    /**
     * Public
     */
    destroy() {
        for (let i = 0; i < this._players.length; i++) {
            this._players[i].destroy();
        }
    }

    createPlayer(options = {}) {
        const player = new Player({
            id: options.id,
            joystick: options.joystick,
            buttons: options.buttons,
        });
        this._players.push(player);
        return player;
    }

    destroyPlayer(player) {
        const index = this._players.indexOf(player);
        player.destroy();
        this._players.splice(index, 1);
    }

    getPlayerById(id) {
        const player = this._players.filter((item) => {
            return item.id === id;
        })[0];

        return player;
    }
}
