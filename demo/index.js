import Axis from '../src/index';

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

function setup() {
    Axis.registerKeys('q', 'a', 1);
    Axis.registerKeys('d', 'b', 1);
    Axis.registerKeys('z', 'c', 1);
    Axis.registerKeys('s', 'd', 1);

    Axis.registerKeys('ArrowLeft', 'a', 2);
    Axis.registerKeys('ArrowRight', 'b', 2);
    Axis.registerKeys('ArrowUp', 'c', 2);
    Axis.registerKeys('ArrowDown', 'd', 2);

    setupEventListeners();

    update();
}

function update() {
    position1.current.x = lerp(position1.current.x, position1.target.x, 1);
    position1.current.y = lerp(position1.current.y, position1.target.y, 1);

    position2.current.x = lerp(position2.current.x, position2.target.x, 1);
    position2.current.y = lerp(position2.current.y, position2.target.y, 1);

    box1.style.transform = `translate(${position1.current.x}px, ${position1.current.y}px)`;
    box2.style.transform = `translate(${position2.current.x}px, ${position2.current.y}px)`;

    requestAnimationFrame(update);
}

function setupEventListeners() {
    Axis.player1.addEventListener('keydown', player1keydownHandler);
    Axis.player1.addEventListener('keyup', player1keyupHandler);
    Axis.player1.addEventListener('joystick:move', joystickMoveHandler);
    Axis.player1.addEventListener('joystick:quickmove', joystickQuickMoveHandler);

    Axis.player2.addEventListener('keydown', player2keydownHandler);
    Axis.player2.addEventListener('keyup', player2keyupHandler);
}

function player1keydownHandler(e) {
    const speed = 50;
    let directionX = 0;
    let directionY = 0;

    if (e.key === 'a') {
        directionX = -1;

        // Axis.enableMouseInteraction();
    }

    if (e.key === 'b') {
        directionX = 1;

        // Axis.disableMouseInteraction();
    }

    if (e.key === 'c') {
        directionY = -1;
    }

    if (e.key === 'd') {
        directionY = 1;
    }

    position1.target.x += speed * directionX;
    position1.target.y += speed * directionY;
}

function player1keyupHandler(e) {
    //
}

function player2keydownHandler(e) {
    const speed = 50;
    let directionX = 0;
    let directionY = 0;

    if (e.key === 'a') {
        directionX = -1;
    }

    if (e.key === 'b') {
        directionX = 1;
    }

    if (e.key === 'c') {
        directionY = -1;
    }

    if (e.key === 'd') {
        directionY = 1;
    }

    position2.target.x += speed * directionX;
    position2.target.y += speed * directionY;
}

function player2keyupHandler(e) {
    //
}

function joystickMoveHandler(e) {
    // const speed = 30;
    // position1.target.x += e.position.x * speed;
    // position1.target.y += -e.position.y * speed;
}

function joystickQuickMoveHandler(e) {
    const speed = 30;
    if (e.direction === 'left') position1.target.x += speed * -1;
    if (e.direction === 'right') position1.target.x += speed;
    if (e.direction === 'up') position1.target.y += speed * -1;
    if (e.direction === 'down') position1.target.y += speed;
}

function lerp(v0, v1, t) {
    return v0 * (1 - t) + v1 * t;
}

setup();
