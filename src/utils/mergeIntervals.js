function mergeIntervals(intervals) {

    // Edge case
    if (intervals.length <= 1) {
        return intervals;
    }


    // Step 1: Sort intervals based on start value
    const sortedIntervals = [...intervals].sort(
        (a, b) => a[0] - b[0]
    );


    // Step 2: Store merged intervals
    const merged = [sortedIntervals[0]];


    // Step 3: Compare intervals
    for (let i = 1; i < sortedIntervals.length; i++) {

        const currentInterval = sortedIntervals[i];

        const lastMergedInterval = merged[merged.length - 1];


        // Check overlap
        if (currentInterval[0] <= lastMergedInterval[1]) {


            // Merge intervals
            lastMergedInterval[1] = Math.max(
                lastMergedInterval[1],
                currentInterval[1]
            );


        } else {


            // No overlap, add new interval
            merged.push(currentInterval);

        }

    }


    return merged;

}


export default mergeIntervals;