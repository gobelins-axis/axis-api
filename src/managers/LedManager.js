// Configs
import config from '../configs';

// Modules
import Led from '../modules/Led';

export default class LedManager {
    constructor(options = {}) {
        // Props

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

        for (let i = 0; i < this._leds.length; i++) {
            this._leds[i].ipcRenderer = ipcRenderer;
        }
    }

    get leds() {
        return this._leds;
    }

    /**
     * Public
     */
    getLedByName(name) {
        const led = this._leds.filter((led) => {
            return led.name === name;
        })[0];

        return led;
    }

    /**
     * Private
     */
    _createLeds() {
        const leds = [];

        for (let i = 0; i < config.leds.length; i++) {
            const led = new Led({
                name: config.leds[i].name,
                strip: config.leds[i].strip,
                index: config.leds[i].index,
            });
            leds.push(led);
        }

        return leds;
    }
}
