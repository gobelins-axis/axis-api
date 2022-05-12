export default function throttle(callback, delay, lastTime) {
    const now = new Date();
    if (lastTime === undefined) {
        callback();
        return now;
    } else {
        if (now - lastTime >= delay) {
            callback();
            return now;
        } else {
            return lastTime;
        }
    }
}
