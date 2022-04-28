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

Arcade.addEventListener("keydown", keydownHandler);

// Use joystick
Arcade.addEventListener("joystick:move", joystickMoveHandler);

const position = { x: 0, y: 0 };

function keydownHandler(e) {
    const speed = 50;
    const direction = e.machineKey === "a" ? -1 : 1;
    position.x += speed * direction;
}

function joystickMoveHandler(e) {
    const speed = 50;
    position.x += speed * e.x;
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
