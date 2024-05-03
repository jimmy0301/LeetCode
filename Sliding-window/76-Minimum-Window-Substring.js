/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function minWindow(s, t) {
    let minLen = Number.MAX_SAFE_INTEGER;
    const tMap = {};

    // Get the frequencies of each character in the string t
    for (let i = 0; i < t.length; i += 1) {
        const c = t[i];
        if (c in tmap) {
            tMap[c] += 1;
        } else {
            tMap[c] = 1;
        }
    }

    // Need a window
    let l = 0;
    // Need a value to count the numebr of characters
    // that the subtring has the number of character in the T
    let haveTCharacter = 0;
    // Number of distinct characters in t
    let need = Object.values(tMap).length;

    // To keep the left index and the right index of the minimum window substring
    const res = [-1, -1];
    // Get the frequencies of each character in the window
    const windowMap = {};

    for (let r = 0; r < s.length; r += 1) {
        const c = s[r];
        if (c in windowMap) {
            windowMap[c] += 1;
        } else {
            windowMap[c] = 1;
        }

        // Check whether the s[r] is in the t
        // and the windowMap[s[r]] >= tMap[s[r]]
        // the have += 1;
        if (c in tMap && windowMap[c] === tMap[c]) {
            haveTCharacter += 1;
        }

        while (haveTCharacter === need) {
            if (r - l + 1 < minLen) {
                res[0] = l;
                res[1] = r;
                minLen = r - l + 1;
            }
            windowMap[s[l]] -= 1;
            if (s[l] in tMap && windowMap[s[l]] < tMap[s[l]]) {
                haveTCharacter -= 1;
            }
            l += 1;
        }
    }

    if (minLen === Number.MAX_SAFE_INTEGER) {
        return '';
    }

    return s.substring(res[0], res[1] + 1);
};