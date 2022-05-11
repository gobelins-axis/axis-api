// Utils
import EventDispatcher from './utils/EventDispatcher';

// Modules
import Joystick from './modules/Joystick';
import Player from './modules/Player';

// Managers
import JoystickManager from './managers/JoystickManager';

// Configs
import config from './configs';
import Button from './modules/Button';
import ButtonManager from './managers/ButtonManager';

class Arcade extends EventDispatcher {
    constructor() {
        super();

        // Setup
        this._ipcRenderer = null;

        this._joystick1 = this._createJoystick1();
        this._joystick2 = this._createJoystick2();
        this._joystickManager = this._createJoystickManager();

        this._buttons = this._createButtons();
        this._buttonManager = this._createButtonManager();

        this._player1 = this._createPlayer1();
        this._player2 = this._createPlayer2();

        this._bindAll();
        this._exposeMethods();
        this._setupIpcRendererEventListeners();
    }

    /**
     * Getters
     */
    get mappedKeys() {
        return this._mappedKeys;
    }

    get ipcRenderer() {
        return this._ipcRenderer;
    }

    get joystick1() {
        return this._joystick1;
    }

    get joystick2() {
        return this._joystick2;
    }

    get player1() {
        return this._player1;
    }

    get player2() {
        return this._player2;
    }

    /**
     * Public
     */
    start() {
        // Once everything is configued,
        // we might need a start function to setup
        // stuffs like LED lights...
    }

    destroy() {
        this._removeIpcRendererEventListeners();
        this._ipcRenderer = null;
    }

    registerKeys(keyboardKeys, key, id) {
        return this._buttonManager.registerKeys(keyboardKeys, key, id);
    }

    /**
     * Private
     */
    _exposeMethods() {
        window.__arcade__ = {};
        window.__arcade__.set_ipc_renderer = this._setIpcRenderer;
    }

    _setIpcRenderer(ipcRenderer) {
        if (this._ipcRenderer) return;

        this._ipcRenderer = ipcRenderer;
        this._buttonManager.ipcRenderer = this._ipcRenderer;
        this._joystickManager.ipcRenderer = this._ipcRenderer;

        this._setupIpcRendererEventListeners();
    }

    _createJoystick1() {
        const joystick1 = new Joystick({ id: 1 });
        return joystick1;
    }

    _createJoystick2() {
        const joystick2 = new Joystick({ id: 2 });
        return joystick2;
    }

    _createJoystickManager() {
        const joystickManager = new JoystickManager({
            joystick1: this._joystick1,
            joystick2: this._joystick2,
        });
        return joystickManager;
    }

    _createButtons() {
        const buttons = [];

        for (let i = 0; i < config.buttons.length; i++) {
            const button = new Button({
                id: config.buttons[i].id,
                key: config.buttons[i].key,
            });
            buttons.push(button);
        }

        return buttons;
    }

    _createButtonManager() {
        const buttonManager = new ButtonManager({
            buttons: this._buttons,
        });
        return buttonManager;
    }

    _createPlayer1() {
        const player1 = new Player({
            id: 1,
            joystick: this._joystick1,
            buttons: this._buttonManager.getButtonsById(1),
        });
        return player1;
    }

    _createPlayer2() {
        const player2 = new Player({
            id: 2,
            joystick: this._joystick2,
            buttons: this._buttonManager.getButtonsById(2),
        });
        return player2;
    }

    _bindAll() {
        // Exposed methods
        this._setIpcRenderer = this._setIpcRenderer.bind(this);

        // Event handlers
        this._machineExitAttemptHandler = this._machineExitAttemptHandler.bind(this);
        this._machineExitCanceledHandler = this._machineExitCanceledHandler.bind(this);
        this._machineExitCompletedHandler = this._machineExitCompletedHandler.bind(this);
    }

    _setupIpcRendererEventListeners() {
        if (!this._ipcRenderer) return;
        this._ipcRenderer.on('exit:attempted', this._machineExitAttemptHandler);
        this._ipcRenderer.on('exit:canceled', this._machineExitCanceledHandler);
        this._ipcRenderer.on('exit:completed', this._machineExitCompletedHandler);
    }

    _removeIpcRendererEventListeners() {
        if (!this._ipcRenderer) return;
        this._ipcRenderer.removeListener('exit:attempted', this._machineExitAttemptHandler);
        this._ipcRenderer.removeListener('exit:canceled', this._machineExitCanceledHandler);
        this._ipcRenderer.removeListener('exit:completed', this._machineExitCompletedHandler);
    }

    _machineExitAttemptHandler() {
        this.dispatchEvent('exit:attempted');
    }

    _machineExitCanceledHandler() {
        this.dispatchEvent('exit:canceled');
    }

    _machineExitCompletedHandler() {
        this.dispatchEvent('exit:completed');
    }
}

export default new Arcade();
