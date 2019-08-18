const binarySearch = (arr, v) => {
  let begin = 0;
  let end = arr.length -1;
  let mid = Math.floor((begin + end) / 2);

  while(arr[mid] !== v && begin <= mid) {
    if (v < arr[mid]){
      end = mid -1;
    }else{
      begin = mid +1;
    }
    mid = Math.floor((begin + end) / 2);
  }

  if (arr[mid] === v) {
    return mid;
  }else {
    return -1;
  }
}
