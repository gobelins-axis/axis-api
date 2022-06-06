import distance from './distance';

export default function normalizeJoystickSignal(position, threshold) {
    let x = position.x;
    let y = position.y * -1;
    const dist = distance({ x, y }, { x: 0, y: 0 });
    if (dist < threshold) { x = 0; y = 0; }
    return { x, y };
}
