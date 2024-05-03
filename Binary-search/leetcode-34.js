const searchRange = (nums, target) => {
    let l = 0;
    let r = nums.length - 1;
    let leftMost = -1;

    while (l <= r) {
        const mid = l + Math.floor((r - l) / 2);
            
        if (nums[mid] === target) {
                leftMost = mid;
                r = mid - 1
        } else if (nums[mid] > target) {
                r = mid - 1;
        } else {
                l = mid + 1;
        }
    }

    l = 0;
    r = nums.length - 1;
    let rightMost = -1;
    while (l <= r) {
        const mid = l + Math.floor((r - l) / 2);
            
        if (nums[mid] === target) {
            rightMost = mid;
            l = mid + 1
        } else if (nums[mid] > target) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }

    return [leftMost, rightMost];
}

console.log(searchRange([1], 2));