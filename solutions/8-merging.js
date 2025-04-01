import _ from 'lodash';

// BEGIN
export default function fill(target, keys, source) {
    if (keys.length === 0) {
        Object.assign(target, source);
    } else {
        for (const key of keys) {
            if (key in source) {
                target[key] = source[key];
            }
        }
    }
}
// END