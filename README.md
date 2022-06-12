# 📦️ Axis API

**An API to help creators building their game for our Axis machine.**

This API will allow you to use our **custom controllers** with a very few lines of code, and emulate them easily with your keyboard and a gamepad.

You will also be able to play around with the all the **LEDS** that are inside the machine.

If you want to create a **multiplayer game**, Axis API already has some features ready to go for you.

To increase competitivity in your game, you can also use our **leaderboard** system.

**It's all quite simple to use and very flexible.**

## Axis Machine

In order to use our API better, you need to have a good overview of what the Axis machine looks like and how it works :

### Axis Controllers

All the controllers are ordered in **2 groups**, each group has **1 Joystick** and **5 buttons**.

A button is identified by its **key** (A, X, I, S, W) and its group **id** (1 or 2).

A Joystick is identified by its group **id** (1 or 2).

**Figure 1 Coming soon**
<!-- ![Figure 1: Controllers](https://github.com/gobelins-axis/axis-api/blob/main/src/images/joystick-figure.png?raw=true) -->

**Figure 1: Controllers**

### Axis Joysticks

A joystick gives an analog signal between -1 and 1 on the x and y axis.

![Figure 2: Joystick](https://github.com/gobelins-axis/axis-api/blob/main/src/images/joystick-figure-dark-transparent.png?raw=true)

**Figure 2: Joystick**

## Installation

```bash
npm i github:gobelins-axis/axis-api
```

## Usage

### Importing Axis API

The Axis object is a singleton that contains every method and properties you need to build your game. You can take a look at the [API References](#api-references) for more details.

```js
import Axis from "axis-api";
```

### Emulating inputs on your computer

This first thing you will need to do when starting the development of your game is emulate properly the Axis machine inputs.

#### Emulate button inputs

You can emulate button inputs easily by mapping your keyboard keys to all the buttons available on the Axis machine, using the **registerKeys** method :

```js
// Map Keyboard Keys to Axis Machine Buttons from group 1 
Axis.registerKeys("q", "a", 1); // keyboard key "q" to button "a" from group 1
Axis.registerKeys("d", "x", 1); // keyboard key "d" to button "x" from group 1
Axis.registerKeys("z", "i", 1); // keyboard key "z" to button "i" from group 1
Axis.registerKeys("s", "s", 1); // keyboard key "s" to button "s" from group 1
Axis.registerKeys(" ", "w", 1); // keyboard key Space to button "w" from group 1

// Map Keyboard Keys to Axis Machine Buttons from group 2
Axis.registerKeys("ArrowLeft", "a", 2); // keyboard key "ArrowLeft" to button "a" from group 2 
Axis.registerKeys("ArrowRight", "x", 2); // keyboard key "ArrowRight" to button "x" from group 2
Axis.registerKeys("ArrowUp", "i", 2); // keyboard key "ArrowUp" to button "i" from group 2
Axis.registerKeys("ArrowDown", "s", 2); // keyboard key "ArrowDown" to button "s" from group 2
Axis.registerKeys("Enter", "w", 2); // keyboard key "Enter" to button "w" from group 2

// Node: It's also possible to map multiple keyboard keys for a single machine button like so :
// Axis.registerKeys(['q', 'ArrowLeft'], 'd', 1);
```

#### Emulate joystick inputs

Of course for joystick events, it's a little bit less convenient. You will need to use a Gamepad with analog joysticks connected with USB or bluetooth.

Once you've found one you will need to create a joystick emulator instance :

```js
const gamepadEmulator = Axis.createGamepadEmulator(0); // 0 is gamepad index, often represents the first gamepad connected to your computer

function update() {
    // Update gamepad emulator instance every frame fo keep track of the events
    gamepadEmulator.update();

    requestAnimationFrame(update);
}

update();
```

Then, just assign thie emulator to the joystick you want to emulate

```js
Axis.joystick1.setGamepadEmulatorJoystick(gamepadEmulator, 0); // 0 is the joystick index of the gamepad, often the one on the left side
Axis.joystick2.setGamepadEmulatorJoystick(gamepadEmulator, 1); // 1 is the joystick index of the gamepad, often the one on the right side
```

You can also connect two gamepads to make it more convenient if you're creating a multiplayer game. 

```js
const gamepadEmulator1 = Axis.createGamepadEmulator(0);
const gamepadEmulator2 = Axis.createGamepadEmulator(1);

Axis.joystick1.setGamepadEmulatorJoystick(gamepadEmulator1, 0);
Axis.joystick2.setGamepadEmulatorJoystick(gamepadEmulator2, 0);
```

Since we're now using gamepads, why not use gamepad buttons too... Let's do it :

```js
const gamepadEmulator = Axis.createGamepadEmulator(0);

Axis.registerGamepadEmulatorKeys(gamepadEmulator, 0, "a", 1); // Gamepad button index 0 (PS4 X) to button "a" from group 1
Axis.registerGamepadEmulatorKeys(gamepadEmulator, 1, "x", 1); // Gamepad button index 1 (PS4 Square) to button "x" from group 1
Axis.registerGamepadEmulatorKeys(gamepadEmulator, 2, "i", 1); // Gamepad button index 2 (PS4 Circle) to button "i" from group 1
Axis.registerGamepadEmulatorKeys(gamepadEmulator, 3, "s", 1); // Gamepad button index 3 (PS4 Triangle) to button "s" from group 1

```

### Button events

Once your properly emulated the keyboard keys, you can use our button event system directly on the Axis singleton. The event payload will give you back the button key and id.

```js
// Setup event listeners directly on the Axis singleton
Axis.addEventListener("keydown", keydownHandler);
Axis.addEventListener("keyup", keyupHandler);

const position = { x: 0, y: 0 };

function keydownHandler(e) {
    const speed = 50;

    // Get the current button key pressed in the event payload object
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
    // Do stuffs...
}

// If needed, you can of course remove the event listeners
function destroy() {
    Axis.removeEventListener("keydown", keydownHandler);
    Axis.removeEventListener("keyup", keyupHandler);
}
```

You can also listen to button events on the button instance itself, there are two ways of accessing a button instance : 

- Using the button manager :

```js
const buttonA1 = Axis.buttonManager.getButton('a', 1);

buttonA1.addEventListener('keydown', () {
    // Do stuffs...
});
```

- Using the registerKeys method that returns the instance :

```js
const buttonA1 = Axis.registerKeys("q", "a", 1);

buttonA1.addEventListener('keydown', () {
    // Do stuffs...
});
```

#### Buttons Lights

Each button has a RGB LED inside of it, you can easily set its color with our API :

```js
const buttonA1 = Axis.buttonManager.getButton("a", 1);
buttonA1.setLedColor("red");

// You can also use RGB or hexadecimal strings
// buttonA1.setLedColor("rgb(255, 0, 0)");
// buttonA1.setLedColor("#FF0000");
```

This is quite useful if you want to let your user know which button he needs to use. Or if you are creating a multiplayer game, you can split the buttons between players with different colors!

### Handling joysticks

#### Joystick event system

Just like the buttons, you can listen to joystick events direcly on the Axis singleton. The event payload will give you back the joystick id :

```js
Axis.addEventListener("joystick:move", joystickMoveHandler);

const position1 = { x: 0, y: 0 };
const position2 = { x: 0, y: 0 };

function joystickMoveHandler(e) {
    // Get the joystick id in the event payload object
    if (e.id === 1) {
        const speed = 50;
        position1.x += speed * e.position.x;
        position1.y += speed * e.position.y;
    }
    
    if (e.id === 2) {
        const speed = 50;
        position2.x += speed * e.position.x;
        position2.y += speed * e.position.y;
    }
}
```

Again, just like the buttons, you can also listen to events on the joystick instance itself. Joystick instances are available on the Axis singleton.

```js
// Joystick move event on the joystick instance
Axis.joystick1.addEventListener("joystick:move", joystick1MoveHandler);
Axis.joystick2.addEventListener("joystick:move", joystick2MoveHandler);

const position1 = { x: 0, y: 0 };
const position2 = { x: 0, y: 0 };

function joystick1MoveHandler() {
    const speed = 50;
    position1.x += speed * e.position.x;
    position1.y += speed * e.position.y;
}

function joystick2MoveHandler() {
    const speed = 50;
    position2.x += speed * e.position.x;
    position2.y += speed * e.position.y;
}
```

#### Joystick event types

The joystick instances are dispatching two different event types : 

- "joystick:move" : 

It fires every frame and gives a position x,y between -1 and 1.

- "joystick:quickmove" :

It fires when the x or y value reaches the minimum or maximum value. Giving back one single direction string ("left", "right", "up", "down"). 
This is typically useful when you want to achieve UI Navigation with the joystick.

```js
Axis.joystick1.addEventListener("joystick:quickmove", joystickQuickmoveHandler);

function joystickQuickmoveHandler(e) {
    const speed = 50;
    if (e.direction === "left") position.x += speed * -1;
    if (e.direction === "right") position.x += speed;
    if (e.direction === "up") position.y += speed * -1;
    if (e.direction === "down") position.y += speed;
}
```

### Handling players

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

### Handling leaderboard

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

### Virtual Keyboard

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

### Handling exit

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

### Handling LEDS

The Axis Machine has many LEDS connected to it, you can interact with each of them very easily:

```js
Axis.ledManager.leds[0].setColor("rgb(255, 0, 0)");
Axis.ledManager.leds[0].setColor("red");
Axis.ledManager.leds[0].setColor("#ff0000");
```

All the leds instances will be ordered by groups later on.

## API References

**Coming soon**

## Development

### Run demo

```bash
# install dependencies
npm install

# serve with hot reload at localhost:3003
npm run dev
```

### Build

No need to build manually, pushing to main triggers a build via Github Action to create the bundle file.

### Electron Trouble shooting

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

## Authors

[@LPGeneret](https://twitter.com/LPGeneret)
[@sergebocancea](https://twitter.com/sergebocancea)
[@leochocolat](https://twitter.com/leochocolat)
