import map from './map';

// Basic Joystick
// const MIN_INPUT_SIGNAL_X = 0;
// const MAX_INPUT_SIGNAL_X = 1023;
// const MIN_INPUT_SIGNAL_Y = 0;
// const MAX_INPUT_SIGNAL_Y = 1023;

// const DIRECTION_X = 1;
// const DIRECTION_Y = -1;

// Ultra Stick 360
const MIN_INPUT_SIGNAL_X = 18;
const MAX_INPUT_SIGNAL_X = 840;
const MIN_INPUT_SIGNAL_Y = 36;
const MAX_INPUT_SIGNAL_Y = 867;

const DIRECTION_X = 1;
const DIRECTION_Y = -1;

export default function normalizeJoystickSignal(position, deadzone) {
    let x = map(position.x, MIN_INPUT_SIGNAL_X, MAX_INPUT_SIGNAL_X, -1, 1) * DIRECTION_X;
    let y = map(position.y, MIN_INPUT_SIGNAL_Y, MAX_INPUT_SIGNAL_Y, -1, 1) * DIRECTION_Y;

    // Angle
    const angle = Math.atan2(y, x);

    // Initial magnitude
    let magnitude = Math.sqrt(x * x + y * y);

    // Clamp diagonales
    if (magnitude > 1) magnitude = 1;

    x = magnitude * Math.cos(angle);
    y = magnitude * Math.sin(angle);

    // Update magnitude
    magnitude = Math.sqrt(x * x + y * y);

    // Deadzone
    if (magnitude < deadzone) {
        return { x: 0, y: 0 };
    } else {
        magnitude = map(magnitude, deadzone, 1, 0, 1);
    }

    // Update position with deadzone handled
    x = magnitude * Math.cos(angle);
    y = magnitude * Math.sin(angle);

    return { x, y, magnitude };
}
