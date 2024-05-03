// Two pointers

function trap1(height) {
    let l = 0;
    let r = height.length - 1;
    let leftMax = height[l];
    let rightMax = height[r];
    let res = 0;

    while (l < r) {
        if (rightMax > leftMax) {
            l += 1;
            leftMax = Math.max(leftMax, height[l]);
            res += leftMax - height[l];
        } else {
            r -= 1;
            rightMax = Math.max(rightMax, height[r]);
            res += rightMax - height[r];
        }
    }

    return res;
}

// Stack
function trap2(height = [0,1,0,2,1,0,1,3,2,1,2,1]) {
    const stack = [];
    let res = 0;

    for (let i = 0; i < height.length; i += 1) {
        while (
            stack.length > 0 &&
            height[stack[stack.length - 1]] < height[i]
        ) {
            const topIndex = stack.pop();
            if (stack.length <= 0) {
                break;
            }

            const distance = i - stack[stack.length - 1] - 1;
            const minHeight = (Math.min(
                height[i],
                height[stack[stack.length - 1]]
            ) - height[topIndex]);

            const water = minHeight * distance;
            res += water;
        }
        stack.push(i);
    }

    return res;
}

console.log(trap2());