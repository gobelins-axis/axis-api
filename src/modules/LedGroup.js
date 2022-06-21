// Modules
import Led from './Led';

export default class LedGroup {
    constructor(options = {}) {
        // Options
        this._name = options.name;
        this._strip = options.strip;
        this._indexStart = options.indexStart;
        this._indexEnd = options.indexEnd;

        // Setup
        this._ipcRenderer = null;
        this._leds = this._createLeds();
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

    get indexStart() {
        return this._indexStart;
    }

    get indexEnd() {
        return this._indexEnd;
    }

    get leds() {
        return this._leds;
    }

    /**
     * Public
     */
    setColor(colorData) {
        for (let i = 0; i < this._leds.length; i++) {
            this._leds[i].setColor(colorData);
        }
    }

    /**
     * Private
     */
    _createLeds() {
        const leds = [];

        for (let i = this._indexStart; i <= this._indexEnd; i++) {
            const led = new Led({
                name: this._name,
                strip: this._strip,
                index: i,
            });
            leds.push(led);
        }

        return leds;
    }

    /**
     * Utils
     */
}
