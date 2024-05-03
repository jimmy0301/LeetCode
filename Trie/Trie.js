class TrieNode {
    constructor(val) {
        this.children = {};
        this.isWord = false;
    }
}

module.exports = class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    addWord(word) {
        let node = this.root;

        for (let i = 0; i < word.length; i += 1) {
            const c = word[i];
            if (!(c in node.children)) {
                node.children[c] = new TrieNode;
            }

            node = node.children[c];
        }

        node.isWord = true;
    }

    search(word) {
        let node = this.root;

        for (let i = 0; i < word.length; i += 1) {
            const c = word[i];
            if (!(c in node.children)) {
                return false;
            }

            node = node.children[c];
        }

        return node.isWord;
    }

    startsWith(prefix) {
        let node = this.root;

        for (let i = 0; i < prefix.length; i += 1) {
            const c = prefix[i];
            if (!(c in node.children)) {
                return false;
            }

            node = node.children[c];
        }

        return true;
    }
}