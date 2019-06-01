var twoSum = function(nums, target) {
  var arr2 = [];
  nums.forEach((item, index, array) => {
    for (let x = index + 1; x < array.length; x++) {
      let sum2 = item + array[x];
      if (sum2 === target) {
        let a = index;
        let b = x;
        arr2.push(a, b);
      }
    }
  });

  return arr2;
};
