import Arcade from '../src/index';
// import Arcade from 'arcade-api';

const box = document.querySelector('.js-box');
const position = { x: 0, y: 0 };

function setup() {
    Arcade.registerKey('a', 'ArrowLeft');
    Arcade.registerKey('b', 'ArrowRight');

    setupEventListeners();

    update();
}

function update() {
    box.style.transform = `translateX(${position.x}px)`;

    requestAnimationFrame(update);
}

function setupEventListeners() {
    Arcade.addEventListener('keydown', mousedownHandler);
    Arcade.addEventListener('keyup', mouseupHandler);
}

function mousedownHandler(e) {
    const speed = 50;
    const direction = e.machineKey === 'a' ? -1 : 1;
    position.x += speed * direction;
}

function mouseupHandler(e) {
    
}

setup();