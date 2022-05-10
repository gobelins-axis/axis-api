// Utils
import EventDispatcher from '../utils/EventDispatcher';

// Config
import config from '../configs/joystick';

// Modules
import normalizeJoystickSignal from '../utils/normalizeJoystickSignal';

export default class Joystick extends EventDispatcher {
    constructor(options = {}) {
        super();

        // Props
        this._id = options.id;

        // Setup
        this._ipcRenderer = null;
        this._deadzone = config.deadzone;
    }

    /**
     * Getters & Setters
     */
    get ipcRenderer() {
        return this._ipcRenderer;
    }

    set ipcRenderer(ipcRenderer) {
        this._ipcRenderer = ipcRenderer;
    }

    get deadzone() {
        return this._deadzone;
    }

    set deadzone(deadzone) {
        this._deadzone = deadzone;
    }
}
