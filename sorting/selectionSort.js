const swap = (arr, i, x) => {
  [arr[i], arr[x]] = [arr[x], arr[i]];
}
const selectionSort = (arr) => {
  for(let i=0; i < arr.length; i++){
    let swapped = false;
    let minToSwap = i;
    for(let j=i+1; j < arr.length; j++){
      if(arr[minToSwap] > arr[j]){
        minToSwap = j;
        swapped = true;
      }
    }
    if(!swapped)break
    swap(arr, minToSwap, i);
  }
  return arr;
}
