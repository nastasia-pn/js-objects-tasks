import crc32 from 'crc-32';

// BEGIN
export function make() {
    return [];
}

export function set(map, key, value) {
    const hash = crc32.str(key);
    const index = hash >>> 0; // Преобразуем в положительное число
    const existingEntry = map[index];

    if (existingEntry) {
        // Проверяем на коллизию
        if (existingEntry[0] !== key) {
            return false; // Коллизия, не меняем словарь
        }
    }

    map[index] = [key, value];
    return true;
}

export function get(map, key, defaultValue = null) {
    const hash = crc32.str(key);
    const index = hash >>> 0; // Преобразуем в положительное число
    const entry = map[index];

    if (entry && entry[0] === key) {
        return entry[1]; // Возвращаем значение
    }

    return defaultValue; // Возвращаем значение по умолчанию
}
// END