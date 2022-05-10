import Arcade from '../src/index';

const box = document.querySelector('.js-box');
const position = { x: 0, y: 0 };

function setup() {
    Arcade.registerKeys('ArrowLeft', 'a', 1);
    Arcade.registerKeys('ArrowRight', 'b', 1);

    Arcade.registerKeys('q', 'a', 2);
    Arcade.registerKeys('d', 'b', 2);

    setupEventListeners();

    update();
}

function update() {
    requestAnimationFrame(update);
}

function setupEventListeners() {

}

setup();
