const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

const bubbleSort = (arr) => {
  let swaps = 0;
  for(let i=arr.length; i > 0; i--){
    swaps = 0;
    for (let j=0; j < i - 1; j++){
      if(arr[j] > arr[j+1]){
        swap(arr, j, j+1);
        swaps +=1;
      }
    }
    if (swaps === 0) break;
  }
  return arr;
}
