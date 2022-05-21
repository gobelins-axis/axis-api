// Modules
import Button from '../modules/Button';

// Configs
import config from '../configs';

// Utils
import getArray from '../utils/getArray';
import EventDispatcher from '../utils/EventDispatcher';

export default class ButtonManager extends EventDispatcher {
    constructor(options = {}) {
        super();

        // Props
        this._ledManager = options.ledManager;

        // Setup
        this._buttons = this._createButtons();
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
    _createButtons() {
        const buttons = [];

        for (let i = 0; i < config.buttons.length; i++) {
            const button = new Button({
                id: config.buttons[i].id,
                key: config.buttons[i].key,
                ledManager: this._ledManager,
            });
            buttons.push(button);
        }

        return buttons;
    }

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
            const button = buttons[i];
            button.keydownHandler(e);
            this.dispatchEvent('keydown', {
                key: button.key,
                id: button.id,
                instance: button,
                originalEvent: e,
            });
        }
    }

    _keyupHandler(e) {
        const buttons = this.getButtonsByKeyboardKey(e.key);

        for (let i = 0; i < buttons.length; i++) {
            const button = buttons[i];
            buttons[i].keyupHandler(e);
            this.dispatchEvent('keyup', {
                key: button.key,
                id: button.id,
                instance: button,
                originalEvent: e,
            });
        }
    }

    _machineKeydownHandler(event, data) {
        const button = this.getButton(data.key, data.id);
        button.keydownHandler(data);
        this.dispatchEvent('keydown', {
            key: button.key,
            id: button.id,
            instance: button,
            originalEvent: data,
        });
    }

    _machineKeyupHandler(event, data) {
        const button = this.getButton(data.key, data.id);

        button.keyupHandler(data);

        this.dispatchEvent('keyup', {
            key: button.key,
            id: button.id,
            instance: button,
            originalEvent: data,
        });

        // Mouse click
        if (this._ipcRenderer && button.id === 1 && button.key === 'a') this._ipcRenderer.send('mouse:click', {});
    }
}
