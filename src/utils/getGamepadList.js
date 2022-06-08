export default function getGamepadList() {
    return new Promise((resolve) => {
        window.addEventListener('gamepadconnected', () => {
            resolve(navigator.getGamepads());
        });
    });
}
