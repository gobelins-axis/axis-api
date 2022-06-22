import Axis from '../src/index';

let isDefaultControls = true;
let time = 0;

const gamepadEmulator1 = Axis.createGamepadEmulator(0);
const gamepadEmulator2 = Axis.createGamepadEmulator(1);

Axis.joystick1.setGamepadEmulatorJoystick(gamepadEmulator1, 0);
Axis.joystick2.setGamepadEmulatorJoystick(gamepadEmulator1, 1);
// Axis.joystick2.setGamepadEmulatorJoystick(gamepadEmulator2, 0);

Axis.registerGamepadEmulatorKeys(gamepadEmulator1, 0, 'a', 1);
Axis.registerGamepadEmulatorKeys(gamepadEmulator2, 0, 'a', 2);

const buttonsPlayer1 = [
    Axis.registerKeys('q', 'a', 1),
    Axis.registerKeys('d', 'x', 1),
    Axis.registerKeys('z', 'i', 1),
    Axis.registerKeys('s', 's', 1),
];

const buttonsPlayer2 = [
    Axis.registerKeys('ArrowLeft', 'a', 2),
    Axis.registerKeys('ArrowRight', 'x', 2),
    Axis.registerKeys('ArrowUp', 'i', 2),
    Axis.registerKeys('ArrowDown', 's', 2),
];

const player1 = Axis.createPlayer({
    id: 1,
    joysticks: Axis.joystick1,
    buttons: buttonsPlayer1,
});

const player2 = Axis.createPlayer({
    id: 2,
    joysticks: Axis.joystick2,
    buttons: buttonsPlayer2,
});

const box1 = document.querySelector('.js-box-1');
const position1 = {
    target: { x: 0, y: 0 },
    current: { x: 0, y: 0 },
};

const box2 = document.querySelector('.js-box-2');
const position2 = {
    target: { x: 0, y: 0 },
    current: { x: 0, y: 0 },
};

const center = document.querySelector('.js-joystick-center');
const magnitude = document.querySelector('.js-joystick-magnitude');

function setup() {
    setupEventListeners();
    update();
}

function update() {
    gamepadEmulator1.update();
    gamepadEmulator2.update();

    position1.current.x = lerp(position1.current.x, position1.target.x, 1);
    position1.current.y = lerp(position1.current.y, position1.target.y, 1);

    position2.current.x = lerp(position2.current.x, position2.target.x, 1);
    position2.current.y = lerp(position2.current.y, position2.target.y, 1);

    box1.style.transform = `translate(${position1.current.x}px, ${position1.current.y}px)`;
    box2.style.transform = `translate(${position2.current.x}px, ${position2.current.y}px)`;

    requestAnimationFrame(update);

    time++;
}

function resetControls() {
    if (isDefaultControls) return;
    player1.buttons = buttonsPlayer1;
    player2.buttons = buttonsPlayer2;
    isDefaultControls = true;
}

function switchControls() {
    if (!isDefaultControls) return;
    player1.buttons = buttonsPlayer2;
    player2.buttons = buttonsPlayer1;
    isDefaultControls = false;
}

function setupEventListeners() {
    player1.addEventListener('keydown', player1keydownHandler);
    player1.addEventListener('keyup', player1keyupHandler);
    player1.addEventListener('joystick:move', player1joystickMoveHandler);

    player2.addEventListener('keydown', player2keydownHandler);
    player2.addEventListener('keyup', player2keyupHandler);
    player2.addEventListener('joystick:move', player2joystickMoveHandler);
}

function player1keydownHandler(e) {
    const speed = 50;
    let directionX = 0;
    let directionY = 0;

    if (e.key === 'a') {
        directionX = -1;
    }

    if (e.key === 'x') {
        directionX = 1;
    }

    if (e.key === 'i') {
        directionY = -1;
    }

    if (e.key === 's') {
        directionY = 1;
    }

    position1.target.x += speed * directionX;
    position1.target.y += speed * directionY;
}

function player1keyupHandler(e) {
}

function player2keydownHandler(e) {
    const speed = 50;
    let directionX = 0;
    let directionY = 0;

    if (e.key === 'a') directionX = -1;

    if (e.key === 'x') directionX = 1;

    if (e.key === 'i') directionY = -1;

    if (e.key === 's') directionY = 1;

    position2.target.x += speed * directionX;
    position2.target.y += speed * directionY;
}

function player2keyupHandler(e) {
    //
}

function player1joystickMoveHandler(e) {
    const speed = 10;
    position1.target.x += e.position.x * speed;
    position1.target.y += -e.position.y * speed;
    position1.current.x += e.position.x * speed;
    position1.current.y += -e.position.y * speed;
}

function player2joystickMoveHandler(e) {
    const speed = 10;
    position2.target.x += e.position.x * speed;
    position2.target.y += -e.position.y * speed;
    position2.current.x += e.position.x * speed;
    position2.current.y += -e.position.y * speed;

    center.style.transform = `translate(${e.position.x * 250}px, ${-e.position.y * 250}px)`;
    magnitude.style.transform = `scale(${e.position.magnitude})`;
}

function lerp(v0, v1, t) {
    return v0 * (1 - t) + v1 * t;
}

setup();
