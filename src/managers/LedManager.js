// Configs
import config from '../configs';

// Modules
import Led from '../modules/Led';
import LedGroup from '../modules/LedGroup';

export default class LedManager {
    constructor(options = {}) {
        // Props

        // Setup
        this._ipcRenderer = null;
        this._leds = this._createLeds();
        this._ledGroups = this._createLedGroups();
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

        for (let i = 0; i < this._ledGroups.length; i++) {
            this._ledGroups[i].ipcRenderer = ipcRenderer;
        }
    }

    get leds() {
        return this._leds;
    }

    get ledGroups() {
        return this._ledGroups;
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

    getLedGroupByName(name) {
        const ledGroup = this._ledGroups.filter((ledGroup) => {
            return ledGroup.name === name;
        })[0];

        return ledGroup;
    }

    /**
     * Private
     */
    _createLeds() {
        const leds = [];

        for (let i = 0; i < config.leds.length; i++) {
            if (config.leds[i].type === 'group') continue;

            const led = new Led({
                name: config.leds[i].name,
                strip: config.leds[i].strip,
                index: config.leds[i].index,
            });

            leds.push(led);
        }

        return leds;
    }

    _createLedGroups() {
        const groups = [];

        for (let i = 0; i < config.leds.length; i++) {
            if (config.leds[i].type !== 'group') continue;

            const group = new LedGroup({
                name: config.leds[i].name,
                strip: config.leds[i].strip,
                indexStart: config.leds[i].indexStart,
                indexEnd: config.leds[i].indexEnd,
            });

            groups.push(group);
        }

        return groups;
    }
}
