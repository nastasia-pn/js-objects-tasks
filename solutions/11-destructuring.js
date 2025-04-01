// BEGIN
export default function getSortedNames(users) {
    return users
        .map(({ name }) => name)
        .sort();
}
// END