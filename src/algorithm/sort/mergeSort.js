
const merge = (inputArr, low, mid, high) => {
  const leftSize = mid - low + 1;
  const rightSize = high - mid;
  const leftArr = [];
  const rightArr = [];

  for (let i=0; i < leftSize; i++) {
    leftArr[i] = inputArr[low + i];
  }

  for (let i=0; i < rightSize; i++) {
    rightArr[i] = inputArr[mid + 1 + i];
  }

  let i = 0;
  let j = 0;
  while(i < leftSize && j < rightSize) {
    if (leftArr[i] < rightArr[j]) {
      inputArr[low] = leftArr[i];
      low++;
      i++;
    } else {
      inputArr[low] = rightArr[j];
      low++;
      j++;
    }
  }

  while (i < leftSize) {
    inputArr[low] = leftArr[i]
    low++;
    i++;
  }

  while(j < rightSize) {
    inputArr[low] = rightArr[j];
      low++;
      j++;
  }

  return inputArr;
}

export const mergeSort = (inputArr, low=0, high= inputArr.length - 1) => {
  if (low < high) {
    let mid = Math.floor((low+high)/2);
    mergeSort(inputArr, low, mid);
    mergeSort(inputArr, mid+1, high);
    return merge(inputArr, low, mid, high);
  }
}
