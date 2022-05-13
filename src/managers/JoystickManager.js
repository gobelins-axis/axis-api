// Modules
import Joystick from '../modules/Joystick';

export default class joystickManager {
    constructor(options = {}) {
        // Setup
        this._joystick1 = this._createJoystick1();
        this._joystick2 = this._createJoystick2();
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
        this._joystick1.ipcRenderer = ipcRenderer;
        this._joystick2.ipcRenderer = ipcRenderer;
        this._setupIpcRendererEventListeners();
    }

    get joystick1() {
        return this._joystick1;
    }

    get joystick2() {
        return this._joystick2;
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
    _createJoystick1() {
        const joystick1 = new Joystick({ id: 1 });
        return joystick1;
    }

    _createJoystick2() {
        const joystick2 = new Joystick({ id: 2 });
        return joystick2;
    }

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
        // if (data.id === 2) this._joystick2.moveHandler(data.position);
    }
}
