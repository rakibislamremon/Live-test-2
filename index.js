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



/* 8th problem */
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  }
console.log(isLeapYear(2024)); 
console.log(isLeapYear(1900));
console.log(isLeapYear(2000));
console.log(isLeapYear(2023));


/*9th problem */
function findLargestNumber(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i];
      }
    }
    return largest;
  }
console.log(findLargestNumber([3, 7, 2, 9, 5]));
console.log(findLargestNumber([-10, -3, -20, -5]));


/*10 th problem */
function findSpecificName(arr, name) {
  return arr.includes(name) ? name : "Name not found";
}

const names = ["John", "Alice", "Bob", "Mary"];

console.log(findSpecificName(names, "Alice")); 
console.log(findSpecificName(names, "David"));

