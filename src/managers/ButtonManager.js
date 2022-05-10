// Utils
import getArray from '../utils/getArray';

export default class ButtonManager {
    constructor(options = {}) {
        // Props
        this._buttons = options.buttons;

        // Setup
        this._ipcRenderer = null;

        this._bindAll();
        this._setupEventListeners();
    }

    /**
     * Getters & Setters
     */
    get ipcRenderer() {
        return this._ipcRenderer;
    }

    set ipcRenderer(ipcRenderer) {
        this._ipcRenderer = ipcRenderer;
        this._setupIpcRendererEventListeners();
    }

    /**
     * Public
     */
    destroy() {
        this._removeEventListeners();
        this._removeIpcRendererEventListeners();
    }

    registerKeys(keyboardKeys, key, id) {
        const button = this.getButton(key, id);
        if (button) button.keyboardKeys = getArray(keyboardKeys);

        return button;
    }

    getButton(key, id) {
        const button = this._buttons.filter((item) => {
            return item.key === key && item.id === id;
        })[0];

        return button;
    }

    getButtonsById(id) {
        const buttons = this._buttons.filter((item) => {
            return item.id === id;
        });
        return buttons;
    }

    getButtonsByKeyboardKey(keyboardKey) {
        const buttons = this._buttons.filter((item) => {
            return item.keyboardKeys.includes(keyboardKey);
        });
        return buttons;
    }

    /**
     * Private
     */
    _bindAll() {
        // Event handlers
        this._keydownHandler = this._keydownHandler.bind(this);
        this._keyupHandler = this._keyupHandler.bind(this);
        this._machineKeydownHandler = this._machineKeydownHandler.bind(this);
        this._machineKeyupHandler = this._machineKeyupHandler.bind(this);
    }

    _setupEventListeners() {
        window.addEventListener('keydown', this._keydownHandler);
        window.addEventListener('keyup', this._keyupHandler);
    }

    _removeEventListeners() {
        window.removeEventListener('keydown', this._keydownHandler);
        window.removeEventListener('keyup', this._keyupHandler);
    }

    _setupIpcRendererEventListeners() {
        if (!this._ipcRenderer) return;
        this._ipcRenderer.on('keydown', this._machineKeydownHandler);
        this._ipcRenderer.on('keyup', this._machineKeyupHandler);
    }

    _removeIpcRendererEventListeners() {
        if (!this._ipcRenderer) return;
        this._ipcRenderer.removeListener('keydown', this._machineKeydownHandler);
        this._ipcRenderer.removeListener('keyup', this._machineKeyupHandler);
    }

    /**
     * Handlers
     */
    _keydownHandler(e) {
        const buttons = this.getButtonsByKeyboardKey(e.key);

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].keydownHandler(e);
        }
    }

    _keyupHandler(e) {
        const buttons = this.getButtonsByKeyboardKey(e.key);

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].keyupHandler(e);
        }
    }

    _machineKeydownHandler(event, key) {

    }

    _machineKeyupHandler(event, key) {

    }
}
