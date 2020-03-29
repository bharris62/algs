const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

const pivot = (arr, start=0, end=arr.length + 1) => {
  let pivot = arr[start];
  let swapIdx = start;

  for (let i=start+1;  i < arr.length; i++){
      if (pivot > arr[i]){
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
};

const quickSort = (arr, left =0, right = arr.length-1) => {
  if (left < right){
    let piv = pivot(arr, left, right);
    quickSort(arr, left , piv -1);
    quickSort(arr, piv +1, right)
  }
  return arr;

};
