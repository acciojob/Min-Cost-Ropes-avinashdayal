function minCostRopes(ropes) {
    if (ropes.length <= 1) {
        return 0; // No cost if 0 or 1 rope
    }

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

        minHeap.insert(currentCost); // Add the new combined rope back to the heap
    }

    return totalCost;
}
const ropes1 = [4, 3, 2, 6];
console.log(minCostRopes(ropes1)); // Output: 29

const ropes2 = [4, 2, 7, 6, 9];
console.log(minCostRopes(ropes2)); // Output: 62

const ropes3 = [10];
console.log(minCostRopes(ropes3)); // Output: 0