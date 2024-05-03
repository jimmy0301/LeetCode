/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const Trie = require('../Trie/Trie.js');

// Recursion and hash map (Time limit exceed)
const wordBreak1 = (s, wordDict) => {
    const wordMap = {};

    for (let i = 0; i < wordDict.length; i += 1) {
        wordMap[wordDict[i]] = 1;
    }

    function backTrack(i) {
        if (i >= s.length) {
            return true;
        }

        for (let j = i; j < s.length; j += 1) {
            const subStr = s.substring(i, j + 1);
            if (subStr in wordMap) {
                if (backTrack(j + 1)) {
                    return true;
                }
            }
        }

        return false;
    }


    return backTrack(0);
}

console.log('wordBreak1', wordBreak1('leetcode', ["leet","code"]));
console.log('wordBreak1', wordBreak1('catsandog', ["cats","dog","sand","and","cat"]));

// Recursion and Trie (Time limit exceed)
const wordBreak2 = (s, wordDict) => {
    const trie = new Trie();

    for (let i = 0; i < wordDict.length; i += 1) {
       trie.addWord(wordDict[i]);
    }

    function backTrack(i) {
        if (i >= s.length) {
            return true;
        }

        for (let j = i; j < s.length; j += 1) {
            const subStr = s.substring(i, j + 1);
            if (trie.search(subStr)) {
                if (backTrack(j + 1)) {
                    return true;
                }
            }
        }

        return false;
    }


    return backTrack(0);
}

// console.log('wordBreak2', wordBreak2('leetcode', ["leet","code"]));
// console.log('wordBreak2', wordBreak2('catsandog', ["cats","dog","sand","and","cat"]));
// console.log('wordBreak2', wordBreak2(
//     'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab',
//     ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]
// ));

// Recusion and memorization
const wordBreak3 = (s, wordDict) => {
    const memo = Array(s.length).fill(-1);
    const wordMap = {};

    for (let i = 0; i < wordDict.length; i += 1) {
        wordMap[wordDict[i]] = 1;
    }

    function backTrack(i) {
        if (i >= s.length) {
            return true;
        }

        if (memo[i] !== -1) {
            return memo[i];
        }

        for (let j = i; j < s.length; j += 1) {
            const subStr = s.substring(i, j + 1);
            if ((subStr in wordMap) && backTrack(j + 1)) {
                memo[i] = 1;

                return true;
            }
        }

        memo[i] = 0;
        return false;
    }


    return backTrack(0);
}

console.log('wordBreak3', wordBreak3('leetcode', ["leet","code"]));
console.log('wordBreak3', wordBreak3('catsandog', ["cats","dog","sand","and","cat"]));
console.log('wordBreak3', wordBreak3(
    'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab',
    ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]
));

// Dynamic programming
const wordBreak4 = (s, wordDict) => {
    const dp = Array(s.length + 1).fill(false);
    const wordMap = {};
    dp[0] = true;

    for (let i = 0; i < wordDict.length; i += 1) {
        wordMap[wordDict[i]] = 1;
    }

    for (let i = 0; i < dp.length; i += 1) {
        for (let j = 0; j < i; j += 1) {
            const subStr = s.substring(j, i);
            if (dp[j] && (subStr in wordMap)) {
                dp[i] = true;
                break;
            }   
        }
    }

    return dp[dp.length - 1];
}

console.log('wordBreak4', wordBreak4('leetcode', ["leet","code"]));
console.log('wordBreak4', wordBreak4('catsandog', ["cats","dog","sand","and","cat"]));
console.log('wordBreak4', wordBreak4(
    'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab',
    ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]
));
