export default function getArray(value) {
    if (Array.isArray(value)) return value;
    else return [value];
}
