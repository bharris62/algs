const getDigit = (num, idx) => {
  let digitStr = num.toString().split('');
  let digit = parseInt(digitStr[digitStr.length-1 - idx]);
  return !isNaN(digit) ? digit  : 0;
};

const digitCount = (num) => {
  return num.toString().replace('-', '').split('').length;
};

const mostDigits = (arr) => {
  let max = 0;

  arr.forEach((i) => {
    max = Math.max(digitCount(i), max);
  });

  return max;
};

const radixSort = (nums) => {
  let numDigits = mostDigits(nums);
  for (let k=0; k < numDigits; k++){
    let digitBuckets = Array.from({length: 10}, () => [])
    for (let i=0; i< nums.length; i++){
      digitBuckets[getDigit(nums[i], k)].push(nums[i])
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
};

console.log(radixSort([23,345,5467,12,2345,9852]));
