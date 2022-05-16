# 📦️ Axis API

An API to help creators building their game for our Axis machine (not existing yet...).

## Installation

```bash
npm i github:gobelins-axis/axis-api
```

## Usage

### Game usage

#### Handling controllers

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

// Use buttons
Axis.player1.addEventListener("keydown", keydownHandler);
Axis.player1.addEventListener("keyup", keyupHandler);

const position = { x: 0, y: 0 };

function keydownHandler(e) {
    const speed = 50;

    if (e.machineKey === "a") {
        const direction = -1;
        position.x += speed * direction;
    }

    if (e.machineKey === "b") {
        const direction = 1;
        position.x += speed * direction;
    }

    // Or
    // if (e.keyboardKey === "ArrowLeft") {
    //     const direction = -1;
    //     position.x += speed * direction;
    // }

    // if (e.keyboardKey === "ArrowRight") {
    //     const direction = 1;
    //     position.x += speed * direction;
    // }
}

function keyupHandler(e) {
    //
}

// Use joystick

//
Axis.player1.addEventListener("joystick:move", joystickMoveHandler);
Axis.player1.addEventListener("joystick:quickmove", joystickQuickmoveHandler);

function joystickMoveHandler(e) {
    const speed = 50;
    position.x += speed * e.x;
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
