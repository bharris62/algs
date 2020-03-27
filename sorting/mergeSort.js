const merge = (arr1, arr2) => {
  let p1 = 0;
  let p2 = 0;
  let merged = [];

  while (merged.length !== (arr1.length + arr2.length)) {
    if (arr1[p1] <= arr2[p2]) {
      merged.push(arr1[p1]);
      p1 += 1;

      if (p1 === arr1.length) {
        merged.push(...arr2.slice(p2,));
        return merged;
      }

    } else {

      merged.push(arr2[p2]);
      p2 += 1;

      if (p2 === arr2.length) {
        merged.push(...arr1.slice(p1,))
        return merged;
      }

    }
  }
  return merged;
};

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
};


