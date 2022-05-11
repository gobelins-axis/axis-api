import map from './map';
import distance from './distance';

const MIN_INPUT_SIGNAL = 0;
const MAX_INPUT_SIGNAL = 1023;

export default function normalizeJoystickSignal(position, threshold) {
    let x = map(position.x, MIN_INPUT_SIGNAL, MAX_INPUT_SIGNAL, -1, 1);
    let y = map(position.y, MIN_INPUT_SIGNAL, MAX_INPUT_SIGNAL, -1, 1) * -1;
    const dist = distance({ x, y }, { x: 0, y: 0 });
    if (dist < threshold) { x = 0; y = 0; }
    return { x, y };
}
