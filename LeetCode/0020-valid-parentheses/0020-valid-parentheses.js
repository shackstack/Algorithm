/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
    let currentLength = s.length;

    while (true) {
        s = s.replaceAll('()', '');
        s = s.replaceAll('[]', '');
        s = s.replaceAll('{}', '');

        if (currentLength === s.length) break;
        currentLength = s.length;
    }

    return s.length === 0;
};