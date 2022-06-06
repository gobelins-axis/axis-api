# 📦️ Axis API

An API to help creators building their game for our Axis machine (not existing yet...).

## Installation

```bash
npm i github:gobelins-axis/axis-api
```

## Usage

### Game usage

#### Handling buttons

```js
import Axis from "axis-api";

// Map a Machine Button to a Keyboard Key
Axis.registerKeys("q", "a", 1);
Axis.registerKeys("d", "b", 1);
Axis.registerKeys("z", "c", 1);
Axis.registerKeys("s", "d", 1);

Axis.registerKeys("ArrowLeft", "a", 2);
Axis.registerKeys("ArrowRight", "b", 2);
Axis.registerKeys("ArrowUp", "c", 2);
Axis.registerKeys("ArrowDown", "d", 2);

// Its also possible to map multiple keyboard keys to a key
// Axis.registerKeys(['q', 'ArrowLeft'], 'd', 1);

Axis.addEventListener("keydown", keydownHandler);
Axis.addEventListener("keyup", keyupHandler);

const position = { x: 0, y: 0 };

function keydownHandler(e) {
    const speed = 50;

    if (e.key === "a") {
        const direction = -1;
        position.x += speed * direction;
    }

    if (e.key === "b") {
        const direction = 1;
        position.x += speed * direction;
    }
}

function keyupHandler(e) {
    //
}
```

#### Handling joysticks

```js
import Axis from "axis-api";

const joystick1 = Axis.joystick1;
const joystick2 = Axis.joystick2;

// Joystick move
joystick1.addEventListener("joystick:move", joystickMoveHandler);

const position = { x: 0, y: 0 };

function joystickMoveHandler(e) {
    const speed = 50;
    position.x += speed * e.position.x;
    position.y += speed * e.position.y;
}

// Joystick quickmove: events are throttled and only give one direction at the time
// it can be usefull for UI navigation for example.
joystick1.addEventListener("joystick:quickmove", joystickQuickmoveHandler);

function joystickQuickmoveHandler(e) {
    const speed = 50;
    if (e.direction === "left") position.x += speed * -1;
    if (e.direction === "right") position.x += speed;
    if (e.direction === "up") position.y += speed * -1;
    if (e.direction === "down") position.y += speed;
}
```

For debug purposes when you don't have access to the axis machine, you can use a gamepad to emulate joystick events without changing your code too much:

```js
const joystick1 = Axis.joystick1;
const joystick2 = Axis.joystick2;

const position1 = { x: 0, y: 0 };
const position2 = { x: 0, y: 0 };

joystick1.addEventListener("joystick:move", joystick1moveHandler);
joystick2.addEventListener("joystick:move", joystick2moveHandler);

update();

function update() {
    // With 2 gamepads connected
    const gamepads = navigator.getGamepads();
    if (gamepads[0]) joystick1.setGamepadJoystick(gamepads[0], 1); // First joystick of gamepad 1
    if (gamepads[1]) joystick2.setGamepadJoystick(gamepads[1], 1); // First joystick of gamepad 2

    // Or With only 1 gamepad connected
    const gamepads = navigator.getGamepads();
    if (gamepads[0]) joystick1.setGamepadJoystick(gamepads[0], 1); // First joystick of gamepad 1
    if (gamepads[0]) joystick2.setGamepadJoystick(gamepads[0], 2); // Second joystick of gamepad 1

    requestAnimationFrame(update);
}

function joystick1moveHandler(e) {
    const speed = 50;
    position1.x += speed * e.position.x;
    position1.y += speed * e.position.y;
}

function joystick2moveHandler(e) {
    const speed = 50;
    position2.x += speed * e.position.x;
    position2.y += speed * e.position.y;
}
```

#### Handling players

```js
import Axis from "axis-api";

// Create players
const player1 = Axis.createPlayer({
    id: 1,
    joysticks: Axis.joystick1,
    // Can also be an array of both joysticks
    // joysticks: [Axis.joystick1, Axis.joystick2],
    buttons: Axis.buttonManager.getButtonsById(1),
});

const player2 = Axis.createPlayer({
    id: 2,
    joysticks: Axis.joystick2,
    buttons: Axis.buttonManager.getButtonsById(2),
});

// Use buttons from player 1
player1.addEventListener("keydown", keydownHandler);
player1.addEventListener("keyup", keyupHandler);

const position = { x: 0, y: 0 };

function keydownHandler(e) {
    const speed = 50;

    if (e.key === "a") {
        const direction = -1;
        position.x += speed * direction;
    }

    if (e.key === "b") {
        const direction = 1;
        position.x += speed * direction;
    }
}

function keyupHandler(e) {
    //
}

// Use joystick from player 1
player1.addEventListener("joystick:move", joystickMoveHandler);
player1.addEventListener("joystick:quickmove", joystickQuickmoveHandler);

function joystickMoveHandler(e) {
    const speed = 50;
    position.x += speed * e.position.x;
}

// This is quite useful to handle joystick ui navigation
function joystickQuickmoveHandler(e) {
    const speed = 50;
    if (e.direction === "left") position1.x += speed * -1;
    if (e.direction === "right") position1.x += speed;
    if (e.direction === "up") position1.y += speed * -1;
    if (e.direction === "down") position1.y += speed;
}
```

#### Handling leaderboard

To increase competitivity you can create a leaderboard where your users will be able to save their best scores.

You can create the leaderboard instance like so:

```js
const leaderboard = Axis.createLeaderboard({
    id: "my-game",
});
```

Here make sure to use exactly the same id that the one you received when uploading your game to the Axis Machine, otherwise it won't work.
If you haven't uploaded your game yet and want to try out the leaderboard, just use a random string, scores will be stored locally
and you'll be able to use the leaderboard API just like it was in the machine.

Then you can post scores and fetch all the existing scores like so:

```js
// Post a score
// Every score data should at least
// have username and value keys
leaderboard
    .postScore({
        username: "sergiuonthetrack",
        value: 100,
    })
    .then(() => {
        // Get all scores
        leaderboard.getScores().then((response) => {
            console.log(response);
        });
    });
```

**NB**
It's important to note that you will not be able to push any data to the database when running the game on your own machine, only the axis machine has the rights to push scores data. But on your machine we simmly use localStorage api to store scores. You don't have to do anything different.

#### Keyboard

So you can now store your users scores but how will they type their usernames?
You can use our virtual keyboard:

```js
const input = document.querySelector("input");

Axis.virtualKeyboard.open();

Axis.virtualKeyboard.addEventListener("input", (username) => {
    input.value = username;
});

Axis.virtualKeyboard.addEventListener("validate", (username) => {
    virtualKeyboard.close();
    leaderboard.postScore({
        username,
        value: 100098796,
    });
});
```

#### Handling exit

At anytime, the player can leave the game with the machine home button,
when this button is pressed the player will be asked to confirm or cancel,
you can handle these situations with the following events:

```js
// Exit game events
Axis.addEventListener("exit:attempted", exitAttemptHandler);

function exitAttemptedHandler() {
    pause();
}

function exitCanceledHandler() {
    unpause();
}

function exitCompletedHandler() {
    console.log("👋 Bye bye");
}
```

#### Handling leds

The Axis Machine has many leds connected to it, you can interact with each of them very easily:

```js
Axis.ledManager.leds[0].setColor("rgb(255, 0, 0)");
Axis.ledManager.leds[0].setColor("red");
Axis.ledManager.leds[0].setColor("#ff0000");
```

All the leds instances will be ordered by groups later on.

### Electron usage

#### Trouble shooting

In main Make sure context isolation is set to false :

```js
// main.js
const win = new BrowserWindow({
    width: 1200,
    height: 900,
    webPreferences: {
        preload: path.join(__dirname, "preload.js"),
        contextIsolation: false,
        enableRemoteModule: true,
    },
});
```

In preload.js on DOMContentLoaded event you can access the Game Axis Instance in the window and set the ipc renderer like this :

```js
// preload.js
const { ipcRenderer } = require("electron");

window.addEventListener("DOMContentLoaded", () => {
    window.__axis__.set_ipc_renderer(ipcRenderer);
});
```

## API

## Run demo

```bash
# install dependencies
npm install

# serve with hot reload at localhost:3003
npm run dev
```

### Build

Pushing to main triggers a build via Github Action to create the bundle file.

## Authors

[@LPGeneret](https://twitter.com/LPGeneret)
[@sergebocancea](https://twitter.com/sergebocancea)
[@leochocolat](https://twitter.com/leochocolat)
