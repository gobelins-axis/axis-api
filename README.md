# 📦️ Arcade API

An API to help creators building their game for our arcade machine (not existing yet...).

## Installation

```bash
npm i github:arcade-feu/arcade-api
```

## Usage

### Game usage

```js
import Arcade from "arcade-api";

// Map a Machine Key to a Keyboard Key
Arcade.registerKey("a", "ArrowLeft");
Arcade.registerKey("b", "ArrowRight");

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
