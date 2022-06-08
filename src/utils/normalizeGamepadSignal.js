import map from './map';

export default function normalizeJoystickSignal(position, deadzone) {
    let x = position.x;
    let y = position.y * -1;

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

    return { x, y };
}
