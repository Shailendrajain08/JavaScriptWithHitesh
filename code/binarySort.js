// We have a array of binary digits. Out task is to sort the array in which all zeros sorted first then 1's will come. Write this code in JavaScript

function sortBinaryArray(arr) {
    // Custom sorting function
    arr.sort((a, b) => {
        // If a is 0 and b is 1, a should come before b
        if (a === 0 && b === 1) {
            return -1;
        }
        // If a is 1 and b is 0, b should come before a
        else if (a === 1 && b === 0) {
            return 1;
        }
        // Otherwise, maintain the relative order of elements
        else {
            return 0;
        }
    });
    return arr;
}

// Example usage:
const binaryArray = [1, 0, 1, 0, 1, 1, 0, 0];
const sortedArray = sortBinaryArray(binaryArray);
console.log(sortedArray); // Output: [0, 0, 0, 0, 1, 1, 1, 1]
