# Arcade API

An API to help creators building their game for our arcade machine (not existing yet...).

## Installation

```bash
npm i github:arcade-feu/arcade-api
```

## Usage

```js
import Arcade from "arcade-api";

// Map a Machine Key to a Keyboard Key
Arcade.registerKey("a", "ArrowLeft");
Arcade.registerKey("b", "ArrowRight");

Arcade.addEventListener("keydown", keydownHandler);

const position = { x: 0, y: 0 };

function keydownHandler(e) {
    const speed = 50;
    const direction = e.machineKey === "a" ? -1 : 1;
    position.x += speed * direction;
}
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
