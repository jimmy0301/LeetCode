// Use array to implement maximum heap
class MinHeap {
    constructor() {
        this.heap = [];
        this.size = 0;
    }

    insert(item) {
        this.heap.push(item);
        this.swim(this.heap.length - 1);
        this.size += 1;
    }

    getMin() {
        const value = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.sink(0);
        this.size -= 1;

        return value;
    }

    size() {
        return this.size;
    }

    swim(k) {
        while (k > 0 && 
            this.heap[parseInt((k -1) / 2, 10)] > this.heap[k]
        ) {
            const temp = this.heap[parseInt((k -1) / 2, 10)];
            this.heap[parseInt((k -1) / 2, 10)] = this.heap[k];
            this.heap[k] = temp;
            k = parseInt((k - 1) / 2, 10);
        }
    }

    sink(k) {
        while (k * 2 + 1 < this.heap.length) {
			let j = k * 2 + 1
			if (k * 2 + 2 < this.heap.length &&
                this.heap[k * 2 + 2] < this.heap[k * 2 + 1]
            ) {
				j = k * 2 + 2
            }

			if (this.heap[j] < this.heap[k]) {
				const temp = this.heap[j];
                this.heap[j] = this.heap[k];
                this.heap[k] = temp;
            }

			k = j
        }
    }
}

const minHeap = new MinHeap();

const a = [3, 7, 6, 7, 8, 9];

for (let i = 0; i < a.length; i += 1) {
    minHeap.insert(a[i]);
}

console.log('heap size', minHeap.size);
for (let i = 0; i < a.length; i += 1) {
    console.log('val:', minHeap.getMin());
    console.log('heap size', minHeap.size);
}