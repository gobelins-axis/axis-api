export default class joystickManager {
    constructor() {
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
    _joystickMoveHandler() {
        // Send event to the right joystick
    }
}
