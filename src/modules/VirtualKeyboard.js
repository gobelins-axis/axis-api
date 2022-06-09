
// Styles
import '../styles/simple-keyboard-candidate-box.css';
import '../styles/simple-keyboard.css';

// Vendor
import Keyboard from 'simple-keyboard';
import keyNavigation from 'simple-keyboard-key-navigation';

// Utils
import EventDispatcher from '../utils/EventDispatcher';

const iconA = '<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.0039 3.61321e-07C16.8503 -0.00076996 12.7898 1.2302 9.33587 3.53724C5.88192 5.84428 3.18969 9.12375 1.59966 12.9609C0.00962005 16.7981 -0.406806 21.0206 0.403044 25.0945C1.21289 29.1683 3.21264 32.9106 6.14939 35.8478C9.08614 38.7851 12.828 40.7856 16.9017 41.5962C20.9754 42.4068 25.198 41.9911 29.0355 40.4018C32.8729 38.8125 36.1529 36.1209 38.4606 32.6674C40.7683 29.2139 42 25.1536 42 21C42 15.4311 39.788 10.0903 35.8506 6.15213C31.9132 2.21398 26.5728 0.00103316 21.0039 3.61321e-07ZM32.8242 32.8359H28.3064C26.8694 32.8349 25.4748 32.3492 24.3482 31.4572C23.2215 30.5653 22.4288 29.3192 22.0983 27.9208C22.09 27.8826 22.0689 27.8483 22.0384 27.8237C22.0079 27.7992 21.97 27.7858 21.9308 27.7858C21.8917 27.7858 21.8537 27.7992 21.8233 27.8237C21.7928 27.8483 21.7717 27.8826 21.7634 27.9208C21.5284 28.9296 21.0508 29.8659 20.3722 30.6484C19.6935 31.4309 18.8342 32.036 17.8687 32.4113C17.0861 32.7157 16.2505 32.86 15.4112 32.8359C13.7772 32.7908 12.2224 32.1221 11.0658 30.9669C9.90919 29.8118 9.23854 28.2578 9.1914 26.6239C9.16302 25.7843 9.30752 24.9478 9.61592 24.1663C9.61489 24.1521 9.61489 24.1378 9.61592 24.1235C10.0127 23.1512 10.6921 22.3204 11.5663 21.7385C12.4405 21.1567 13.4692 20.8505 14.5193 20.8598H20.9883C21.1433 20.8598 21.2919 20.7982 21.4014 20.6887C21.511 20.5791 21.5725 20.4305 21.5725 20.2756C21.5725 20.1206 21.511 19.9721 21.4014 19.8625C21.2919 19.7529 21.1433 19.6914 20.9883 19.6914H9.26151C9.56647 16.9357 10.8292 14.3744 12.8294 12.4545C14.8296 10.5345 17.4403 9.37771 20.2062 9.18577C22.9721 8.99384 25.7176 9.779 27.9638 11.4043C30.21 13.0296 31.8144 15.3918 32.497 18.079C32.6631 18.9996 32.7723 19.9296 32.8242 20.8637V32.8359Z" fill="white"/></svg>';
const iconX = '<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.0039 3.61321e-07C16.8503 -0.00076996 12.7898 1.2302 9.33587 3.53724C5.88192 5.84428 3.18969 9.12375 1.59966 12.9609C0.00962005 16.7981 -0.406806 21.0206 0.403044 25.0945C1.21289 29.1683 3.21264 32.9106 6.14939 35.8478C9.08613 38.7851 12.828 40.7856 16.9017 41.5962C20.9754 42.4068 25.198 41.9911 29.0355 40.4018C32.8729 38.8125 36.1529 36.1209 38.4606 32.6674C40.7683 29.2139 42 25.1536 42 21C42.0005 18.2424 41.4578 15.5117 40.4029 12.9639C39.348 10.4161 37.8015 8.10107 35.8518 6.15099C33.902 4.20091 31.5873 2.654 29.0397 1.59861C26.492 0.543211 23.7615 3.1388e-07 21.0039 3.61321e-07ZM32.8203 19.6875H26.2773C26.1201 19.6836 25.9667 19.7355 25.8441 19.8338C25.7215 19.9322 25.6377 20.0707 25.6074 20.225C25.5921 20.3165 25.597 20.4104 25.6216 20.4999C25.6463 20.5894 25.6902 20.6724 25.7503 20.7433C25.8103 20.8141 25.8851 20.8709 25.9694 20.9099C26.0537 20.9489 26.1455 20.969 26.2383 20.9688H32.8203V32.8203H27.6871C24.4857 32.7112 21.7634 30.873 21.0662 27.9208C21.0563 27.8834 21.0343 27.8504 21.0037 27.8268C20.973 27.8032 20.9355 27.7904 20.8968 27.7904C20.8581 27.7904 20.8205 27.8032 20.7899 27.8268C20.7593 27.8504 20.7373 27.8834 20.7274 27.9208C20.3976 29.3189 19.6057 30.5648 18.4797 31.4569C17.3537 32.3489 15.9597 32.8348 14.5232 32.8359H9.18751C9.21087 32.9293 9.18751 20.9688 9.18751 20.9688H15.2982C15.4537 20.9718 15.6052 20.92 15.7262 20.8224C15.8473 20.7248 15.9302 20.5878 15.9603 20.4353C15.9762 20.3434 15.9718 20.2492 15.9475 20.1592C15.9231 20.0692 15.8793 19.9856 15.8191 19.9143C15.759 19.843 15.684 19.7858 15.5994 19.7466C15.5148 19.7074 15.4226 19.6873 15.3294 19.6875H9.18751V9.14855H14.679C16.086 9.1865 17.441 9.68875 18.5329 10.577C19.6248 11.4653 20.3922 12.6898 20.7157 14.0597C20.7219 14.1002 20.7423 14.1372 20.7734 14.1639C20.8045 14.1906 20.8441 14.2053 20.8851 14.2053C20.9261 14.2053 20.9657 14.1906 20.9968 14.1639C21.0279 14.1372 21.0484 14.1002 21.0545 14.0597C21.3844 12.662 22.1765 11.4165 23.3025 10.5252C24.4286 9.63382 25.8226 9.14875 27.2587 9.14855H32.8203V19.6875Z" fill="white"/></svg>';
const iconI = '<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.0039 3.61321e-07C16.8503 -0.00076996 12.7898 1.2302 9.33586 3.53724C5.88192 5.84428 3.18969 9.12375 1.59965 12.9609C0.00961133 16.7981 -0.406803 21.0206 0.403047 25.0945C1.2129 29.1683 3.21264 32.9106 6.14939 35.8478C9.08614 38.7851 12.828 40.7856 16.9017 41.5962C20.9754 42.4068 25.198 41.9911 29.0355 40.4018C32.8729 38.8125 36.1529 36.1209 38.4606 32.6674C40.7683 29.2139 42 25.1536 42 21C42 15.4311 39.788 10.0903 35.8506 6.15213C31.9132 2.21398 26.5728 0.00103316 21.0039 3.61321e-07ZM28.0143 33.8835H17.5182V24.957C17.5172 24.3696 17.2833 23.8065 16.868 23.3911C16.4526 22.9757 15.8895 22.7419 15.3021 22.7409H11.8242V13.8221H17.2183C19.0378 13.8222 20.8272 14.286 22.4177 15.1697L23.664 15.9486C25.0135 16.9509 26.1096 18.2554 26.8644 19.7575C27.6191 21.2596 28.0116 22.9176 28.0104 24.5986L28.0143 33.8835ZM26.3668 15.8123C25.6076 15.8138 24.865 15.5901 24.233 15.1693C23.601 14.7485 23.1081 14.1497 22.8167 13.4486C22.5253 12.7476 22.4484 11.9758 22.5959 11.231C22.7433 10.4862 23.1085 9.80197 23.645 9.26484C24.1816 8.7277 24.8655 8.36187 25.6102 8.21365C26.3548 8.06544 27.1266 8.14151 27.828 8.43223C28.5294 8.72295 29.1287 9.21525 29.5501 9.8468C29.9715 10.4783 30.1961 11.2207 30.1953 11.98C30.1901 12.9947 29.7832 13.9661 29.0634 14.6814C28.3437 15.3967 27.3699 15.7978 26.3552 15.7967L26.3668 15.8123Z" fill="white"/></svg>';
const iconS = '<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.0039 3.61321e-07C16.8503 -0.00076996 12.7898 1.2302 9.33587 3.53724C5.88192 5.84428 3.18969 9.12375 1.59966 12.9609C0.00962005 16.7981 -0.406806 21.0206 0.403044 25.0945C1.21289 29.1683 3.21264 32.9106 6.14939 35.8478C9.08613 38.7851 12.828 40.7856 16.9017 41.5962C20.9754 42.4068 25.198 41.9911 29.0355 40.4018C32.8729 38.8125 36.1529 36.1209 38.4606 32.6674C40.7683 29.2139 42 25.1536 42 21C42.0005 18.2424 41.4578 15.5117 40.4029 12.9639C39.348 10.4161 37.8015 8.10107 35.8518 6.15099C33.902 4.20091 31.5873 2.654 29.0397 1.59861C26.492 0.543211 23.7615 3.1388e-07 21.0039 3.61321e-07ZM32.8398 19.6408H23.3134C23.1585 19.6408 23.0099 19.7023 22.9003 19.8119C22.7908 19.9214 22.7292 20.07 22.7292 20.225C22.7292 20.3799 22.7908 20.5285 22.9003 20.6381C23.0099 20.7476 23.1585 20.8092 23.3134 20.8092H26.8498C28.3793 20.8094 29.8511 21.3936 30.9643 22.4425C32.0776 23.4914 32.7484 24.9257 32.8398 26.4525V27.1691C32.7526 28.6393 32.1279 30.026 31.0847 31.0655C30.0414 32.105 28.6523 32.7246 27.1819 32.8063C25.7114 32.8881 24.2622 32.4264 23.1101 31.509C21.958 30.5916 21.1834 29.2826 20.9338 27.8312C20.9338 27.8085 20.9248 27.7867 20.9087 27.7706C20.8926 27.7546 20.8708 27.7455 20.8481 27.7455C20.8254 27.7455 20.8036 27.7546 20.7875 27.7706C20.7715 27.7867 20.7624 27.8085 20.7624 27.8312C20.5218 29.2257 19.7962 30.4903 18.7138 31.4018C17.6313 32.3132 16.2615 32.8129 14.8464 32.8125H9.16025V22.367H18.7411C18.7811 22.3729 18.8218 22.3729 18.8618 22.367C19.0168 22.3505 19.1588 22.2731 19.2567 22.1518C19.3545 22.0306 19.4002 21.8755 19.3837 21.7205C19.3672 21.5656 19.2898 21.4235 19.1685 21.3257C19.0473 21.2278 18.8921 21.1821 18.7372 21.1986H15.2086C14.4205 21.1991 13.6401 21.0442 12.9119 20.7427C12.1837 20.4413 11.5222 19.9991 10.9651 19.4417C10.408 18.8842 9.96627 18.2224 9.66526 17.494C9.36426 16.7656 9.20985 15.9851 9.21088 15.197C9.21088 13.6063 9.84279 12.0807 10.9676 10.9559C12.0924 9.83109 13.6179 9.19918 15.2086 9.19918H32.8398V19.6408Z" fill="white"/></svg>';

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

        this._container = this._createContainer();
        this._keyboard = this._createKeyboard();

        this._setupEventListeners();
    }

    /**
     * Public
     */
    open() {
        this._isOpen = true;
        this._keyboard.clearInput();
        if (!this._container.classList.contains('open')) this._container.classList.add('open');
    }

    close() {
        this._isOpen = false;
        if (this._container.classList.contains('open')) this._container.classList.remove('open');
    }

    clear() {
        this._keyboard.clearInput();
    }

    getInput() {
        return this._keyboard.getInput();
    }

    /**
     * Private
     */
    _createContainer() {
        const container = document.createElement('div');
        container.classList.add('simple-keyboard');

        const indicator = document.createElement('div');
        indicator.classList.add('indicator');

        const svg = iconA;
        indicator.innerHTML = `<span>Sélectionner</span> ${svg}`;

        container.appendChild(indicator);

        document.body.appendChild(container);
        return container;
    }

    _createKeyboard() {
        const keyboard = new Keyboard({
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

        const activeButtons = this._container.querySelectorAll('.active');

        for (let i = 0; i < activeButtons.length; i++) {
            const button = activeButtons[i];
            if (button.classList.contains('active')) button.classList.remove('active');
        }
    }

    _machineKeydownHandler(e) {
        if (!this._isOpen) return;

        if (e.key === 'a' && e.id === 1) this._clickActiveButton();
        if (e.key === 'b' && e.id === 1) this._clickButton('{bksp}');
        if (e.key === 'c' && e.id === 1) this._clickButton('{space}');
        if (e.key === 'd' && e.id === 1) this._clickButton('{enter}');
    }

    _machineKeyupHandler() {
        if (!this._isOpen) return;

        const activeButtons = this._container.querySelectorAll('.active');

        for (let i = 0; i < activeButtons.length; i++) {
            const button = activeButtons[i];
            if (button.classList.contains('active')) button.classList.remove('active');
        }
    }
}
