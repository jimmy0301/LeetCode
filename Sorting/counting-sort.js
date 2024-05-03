const countingSort = (arr) => {
    const max = Math.max(...arr);
    const count = Array(max + 1).fill(0);
    const map = {};
    

    for (let i = 0; i < arr.length; i += 1) {
        map[arr[i]] = 1;
        count[arr[i]] += 1;
    }

    // prefix sum
    for (let i = count.length - 1; i >= 1; i -= 1) {
        count[i - 1] += count[i];
    }

    console.log('count', count);
}

console.log(countingSort([3, 0, 6, 1, 5]));