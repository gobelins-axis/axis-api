import map from './map';
import distance from './distance';

// Basic Joystick
// const MIN_INPUT_SIGNAL = 0;
// const MAX_INPUT_SIGNAL = 1023;

// Ultra Stick 360
const MIN_INPUT_SIGNAL_X = 18;
const MAX_INPUT_SIGNAL_X = 840;
const MIN_INPUT_SIGNAL_Y = 18;
const MAX_INPUT_SIGNAL_Y = 840;

export default function normalizeJoystickSignal(position, threshold) {
    let x = map(position.x, MIN_INPUT_SIGNAL_X, MAX_INPUT_SIGNAL_X, -1, 1);
    let y = map(position.y, MIN_INPUT_SIGNAL_Y, MAX_INPUT_SIGNAL_Y, -1, 1) * -1;
    const dist = distance({ x, y }, { x: 0, y: 0 });
    if (dist < threshold) { x = 0; y = 0; }
    return { x, y };
}
