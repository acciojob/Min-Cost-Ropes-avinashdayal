class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.heap.length - 1;

        while (index > 0) {
            let parent = Math.floor((index - 1) / 2);

            if (this.heap[parent] <= this.heap[index]) break;

            // Swap
            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
            index = parent;
        }
    }

    extractMin() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return min;
    }

    bubbleDown() {
        let index = 0;
        const length = this.heap.length;

        while (true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let smallest = index;

            if (left < length && this.heap[left] < this.heap[smallest]) {
                smallest = left;
            }
            if (right < length && this.heap[right] < this.heap[smallest]) {
                smallest = right;
            }

            if (smallest === index) break;

            // Swap
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }

    size() {
        return this.heap.length;
    }
}

// Main function
function minCostRopes(ropes) {
    if (ropes.length <= 1) return 0;

    const minHeap = new MinHeap();
    for (const rope of ropes) {
        minHeap.insert(rope);
    }

    let totalCost = 0;

    while (minHeap.size() > 1) {
        const firstMin = minHeap.extractMin();
        const secondMin = minHeap.extractMin();

        const currentCost = firstMin + secondMin;
        totalCost += currentCost;

        minHeap.insert(currentCost);
    }

    return totalCost;
}

// Test Cases
const ropes1 = [4, 3, 2, 6];
console.log(minCostRopes(ropes1)); // 29

const ropes2 = [4, 2, 7, 6, 9];
console.log(minCostRopes(ropes2)); // 62

const ropes3 = [10];
console.log(minCostRopes(ropes3)); // 0
