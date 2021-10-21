export const binarySearchIterative = (arr, searchKey) => {
    let low = 0;
    let high = arr.length - 1;

    while(low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (searchKey === arr[mid]) {
            return mid
        } else if (searchKey < arr[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return -1;
};

export const binarySearchRecursive = (arr, searchKey, low = 0, high = arr.length - 1) => {
    if (low > high) {
        return - 1;
    }
    const mid = Math.floor((low + high) / 2);

    if (searchKey === arr[mid]) {
        return mid;
    } else if (searchKey < arr[mid]) {
        return binarySearchRecursive(arr, searchKey, low, mid - 1)
    } else {
        return binarySearchRecursive(arr, searchKey, mid + 1, high)
    }
};