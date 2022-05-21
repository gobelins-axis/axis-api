// Vendor
import Color from 'color';

export default class Led {
    constructor(options = {}) {
        // Options
        this._name = options.name;
        this._strip = options.strip;
        this._index = options.index;

        // Setup
        this._ipcRenderer = null;
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

    get name() {
        return this._name;
    }

    get strip() {
        return this._strip;
    }

    get index() {
        return this._index;
    }

    /**
     * Public
     */
    setColor(colorData) {
        if (!this._ipcRenderer) return;

        const color = new Color(colorData).object();

        // Send data formatted like strip;index;red,green,blue
        const data = `${this._strip};${this._index};${color.r},${color.g},${color.b}\n`;

        this._ipcRenderer.send('led:set', { data });
    }

    /**
     * Private
     */

    /**
     * Utils
     */
}
