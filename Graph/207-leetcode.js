/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

// topological sort
function canFinish(numCoureses, prerequisites) {
    if (prerequisites.lenght <= 0 || numCoureses <= 1) {
        return true;
    }

    const map = {};

    for (let i = 0; i < prerequisites.length; i += 1) {
        const [course, preCourse] = prerequisites[i];
        if (map[preCourse] === undefined) {
            map[preCourse] = {};
            map[preCourse]['count'] = 0;
            map[preCourse]['link'] = [course];
        } else {
            map[preCourse]['link'].push(course);
        }

        if (map[course] === undefined) {
            map[course] = {};
            map[course]['count'] = 1;
            map[course]['link'] = [];
        } else {
            map[course]['count'] += 1;
        }
    }

    console.log('map', map);
    // Find the count is 0
    let top = -1;
    for (let i = 0; i < numCoureses; i += 1) {
        console.log('i', i, map[i]);
        if (map[i].count === 0) {
            map[i].count = top;
            top = i;
        }
    }

    let j = -1;
    let vertexCount = 0
    for (let i = 0; i < numCoureses; i += 1) {
        if (top === -1) {
            return false;
        } else {
            j = top;
            console.log('vertex: ', j);
            top = map[top].count;
            const linkArr = map[j].link;
            for (let k = 0; k < linkArr.length; k += 1) {
                map[linkArr[k]].count -= 1;

                if (map[linkArr[k]].count === 0) {
                    vertexCount += 1;
                    map[linkArr[k]].count = top;
                    top = linkArr[k];

                    if (vertexCount === numCoureses) {
                        console.log('vertex: ', linkArr[k]);

                        return true;
                    }
                }
            }
        }
    }

    return true;
}

console.log(canFinish(5, [[1,0],[2, 0], [3, 0],[4, 1], [4, 2], [4, 3], [5, 2], [5, 3]]))