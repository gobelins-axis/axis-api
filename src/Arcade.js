// Utils
import EventDispatcher from './utils/EventDispatcher';

// Configs
import keys from './configs/keys';

class Arcade extends EventDispatcher {
    constructor() {
        super();

        // Setup
        this._keys = keys;
        this._mappedKeys = this._setupMappedKeys();

        this._bindAll();
    }

    /**
     * Static
     */
    static ipcRenderer = null;

    /**
     * Getters
     */
    get mappedKeys() {
        return this._mappedKeys;
    }

    /**
     * Public
     */
    start() {
        this._setupEventListeners();
    }

    destroy() {
        this._removeEventListeners();
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

    _bindAll() {
        // Public
        this.registerKey = this.registerKey.bind(this);
        this.destroy = this.destroy.bind(this);
        this.addEventListener = this.addEventListener.bind(this);
        this.removeEventListener = this.removeEventListener.bind(this);

        // Private
        this._keydownHandler = this._keydownHandler.bind(this);
        this._keyupHandler = this._keyupHandler.bind(this);
        this._machineKeydownHandler = this._machineKeydownHandler.bind(this);
        this._machineKeyupHandler = this._machineKeyupHandler.bind(this);
    }

    _setupEventListeners() {
        window.addEventListener('keydown', this._keydownHandler);
        window.addEventListener('keyup', this._keyupHandler);

        console.log(Arcade.ipcRenderer);

        Arcade.ipcRenderer?.on('keydown', this._machineKeydownHandler);
        Arcade.ipcRenderer?.on('keyup', this._machineKeyupHandler);
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
            };
        }
    }

    _keyupHandler(e) {
        for (const mappedKey in this._mappedKeys) {
            if (this._mappedKeys[mappedKey].keyboardKey === e.key) {
                this._mappedKeys[mappedKey].isPressed = false;
                this.dispatchEvent('keyup', this._mappedKeys[mappedKey]);
            };
        }
    }

    _machineKeydownHandler(event, key) {
        for (const mappedKey in this._mappedKeys) {
            if (this._mappedKeys[mappedKey].machineKey === key) {
                this._mappedKeys[mappedKey].isPressed = true;
                this.dispatchEvent('keydown', this._mappedKeys[mappedKey]);
            };
        }
    }

    _machineKeyupHandler(event, key) {
        for (const mappedKey in this._mappedKeys) {
            if (this._mappedKeys[mappedKey].machineKey === key) {
                this._mappedKeys[mappedKey].isPressed = false;
                this.dispatchEvent('keyup', this._mappedKeys[mappedKey]);
            };
        }
    }
}

export default Arcade;