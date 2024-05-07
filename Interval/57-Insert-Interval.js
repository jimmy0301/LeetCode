/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let [newStart, newEnd] = newInterval;
    let res = [];
    const n = intervals.length;

    for (let i = 0; i < n; i += 1) {
        const [currStart, currEnd] = intervals[i];

        // There are two non-overlap cases
        // currInterval newInterval
        // |-------|     |------|
        if (currEnd < newStart) {
            res.push(intervals[i]);
        } else if (currStart > newEnd) {
            // newInterval  currInterval
            // |-------|     |------|
            res.push([newStart, newEnd]);
            res = res.concat(intervals.slice(i));

            return res;
        } else { // has overlapped
            newStart = Math.min(newStart, currStart);
            newEnd = Math.max(newEnd, currEnd);
        }
    }

    res.push([newStart, newEnd]);
    return res;
};