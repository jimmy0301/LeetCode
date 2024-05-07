/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

// topological sort
function canFinish(numCourses, prerequisites) {
    const graph = Array(numCourses).fill().map(() => []);
    const inDegree = Array(numCourses).fill(0);

    for (let i = 0; i < prerequisites.length; i += 1) {
        const [s, d] = prerequisites[i];
        graph[d].push(s);
    }

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

    let visited = 0;
    while (queue.length > 0) {
        const u = queue.shift();
        visited += 1;
        for (let i = 0; i < graph[u].length; i += 1) {
            inDegree[graph[u][i]] -= 1;

            if (inDegree[graph[u][i]] === 0) {
                queue.push(graph[u][i]);
            }
        }
    }

    return visited === numCourses;
}

console.log(canFinish(5, [[1,0],[2, 0], [3, 0],[4, 1], [4, 2], [4, 3], [5, 2], [5, 3]]))