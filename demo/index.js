import Axis from '../src/index';

let isDefaultControls = true;
let time = 0;

const buttonsPlayer1 = [
    Axis.registerKeys('q', 'a', 1),
    Axis.registerKeys('d', 'b', 1),
    Axis.registerKeys('z', 'c', 1),
    Axis.registerKeys('s', 'd', 1),
];

const buttonsPlayer2 = [
    Axis.registerKeys('ArrowLeft', 'a', 2),
    Axis.registerKeys('ArrowRight', 'b', 2),
    Axis.registerKeys('ArrowUp', 'c', 2),
    Axis.registerKeys('ArrowDown', 'd', 2),
];

const player1 = Axis.createPlayer({
    id: 1,
    joystick: Axis.joystick1,
    buttons: buttonsPlayer1,
});

const player2 = Axis.createPlayer({
    id: 2,
    joystick: Axis.joystick2,
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

const input = document.querySelector('input');

setTimeout(() => {
    Axis.virtualKeyboard.open();
    Axis.virtualKeyboard.addEventListener('input', (e) => {
        input.value = e;
    });
}, 1000);

function setup() {
    Axis.ledManager.leds[0].setColor('rgb(255, 0, 0)');
    Axis.ledManager.leds[1].setColor('rgb(255, 0, 0)');
    Axis.ledManager.leds[2].setColor('rgb(255, 0, 0)');
    Axis.ledManager.leds[3].setColor('rgb(255, 0, 0)');
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

    if (position1.current.y < -window.innerHeight / 2) {
        switchControls();
    } else {
        resetControls();
    }

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
    player1.addEventListener('joystick:move', joystickMoveHandler);
    player1.addEventListener('joystick:quickmove', joystickQuickMoveHandler);

    player2.addEventListener('keydown', player2keydownHandler);
    player2.addEventListener('keyup', player2keyupHandler);
}

function player1keydownHandler(e) {
    const speed = 50;
    let directionX = 0;
    let directionY = 0;

    Axis.ledManager.leds[0].setColor('rgb(255, 255, 255)');
    Axis.ledManager.leds[1].setColor('rgb(255, 255, 255)');
    Axis.ledManager.leds[2].setColor('rgb(255, 255, 255)');
    Axis.ledManager.leds[3].setColor('rgb(255, 255, 255)');

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

    position1.target.x += speed * directionX;
    position1.target.y += speed * directionY;

    // Leaderboard tests
    console.log('Pushing score');

    const leaderboard = Axis.createLeaderboard({
        id: 'Beyond-Memories-76b9304f-a7f8-48c7-867b-20f1dda3f2c8',
    });

    leaderboard.postScore({
        username: 'coucou',
        value: 100,
    }).then(() => {
        leaderboard.getScores().then((response) => {
            console.log(response);
        });
    });
}

function player1keyupHandler(e) {
    //
    Axis.ledManager.leds[0].setColor('rgb(255, 0, 0)');
    Axis.ledManager.leds[1].setColor('rgb(255, 0, 0)');
    Axis.ledManager.leds[2].setColor('rgb(255, 0, 0)');
    Axis.ledManager.leds[3].setColor('rgb(255, 0, 0)');
}

function player2keydownHandler(e) {
    const speed = 50;
    let directionX = 0;
    let directionY = 0;

    if (e.key === 'a') directionX = -1;

    if (e.key === 'b') directionX = 1;

    if (e.key === 'c') directionY = -1;

    if (e.key === 'd') directionY = 1;

    position2.target.x += speed * directionX;
    position2.target.y += speed * directionY;
}

function player2keyupHandler(e) {
    //
}

function joystickMoveHandler(e) {
    const speed = 30;
    position1.target.x += e.position.x * speed;
    position1.target.y += -e.position.y * speed;
}

function joystickQuickMoveHandler(e) {
    // const speed = 30;
    // if (e.direction === 'left') position1.target.x += speed * -1;
    // if (e.direction === 'right') position1.target.x += speed;
    // if (e.direction === 'up') position1.target.y += speed * -1;
    // if (e.direction === 'down') position1.target.y += speed;
}

function lerp(v0, v1, t) {
    return v0 * (1 - t) + v1 * t;
}

setup();
