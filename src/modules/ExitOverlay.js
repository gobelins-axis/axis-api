// Utils
import EventDispatcher from '../utils/EventDispatcher';

// Components
import '../components/ExitOverlayComponent';

export default class ExitOverlay extends EventDispatcher {
    constructor(options = {}) {
        super();

        // Props
        this._buttonManager = options.buttonManager;

        // Setup
        this._active = false;
        this._component = this._createComponent();

        this._buttonValidation1 = this._buttonManager.getButton('a', 1);
        this._buttonValidation2 = this._buttonManager.getButton('a', 2);
        this._buttonCancelation1 = this._buttonManager.getButton('b', 1);
        this._buttonCancelation2 = this._buttonManager.getButton('b', 2);

        this._bindAll();
        this._setupEventListeners();
    }

    /**
     * Private
     */
    _show() {
        if (!this._component.classList.contains('is-visible')) this._component.classList.add('is-visible');
    }

    _hide() {
        if (this._component.classList.contains('is-visible')) this._component.classList.remove('is-visible');
    }

    _createComponent() {
        const component = document.createElement('axis-exit-overlay');
        document.documentElement.appendChild(component);

        return component.shadowRoot.childNodes[1];
    }

    _bindAll() {
        this._keydownHandler = this._keydownHandler.bind(this);
        this._homeKeyupHandler = this._homeKeyupHandler.bind(this);
        this._validationKeydownHandler = this._validationKeydownHandler.bind(this);
        this._cancelationKeydownHandler = this._cancelationKeydownHandler.bind(this);
    }

    _setupEventListeners() {
        window.addEventListener('keydown', this._keydownHandler);

        this._buttonManager.addEventListener('home:keyup', this._homeKeyupHandler);

        this._buttonValidation1.addEventListener('keydown', this._validationKeydownHandler);
        this._buttonValidation2.addEventListener('keydown', this._validationKeydownHandler);
        this._buttonCancelation1.addEventListener('keydown', this._cancelationKeydownHandler);
        this._buttonCancelation2.addEventListener('keydown', this._cancelationKeydownHandler);
    }

    _keydownHandler(e) {
        if (e.key !== 'Escape') return;

        this._homeKeyupHandler();
    }

    _homeKeyupHandler() {
        if (!this._active) {
            this._active = true;
            this.dispatchEvent('exit:attempted');
            this._show();
        } else {
            this.dispatchEvent('exit:completed');
            this._hide();
        }
    }

    _validationKeydownHandler() {
        if (!this._active) return;

        this.dispatchEvent('exit:completed');
        this._hide();
    }

    _cancelationKeydownHandler() {
        if (!this._active) return;

        this._active = false;
        this.dispatchEvent('exit:canceled');
        this._hide();
    }
}
