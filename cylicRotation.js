function cyclicRotation(A, K) {
    const N = A.length;
    const rotations = K % N;

    const rotatedArray = [];

    // Copy the last K elements to the beginning of the new array
    rotatedArray.push(...A.slice(N - rotations));

    // Copy the remaining elements to the new array
    rotatedArray.push(...A.slice(0, N - rotations));

    return rotatedArray;
}
