# 📦️ Axis API

An API to help creators building their game for our Axis machine.

This API will allow you to use our custom controllers with a very few lines of code, and emulate them easily with your keyboard and a gamepad.

You will also be able to play around with the all the LEDS that are inside the machine.

If you want to create a multiplayer game, Axis API already has some features ready to go for you.

To increase competitivity in your game, you can also use our leaderboard system.

**It's all quite simple to use and very flexible.**

## Axis Machine

In order to use our API better, you need to have a good overview of what the Axis machine looks like and how it works :

### Axis Controllers

All the controllers are ordered in 2 groups, each group has 1 Joystick and 5 buttons.
A button is identified by its key (A, X, I, S, W) and its group index (1 or 2).
A Joystick is identified by its group index (1 or 2).
--> See figure 1.

<!-- ![Figure 1: Controllers](https://github.com/gobelins-axis/axis-api/blob/main/src/images/joystick-figure.png?raw=true) -->

**Figure 1: Controllers**

### Axis Joysticks

A joystick gives an analog signal on the x and y axis between -1 and 1.

![Figure 2: Joystick](https://github.com/gobelins-axis/axis-api/blob/main/src/images/joystick-figure-transparent.png?raw=true)

**Figure 2: Joystick**

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

##### Buttons Lights

Each button has a RGB LED inside of it, you can easily set its color with our API :

you first need to get the button instance you want, you can do that in various ways and then just use the **setLedColor** method :

```js
import Axis from "axis-api";

// Using the ButtonManager class
const buttonA1 = Axis.buttonManager.getButton("a", 1);
buttonA1.setLedColor("red");

// Using the registerKeys method (it returns the button instance)
const buttonA1 = Axis.registerKeys("q", "a", 1);
buttonA1.setLedColor("red");

// You can also use RGB or Hexadecimal strings
// buttonA1.setLedColor("rgb(255, 0, 0)");
// buttonA1.setLedColor("#FF0000");
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

For debug purposes when you don't have access to the axis machine, you can use a gamepad to emulate joystick and buttons events without changing your code too much:

```js
const joystick1 = Axis.joystick1;
const joystick2 = Axis.joystick2;

// Player 1
const gamepadEmulator1 = Axis.createGamepadEmulator(0); // First gamepad plugged

Axis.joystick1.setGamepadEmulatorJoystick(gamepadEmulator1, 0); // Gamepad Joystick Left

Axis.registerGamepadEmulatorKeys(gamepadEmulator1, 1, "a", 1); // Gamepad button index 1 (PS4 X)
Axis.registerGamepadEmulatorKeys(gamepadEmulator1, 0, "b", 1); // Gamepad button index 0 (PS4 Square)
Axis.registerGamepadEmulatorKeys(gamepadEmulator1, 2, "c", 1); // Gamepad button index 2 (PS4 O)
Axis.registerGamepadEmulatorKeys(gamepadEmulator1, 3, "d", 1); // Gamepad button index 3 (PS4 Triangle)

// Player 2
const gamepadEmulator2 = Axis.createGamepadEmulator(1); // Second gamepad plugged

Axis.joystick2.setGamepadEmulatorJoystick(gamepadEmulator2, 0); // Gamepad Joystick Left

Axis.registerGamepadEmulatorKeys(gamepadEmulator2, 1, "a", 2); // Gamepad button index 1 (PS4 X)
Axis.registerGamepadEmulatorKeys(gamepadEmulator2, 0, "b", 2); // Gamepad button index 0 (PS4 Square)
Axis.registerGamepadEmulatorKeys(gamepadEmulator2, 2, "c", 2); // Gamepad button index 2 (PS4 O)
Axis.registerGamepadEmulatorKeys(gamepadEmulator2, 3, "d", 2); // Gamepad button index 3 (PS4 Triangle)

function update() {
    // Update gamepads every frame fo keep track of the events
    gamepadEmulator1.update();
    gamepadEmulator2.update();

    requestAnimationFrame(update);
}

update();
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
