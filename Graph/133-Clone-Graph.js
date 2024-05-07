/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
    if (node === null) {
        return null;
    }

    const cloned = new Map().set(node, new Node(node.val));

    const queue = [node];
    while (queue.length > 0) {
        const currNode = queue.shift();
        const neighbors = currNode.neighbors;
        for (let j = 0; j < neighbors.length; j += 1) {
            const neighbor = neighbors[j];
            
            if (!cloned.has(neighbor)) {
                cloned.set(neighbor, new Node(neighbor.val));
                queue.push(neighbor);
            }

            cloned.get(currNode).neighbors.push(cloned.get(neighbor));
        }
    }

    return cloned.get(node);
};