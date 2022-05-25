// Utils
import EventDispatcher from './utils/EventDispatcher';

// Managers
import LedManager from './managers/LedManager';
import JoystickManager from './managers/JoystickManager';
import ButtonManager from './managers/ButtonManager';
import PlayerManager from './managers/PlayerManager';

// Modules
import Leaderboard from './modules/Leaderboard';
import VirtualKeyboard from './modules/VirtualKeyboard';
import ExitOverlay from './modules/ExitOverlay';

class Axis extends EventDispatcher {
    constructor() {
        super();

        // Setup
        this._ipcRenderer = null;
        this._firebaseToken = null;
        this._leaderboard = null;

        this._ledManager = this._createLedManager();
        this._joystickManager = this._createJoystickManager();
        this._buttonManager = this._createButtonManager();
        this._playerManager = this._createPlayerManager();

        this._virtualKeyboard = this._createVirtualKeyboard();
        this._exitOverlay = this._createExitOverlay();

        this._bindAll();
        this._exposeMethods();
        this._setupEventListeners();
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
        return this._joystickManager.joystick1;
    }

    get joystick2() {
        return this._joystickManager.joystick2;
    }

    get buttonManager() {
        return this._buttonManager;
    }

    get players() {
        return this._playerManager.players;
    }

    get leaderboard() {
        return this._leaderboard;
    }

    get virtualKeyboard() {
        return this._virtualKeyboard;
    }

    get ledManager() {
        return this._ledManager;
    }

    /**
     * Public
     */
    destroy() {
        this._ipcRenderer = null;
    }

    registerKeys(keyboardKeys, key, id) {
        return this._buttonManager.registerKeys(keyboardKeys, key, id);
    }

    enableMouseInteraction(speed) {
        if (!this._ipcRenderer) return;

        this._ipcRenderer.send('mouse:enable', speed);
    }

    disableMouseInteraction() {
        if (!this._ipcRenderer) return;

        this._ipcRenderer.send('mouse:disable', null);
    }

    createPlayer(options) {
        return this._playerManager.createPlayer(options);
    }

    createLeaderboard(options) {
        return this._createLeaderboard(options);
    }

    /**
     * Private
     */
    _exposeMethods() {
        window.__axis__ = {};
        window.__axis__.set_ipc_renderer = this._setIpcRenderer;
    }

    _setIpcRenderer(ipcRenderer) {
        if (this._ipcRenderer) return;

        this._ipcRenderer = ipcRenderer;
        this._buttonManager.ipcRenderer = this._ipcRenderer;
        this._joystickManager.ipcRenderer = this._ipcRenderer;
        this._ledManager.ipcRenderer = this._ipcRenderer;
        if (this._leaderboard) this._leaderboard.ipcRenderer = this._ipcRenderer;
    }

    _createLedManager() {
        const ledManager = new LedManager();
        return ledManager;
    }

    _createJoystickManager() {
        const joystickManager = new JoystickManager();
        return joystickManager;
    }

    _createButtonManager() {
        const buttonManager = new ButtonManager({
            ledManager: this.ledManager,
        });
        return buttonManager;
    }

    _createPlayerManager() {
        const playerManager = new PlayerManager({
            joystickManager: this._joystickManager,
            buttonManager: this._buttonManager,
        });
        return playerManager;
    }

    _createLeaderboard(options) {
        if (!this._leaderboard) this._leaderboard = new Leaderboard({
            ipcRenderer: this._ipcRenderer,
            ...options,
        });
        return this._leaderboard;
    }

    _createVirtualKeyboard() {
        const keyboard = new VirtualKeyboard({
            joystick1: this._joystickManager.joystick1,
            joystick2: this._joystickManager.joystick2,
            buttonManager: this._buttonManager,
        });
        return keyboard;
    }

    _createExitOverlay() {
        const exitOverlay = new ExitOverlay({
            buttonManager: this._buttonManager,
        });
        return exitOverlay;
    }

    _bindAll() {
        // Exposed methods
        this._setIpcRenderer = this._setIpcRenderer.bind(this);

        // Event handlers
        this._keydownHandler = this._keydownHandler.bind(this);
        this._keyupHandler = this._keyupHandler.bind(this);

        this._joystickMoveHandler = this._joystickMoveHandler.bind(this);

        this._exitAttemptHandler = this._exitAttemptHandler.bind(this);
        this._exitCanceledHandler = this._exitCanceledHandler.bind(this);
        this._exitCompletedHandler = this._exitCompletedHandler.bind(this);
    }

    _setupEventListeners() {
        this._buttonManager.addEventListener('keydown', this._keydownHandler);
        this._buttonManager.addEventListener('keyup', this._keyupHandler);

        this._joystickManager.joystick1.addEventListener('joystick:move', this._joystickMoveHandler);
        this._joystickManager.joystick2.addEventListener('joystick:move', this._joystickMoveHandler);

        this._exitOverlay.addEventListener('exit:attempted', this._exitAttemptHandler);
        this._exitOverlay.addEventListener('exit:canceled', this._exitCanceledHandler);
        this._exitOverlay.addEventListener('exit:completed', this._exitCompletedHandler);
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

    _exitAttemptHandler() {
        this.dispatchEvent('exit:attempted');
    }

    _exitCanceledHandler() {
        this.dispatchEvent('exit:canceled');
    }

    _exitCompletedHandler() {
        this.dispatchEvent('exit:completed');

        this._ipcRenderer?.send('exit');
    }
}

export default new Axis();
