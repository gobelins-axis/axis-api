export default function angle(p1, p2) {
    return Math.atan2(p1.y - p2.y, p1.x - p2.x);
}
