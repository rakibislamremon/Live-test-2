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
    [11, 5, 56, 90, 44, 46, 56,11,45]));