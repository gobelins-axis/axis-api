// Utils
import EventDispatcher from './utils/EventDispatcher';

// Managers
import JoystickManager from './managers/JoystickManager';
import ButtonManager from './managers/ButtonManager';
import PlayerManager from './managers/PlayerManager';
import Leaderboard from './modules/Leaderboard';

class Axis extends EventDispatcher {
    constructor() {
        super();

        // Setup
        this._ipcRenderer = null;
        this._firebaseToken = null;
        this._leaderboard = null;

        this._joystickManager = this._createJoystickManager();
        this._buttonManager = this._createButtonManager();
        this._playerManager = this._createPlayerManager();

        this._bindAll();
        this._exposeMethods();
        this._setupEventListeners();
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

    /**
     * Public
     */
    destroy() {
        this._removeIpcRendererEventListeners();
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
        if (this._leaderboard) this._leaderboard.ipcRenderer = this._ipcRenderer;

        this._setupIpcRendererEventListeners();
    }

    _createJoystickManager() {
        const joystickManager = new JoystickManager();
        return joystickManager;
    }

    _createButtonManager() {
        const buttonManager = new ButtonManager();
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

    _bindAll() {
        // Exposed methods
        this._setIpcRenderer = this._setIpcRenderer.bind(this);

        // Event handlers
        this._keydownHandler = this._keydownHandler.bind(this);
        this._keyupHandler = this._keyupHandler.bind(this);
        this._joystickMoveHandler = this._joystickMoveHandler.bind(this);
        this._machineExitAttemptHandler = this._machineExitAttemptHandler.bind(this);
        this._machineExitCanceledHandler = this._machineExitCanceledHandler.bind(this);
        this._machineExitCompletedHandler = this._machineExitCompletedHandler.bind(this);
    }

    _setupEventListeners() {
        this._buttonManager.addEventListener('keydown', this._keydownHandler);
        this._buttonManager.addEventListener('keyup', this._keyupHandler);
        this._joystickManager.addEventListener('joystick:move', this._joystickMoveHandler);
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

    _keydownHandler(e) {
        this.dispatchEvent('keydown', e);
    }

    _keyupHandler(e) {
        this.dispatchEvent('keyup', e);
    }

    _joystickMoveHandler(e) {
        this.dispatchEvent('joystick:move', e);
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

export default new Axis();
