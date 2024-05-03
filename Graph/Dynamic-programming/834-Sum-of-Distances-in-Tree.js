// f(x) is the sum of distance of the x node
// Formula f(child) = f(parent) + a - b
// b = The number of subtree
// a = (Number of nodes) - b
// 1. Get the number of subTree for each node
// 2. Choose a node and calculate the distance between this node and other nodes.
// 3. Calculate the distance of each node by the formula

function sumOfDistancesInTree(n, edges) {
    const res = Array(n).fill(0);
    const subTreeSize = Array(n).fill(0);
    const visited = new Set();
    const graph = {};

    function getSizeOfSubTreeForEachNode(curr)  {
        if (graph[curr] === undefined) {
            graph[curr] = [];
        }
        const neighbors = graph[curr];

        let sum = 1;
        for (let i = 0; i < neighbors.length; i += 1) {
            const neighbor = neighbors[i];

            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                sum += getSizeOfSubTreeForEachNode(neighbor);
            }
        }

        subTreeSize[curr] = sum;
        return sum;
    }

    function getDistanceBetweenEachNode(curr)  {
        if (graph[curr] === undefined) {
            graph[curr] = [];
        }
        const neighbors = graph[curr];

        let sum = 0;
        for (let i = 0; i < neighbors.length; i += 1) {
            const neighbor = neighbors[i];

            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                sum += getDistanceBetweenEachNode(neighbor);
            }
        }

        sum += subTreeSize[curr] - 1;
        return sum;
    }

    function getDistanceSumForEachNode(curr)  {
        if (graph[curr] === undefined) {
            graph[curr] = [];
        }
        const neighbors = graph[curr];

        for (let i = 0; i < neighbors.length; i += 1) {
            const neighbor = neighbors[i];

            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                const b = subTreeSize[neighbor];
                const a = n - b;
                res[neighbor] = res[curr] + a - b;
                getDistanceSumForEachNode(neighbor);
            }
        }

        return;
    }

    // Create Adjacent Matrix to describe the graph
    for (let i = 0; i < n; i += 1) {
        const [s, d] = edges[i];

        if (graph[s] === undefined) {
            graph[s] = [];
        }

        if (graph[d] === undefined) {
            graph[d] = [];
        }
        
        graph[s].push(d);
        graph[d].push(s);
    }

    visited.add(0);
    getSizeOfSubTreeForEachNode(0);
    visited.clear();
    visited.add(0);
    res[0] = getDistanceBetweenEachNode(0);
    visited.clear();
    visited.add(0)
    getDistanceSumForEachNode(0)
    
    return res;
}