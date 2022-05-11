export default class joystickManager {
    constructor(options = {}) {
        // Props
        this._joystick1 = options.joystick1;
        this._joystick2 = options.joystick2;

        // Setup
        this._ipcRenderer = null;

        this._bindAll();
        this._setupIpcRendererEventListeners();
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
        this._removeIpcRendererEventListeners();
    }

    /**
     * Private
     */
    _bindAll() {
        // Event handlers
        this._joystickMoveHandler = this._joystickMoveHandler.bind(this);
    }

    _setupIpcRendererEventListeners() {
        if (!this._ipcRenderer) return;
        this._ipcRenderer.on('joystick:move', this._joystickMoveHandler);
    }

    _removeIpcRendererEventListeners() {
        if (!this._ipcRenderer) return;
        this._ipcRenderer.removeListener('joystick:move', this._joystickMoveHandler);
    }

    /**
     * Handlers
     */
    _joystickMoveHandler(event, data) {
        if (data.id === 1) this._joystick1.moveHandler(data.position);
        if (data.id === 2) this._joystick2.moveHandler(data.position);
    }
}
