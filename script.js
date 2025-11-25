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