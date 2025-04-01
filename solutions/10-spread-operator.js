// BEGIN
export default function make(name, additionalProperties = {}) {
    const defaultProperties = {
        state: 'moderating',
        createdAt: Date.now(),
    };

    return {
        name,
        ...defaultProperties,
        ...additionalProperties,
    };
}
// END