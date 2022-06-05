function hasTargetSum(array, target) {
const half = Math.ceil(array.length / 2);    
const firstHalf = array.splice(0, half)
const secondHalf = array.splice(-half)
console.log(firstHalf,secondHalf)
  // Write your algorithm here
  for(let i=0;i<firstHalf.length;i++)
  {
    for(let j=0;j<secondHalf.length;j++)
    {
    if(firstHalf[i]+secondHalf[j]===target || firstHalf[i]+firstHalf[i+1]==target || secondHalf[j]+secondHalf[j+1]==target)
    {
      return true
    }
    }
    
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  O(n^2)
*/

/* 
  Add your pseudocode here
  1.First split the array into two halfs
  2.two for loops for comparing the elements of the two arrays
  3 compare elements between the two arrays also between the same array
*/

/*
  Add written explanation of your solution here
  it is not the best solution since the time complexity is O(n^2) but i wanted to try a diffrent approach 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 5, 4, 8, 12], 20));
}

module.exports = hasTargetSum;
