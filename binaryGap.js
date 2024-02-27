function binaryGap(N) {
    const binaryStr = N.toString(2);

    let maxGap = 0;
    let currentGap = 0;

    for (let digit of binaryStr) {
        maxGap = digit === '1' ? Math.max(maxGap, currentGap) : maxGap;
        currentGap = digit === '0' && maxGap > 0 ? currentGap + 1 : 0;
    }

    return maxGap;
}