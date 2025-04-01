// BEGIN
export default function get(obj, keys) {
    let current = obj;

    for (const key of keys) {
        if (Object.hasOwn(current, key)) {
            current = current[key];
        } else {
            return null;
        }
    }

    return current;
}
// END