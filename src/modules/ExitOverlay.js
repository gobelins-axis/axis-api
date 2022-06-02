// Styles
import '../styles/exit-overlay.css';
import EventDispatcher from '../utils/EventDispatcher';

export default class ExitOverlay extends EventDispatcher {
    constructor(options = {}) {
        super();

        // Props
        this._buttonManager = options.buttonManager;

        // Setup
        this._active = false;
        this._container = document.body;
        this._element = this._createElement();
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
        if (!this._element.classList.contains('is-visible')) this._element.classList.add('is-visible');
    }

    _hide() {
        if (this._element.classList.contains('is-visible')) this._element.classList.remove('is-visible');
    }

    _createElement() {
        const element = document.createElement('div');
        element.classList.add('exit-overlay');

        const message = document.createElement('p');
        message.innerHTML = 'Êtes-vous sûr de vouloir quitter ?';
        message.classList.add('message');

        element.appendChild(message);

        this._container.appendChild(element);

        return element;
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
