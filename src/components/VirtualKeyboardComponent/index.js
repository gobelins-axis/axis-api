import template from './template.html';
import style from './style.css';

export default class VirtualKeyboardComponent extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });

        this._createTemplate();
    }

    /**
     * Private
     */
    _createTemplate() {
        const templateElement = document.createElement('template');
        templateElement.innerHTML = `<style type="text/css">${style}</style>${template}`;
        this.shadowRoot.appendChild(templateElement.content.cloneNode(true));
    }
}

window.customElements.define('axis-virtual-keyboard', VirtualKeyboardComponent);
