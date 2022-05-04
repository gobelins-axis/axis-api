// Utils
import EventDispatcher from './utils/EventDispatcher';

// Configs
import keys from './configs/keys';

class Arcade extends EventDispatcher {
    constructor() {
        super();

        // Setup
        this._ipcRenderer = null;
        this._keys = keys;
        this._mappedKeys = this._setupMappedKeys();

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

    /**
     * Public
     */
    destroy() {
        this._removeEventListeners();
        this._removeIpcRendererEventListeners();
        this._ipcRenderer = null;
    }

    registerKey(machineKey, keyboardKey) {
        const keyIndex = this._keys.indexOf(machineKey);

        if (keyIndex === -1) {
            console.error(`Key with name "${machineKey}" is not available`);
            return;
        }

        this._mappedKeys[this._keys[keyIndex]].keyboardKey = keyboardKey;

        return this._mappedKeys[this._keys[keyIndex]];
    }

    /**
     * Private
     */
    _setupMappedKeys() {
        const mappedKeys = {};

        for (let i = 0; i < this._keys.length; i++) {
            const key = this._keys[i];
            mappedKeys[key] = {
                machineKey: key,
                keyboardKey: null,
                isPressed: false,
            };
        }

        return mappedKeys;
    }

    _exposeMethods() {
        window.__arcade__ = {};
        window.__arcade__.set_ipc_renderer = this._setIpcRenderer;
        window.__arcade__.reset_ipc_renderer = this._resetIpcRenderer;
    }

    _setIpcRenderer(ipcRenderer) {
        if (this._ipcRenderer) return;

        this._ipcRenderer = ipcRenderer;

        this._setupIpcRendererEventListeners();
    }

    _resetIpcRenderer() {
        this._removeIpcRendererEventListeners();

        this._ipcRenderer = null;
    }

    _bindAll() {
        // Exposed methods
        this._setIpcRenderer = this._setIpcRenderer.bind(this);
        this._resetIpcRenderer = this._resetIpcRenderer.bind(this);

        // Event handlers
        this._keydownHandler = this._keydownHandler.bind(this);
        this._keyupHandler = this._keyupHandler.bind(this);
        this._machineKeydownHandler = this._machineKeydownHandler.bind(this);
        this._machineKeyupHandler = this._machineKeyupHandler.bind(this);
        this._joystickMoveHandler = this._joystickMoveHandler.bind(this);
    }

    _setupEventListeners() {
        window.addEventListener('keydown', this._keydownHandler);
        window.addEventListener('keyup', this._keyupHandler);
    }

    _setupIpcRendererEventListeners() {
        if (!this._ipcRenderer) return;
        this._ipcRenderer.on('keydown', this._machineKeydownHandler);
        this._ipcRenderer.on('keyup', this._machineKeyupHandler);
        this._ipcRenderer.on('joystick:move', this._joystickMoveHandler);
        this._ipcRenderer.on('joystick:keydown', this._joystickKeydownHandler);
        this._ipcRenderer.on('joystick:keyup', this._joystickKeyupHandler);
    }

    _removeIpcRendererEventListeners() {
        if (!this._ipcRenderer) return;
        this._ipcRenderer.removeListener('keydown', this._machineKeydownHandler);
        this._ipcRenderer.removeListener('keyup', this._machineKeyupHandler);
        this._ipcRenderer.removeListener('joystick:move', this._joystickMoveHandler);
        this._ipcRenderer.removeListener('joystick:keydown', this._joystickKeydownHandler);
        this._ipcRenderer.removeListener('joystick:keyup', this._joystickKeyupHandler);
    }

    _removeEventListeners() {
        window.removeEventListener('keydown', this._keydownHandler);
        window.removeEventListener('keyup', this._keyupHandler);
    }

    _keydownHandler(e) {
        for (const mappedKey in this._mappedKeys) {
            if (this._mappedKeys[mappedKey].keyboardKey === e.key) {
                this._mappedKeys[mappedKey].isPressed = true;
                this.dispatchEvent('keydown', this._mappedKeys[mappedKey]);
            }
        }
    }

    _keyupHandler(e) {
        for (const mappedKey in this._mappedKeys) {
            if (this._mappedKeys[mappedKey].keyboardKey === e.key) {
                this._mappedKeys[mappedKey].isPressed = false;
                this.dispatchEvent('keyup', this._mappedKeys[mappedKey]);
            }
        }
    }

    _machineKeydownHandler(event, key) {
        for (const mappedKey in this._mappedKeys) {
            if (this._mappedKeys[mappedKey].machineKey === key) {
                this._mappedKeys[mappedKey].isPressed = true;
                this.dispatchEvent('keydown', this._mappedKeys[mappedKey]);
            }
        }
    }

    _machineKeyupHandler(event, key) {
        for (const mappedKey in this._mappedKeys) {
            if (this._mappedKeys[mappedKey].machineKey === key) {
                this._mappedKeys[mappedKey].isPressed = false;
                this.dispatchEvent('keyup', this._mappedKeys[mappedKey]);
            }
        }
    }

    _joystickMoveHandler(event, data) {
        this.dispatchEvent('joystick:move', data);
    }

    _joystickKeydownHandler(event, data) {
        this.dispatchEvent('joystick:keydown', data);
    }

    _joystickKeyupHandler(event, data) {
        this.dispatchEvent('joystick:keyup', data);
    }
}

export default new Arcade();
