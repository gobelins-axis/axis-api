# 📦️ Arcade API

An API to help creators building their game for our arcade machine (not existing yet...).

## Installation

```bash
npm i github:arcade-feu/arcade-api
```

## Usage

### Game usage

#### Handling controllers

```js
import Arcade from "arcade-api";

// Map a Machine Key to a Keyboard Key
Arcade.registerKey("a", "ArrowLeft");
Arcade.registerKey("b", "ArrowRight");
Arcade.registerKey("c", "Space");
Arcade.registerKey("d", "Space");

// Use buttons
Arcade.addEventListener("keydown", keydownHandler);
Arcade.addEventListener("keyup", keyupHandler);

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
Arcade.addEventListener("joystick:move", joystickMoveHandler);
Arcade.addEventListener("joystick:keydown", joystickKeydownHandler);
Arcade.addEventListener("joystick:keyup", joystickKeyupHandler);

// Configure the joystick deadzone (default to 0.1)
Arcade.setJoystickDeadzone(0.05);
// When the distance from the center is smaller then 0.05
// the joystick event will output { x: 0, y: 0 }

function joystickMoveHandler(e) {
    const speed = 50;
    position.x += speed * e.x;
}

function joystickKeydownHandler(e) {
    //
}

function joystickKeyupHandler(e) {
    //
}
```

#### Handling exit

At anytime, the player can leave the game with the machine home button,
when this button is pressed the player will be asked to confirm or cancel,
you can handle these situations with the following events:

```js
// Exit game events
Arcade.addEventListener("exit:attempted", exitAttemptHandler);

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

In preload.js on DOMContentLoaded event you can access the Game Arcade Instance in the window and set the ipc renderer like this :

```js
// preload.js
const { ipcRenderer } = require("electron");

window.addEventListener("DOMContentLoaded", () => {
    window.__arcade__.set_ipc_renderer(ipcRenderer);
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

Pushing to master triggers a build via Github Action to create the bundle file.

## Authors

[@LPGeneret](https://twitter.com/LPGeneret)
[@sergebocancea](https://twitter.com/sergebocancea)
[@leochocolat](https://twitter.com/leochocolat)
