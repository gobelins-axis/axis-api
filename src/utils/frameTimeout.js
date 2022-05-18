export default function frameTimeout(callback, frames) {
    let frame = 0;
    let requestID = null;

    function loop() {
        frame++;
        if (frame >= frames) {
            callback();
        } else {
            requestID = requestAnimationFrame(loop);
        }
    }
    requestID = requestAnimationFrame(loop);

    return {
        cancel() {
            cancelAnimationFrame(requestID);
        },
    };
}
