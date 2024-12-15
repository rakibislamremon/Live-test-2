/* 1st Problem */

for (let i = 2;i <= 20;i += 2){
    console.log(i);
}


/* 2nd Problem */

function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString
    ("Rakibul Islam"));


/* 3rd problem */

function  removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log( removeDuplicates(
    [11, 5, 56, 90, 44, 46, 56,11,3,45]));



/* 4th Problem */

function countVowels(str){
    const Vowel = str.match(/[aeiouAEIOU]/gi).length;
    return Vowel;}
console.log(countVowels
    ("The quick brown fox jumps over the lazy dog"));


/* 5th problem */
function findLargestNumber(arr) {
    return Math.max(...arr);
  }
  
  // Example usage
  console.log(findLargestNumber([3, 7, 2, 9, 5])); // Output: 9
  

/* 6th problem */
function findSmallestNumber(arr) {
    return Math.min(...arr);
  }
  
  // Example usage
  console.log(findSmallestNumber([3, 7, 2, 9, 5])); // Output: 2

  
//7th problem
function lessThanMedianSum(arr) {

    const sortedArr = [...arr].sort((a, b) => a - b);
  
    const mid = Math.floor(sortedArr.length / 2);
    let median;
    if (sortedArr.length % 2 === 0) {
      median = (sortedArr[mid - 1] + sortedArr[mid]) / 2;
    } else {
      median = sortedArr[mid];
    }
    const sum = arr.reduce((acc, num) => (num < median ? acc + num : acc), 0);
    return sum;

}
console.log(lessThanMedianSum([3, 1, 7, 9, 5]));
  