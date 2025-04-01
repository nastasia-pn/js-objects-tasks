// BEGIN
export default function cloneShallow(obj) {
    const clone = {};
    for (const key in obj) {
        if (Object.hasOwn(obj, key)) {
            clone[key] = obj[key];
        }
    }
    return clone;
}
// END
