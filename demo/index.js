import Arcade from '../src/index';

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
    Arcade.addEventListener('keydown', keydownHandler);
    Arcade.addEventListener('keyup', keyupHandler);
    Arcade.addEventListener('joystick:move', joystickMoveHandler);
    Arcade.addEventListener('joystick:press', joystickPressHandler);
    Arcade.addEventListener('joystick:release', joystickReleaseHandler);
}

function keydownHandler(e) {
    const speed = 50;
    const direction = e.machineKey === 'a' ? -1 : 1;
    position.x += speed * direction;
}

function keyupHandler(e) {

}

function joystickMoveHandler(e) {

}

function joystickPressHandler(e) {

}

function joystickReleaseHandler(e) {

}

setup();
