import _ from 'lodash';

// BEGIN
export default function countWords(sentence) {
    if (!sentence) {
        return {};
    }

    const words = sentence.toLowerCase().split(/\s+/);
    const wordCount = {};
    for (const word of words) {
        if (wordCount[word]) {
            wordCount[word] += 1;
        } else {
            wordCount[word] = 1;
        }
    }
    return wordCount;
}
// END