// Vendor
import Keyboard from 'simple-keyboard';
import keyNavigation from 'simple-keyboard-key-navigation';

// Components
import '../components/VirtualKeyboardComponent';

// Templates
import iconX from '../templates/icons/icon-x.html';
import iconI from '../templates/icons/icon-i.html';
import iconS from '../templates/icons/icon-s.html';

// Utils
import EventDispatcher from '../utils/EventDispatcher';

export default class VirtualKeyboard extends EventDispatcher {
    constructor(options = {}) {
        super();

        // Props
        this._joystick1 = options.joystick1;
        this._joystick2 = options.joystick2;
        this._buttonManager = options.buttonManager;

        // Setup
        this._isOpen = false;

        this._bindAll();

        this._component = this._createComponent();
        this._keyboard = this._createKeyboard();

        this._setupEventListeners();
    }

    /**
     * Getters
     */
    get isOpen() {
        return this._isOpen;
    }

    /**
     * Public
     */
    open() {
        this._isOpen = true;
        this._keyboard.clearInput();
        if (!this._component.classList.contains('is-open')) this._component.classList.add('is-open');
    }

    close() {
        this._isOpen = false;
        if (this._component.classList.contains('is-open')) this._component.classList.remove('is-open');
    }

    clear() {
        // this._keyboard.clearInput();
    }

    getInput() {
        return this._keyboard.getInput();
    }

    /**
     * Private
     */
    _createComponent() {
        const component = document.createElement('axis-virtual-keyboard');
        document.documentElement.appendChild(component);
        return component.shadowRoot.childNodes[1];
    }

    _createKeyboard() {
        const keyboard = new Keyboard(this._component, {
            // Props
            enableKeyNavigation: true,
            useMouseEvents: false,
            modules: [keyNavigation],
            layout: {
                default: [
                    '1 2 3 4 5 6 7 8 9 0 - = {bksp}',
                    'a z e r t y u i o p ?',
                    'q s d f g h j k l m \'',
                    'w x c v b n , . ; / \\',
                    '@ {space} {enter}',
                ],
            },
            display: {
                '{bksp}': `<span>Effacer</span> ${iconX}`,
                '{enter}': `<span>Valider</span> ${iconS}`,
                '{space}': `<span>Espace</span> ${iconI}`,
            },
            // Events
            onChange: this.inputHandler,
            onKeyPress: this._keypressHandler,
            onModulesLoaded: this._modulesLoadedHandler,
        });

        return keyboard;
    }

    _clickButton(key) {
        const button = this._keyboard.buttonElements[key][0];
        this._keyboard.handleButtonClicked(key, { target: button });
        if (!button.classList.contains('active')) button.classList.add('active');
        button.click();
    }

    _clickActiveButton() {
        const button = this._keyboard.modules.keyNavigation.markedBtn;
        const key = button.getAttribute('data-skbtn');
        this._keyboard.handleButtonClicked(key, { target: button });
        if (!button.classList.contains('active')) button.classList.add('active');
        button.click();
    }

    _bindAll() {
        this.inputHandler = this.inputHandler.bind(this);
        this._keypressHandler = this._keypressHandler.bind(this);
        this._modulesLoadedHandler = this._modulesLoadedHandler.bind(this);
        this._joystickQuickmoveHandler = this._joystickQuickmoveHandler.bind(this);
        this._keydownHandler = this._keydownHandler.bind(this);
        this._keyupHandler = this._keyupHandler.bind(this);
        this._machineKeydownHandler = this._machineKeydownHandler.bind(this);
        this._machineKeyupHandler = this._machineKeyupHandler.bind(this);
    }

    _setupEventListeners() {
        this._joystick1.addEventListener('joystick:quickmove', this._joystickQuickmoveHandler);
        this._buttonManager.addEventListener('keydown', this._machineKeydownHandler);
        this._buttonManager.addEventListener('keyup', this._machineKeyupHandler);
        window.addEventListener('keydown', this._keydownHandler);
        window.addEventListener('keyup', this._keyupHandler);
    }

    inputHandler(e) {
        if (!this._isOpen) return;

        this.dispatchEvent('input', e);
    }

    _keypressHandler(e) {
        if (!this._isOpen) return;

        this.dispatchEvent('keypress', e);

        if (e === '{enter}') this._validatedHandler(e);
    }

    _validatedHandler(e) {
        this.dispatchEvent('validate', e);
    }

    _modulesLoadedHandler(e) {
        //
    }

    _joystickQuickmoveHandler(e) {
        if (!this._isOpen) return;

        if (e.direction === 'up') this._keyboard.modules.keyNavigation.up();
        if (e.direction === 'down') this._keyboard.modules.keyNavigation.down();
        if (e.direction === 'left') this._keyboard.modules.keyNavigation.left();
        if (e.direction === 'right') this._keyboard.modules.keyNavigation.right();
    }

    _keydownHandler(e) {
        if (!this._isOpen) return;

        if (e.key === 'ArrowUp') this._keyboard.modules.keyNavigation.up();
        if (e.key === 'ArrowDown') this._keyboard.modules.keyNavigation.down();
        if (e.key === 'ArrowLeft') this._keyboard.modules.keyNavigation.left();
        if (e.key === 'ArrowRight') this._keyboard.modules.keyNavigation.right();
        if (e.key === 'Enter') this._clickActiveButton();
    }

    _keyupHandler(e) {
        if (!this._isOpen) return;

        const activeButtons = this._component.querySelectorAll('.active');

        for (let i = 0; i < activeButtons.length; i++) {
            const button = activeButtons[i];
            if (button.classList.contains('active')) button.classList.remove('active');
        }
    }

    _machineKeydownHandler(e) {
        if (!this._isOpen) return;

        if (e.key === 'a' && e.id === 1) this._clickActiveButton();
        if (e.key === 'x' && e.id === 1) this._clickButton('{bksp}');
        if (e.key === 'i' && e.id === 1) this._clickButton('{space}');
        if (e.key === 's' && e.id === 1) this._clickButton('{enter}');
    }

    _machineKeyupHandler() {
        if (!this._isOpen) return;

        const activeButtons = this._component.querySelectorAll('.active');

        for (let i = 0; i < activeButtons.length; i++) {
            const button = activeButtons[i];
            if (button.classList.contains('active')) button.classList.remove('active');
        }
    }
}
