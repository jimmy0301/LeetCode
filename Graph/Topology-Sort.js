const topologySort = (n, edges) => {
    const graph = Array(n).fill().map(() => []);
    const inDegree = Array(n).fill(0);
    let visited = 0;

    for (let i = 0; i < edges.length; i += 1) {
        const [s, d] = edges[i];

        graph[d].push(s);
    }

    // Get indegree for each vertex
    for (let i = 0; i < graph.length; i += 1) {
        for (let j = 0; j < graph[i].length; j += 1) {
            inDegree[graph[i][j]] += 1;
        }
    }

    const queue = [];

    for (let i = 0; i < inDegree.length; i += 1) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }

    while (queue.length > 0) {
        const v = queue.shift();
        console.log(v);
        visited += 1;
        for (let i = 0; i < graph[v].length; i += 1) {
            inDegree[graph[v][i]] -= 1;

            if (inDegree[graph[v][i]] === 0)
                queue.push(graph[v][i]);
        }
    }
}