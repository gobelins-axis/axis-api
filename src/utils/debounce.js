export default function debounce(callback, delay, timeout) {
    clearTimeout(timeout);
    timeout = setTimeout(callback, delay * 1000);
    return timeout;
}
