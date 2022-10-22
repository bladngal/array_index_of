const { getArray } = require("./hackUtils");

//this function works as well, but abandoned it before I found the bug in the array generator
function binarySearch(arr, target) {
    var count = 0;
    var leftPointer = 0;
    var rightPointer = arr.length - 1;
    var testPointer;
    while(leftPointer < rightPointer){
        count ++;
        console.log(count);
        testPointer = leftPointer + Math.floor((rightPointer - leftPointer)/2);
        
        if(arr[testPointer] === target) return testPointer;
        //if not found, move a pointer
        if(arr[testPointer] < target){
            leftPointer = testPointer + 1;
        }
        // arr[testPointer] > target
        else {
            rightPointer = testPointer - 1;
        } 
        if(leftPointer === rightPointer){
            if(arr[leftPointer] === target) return leftPointer;
        }
        
    }
    //we exited without finding the value, so return not found code 
    return -1;
}

//totally stole this from StackOverflow
function binSearch(array, targetValue) {
    var min = 0;
    var max = array.length - 1;
    var index;
    var steps = 0;

    while(min <= max) {
        steps ++;
        index = Math.floor((max + min) / 2);
        // console.log("index:", index, "min:", min, "max:", max)
        // console.log("array[index]:", array[index])
        if (array[index] === targetValue) {
            return {
                steps,
                index,
            };
        }
        else if (array[index] < targetValue) {
            min = index + 1;
        }
        else {
            max = index - 1;
        }

    }

    return -1;
}


// your answer here
console.log("try1");
const arr = getArray(1000000, 10);

//found an error in hackUtils.js where the array was not sorted
//arr.sort(function(a, b){return a - b});
//console.log(arr)

console.log("binSearch", binSearch(arr, 13595666252)) //13,595,666,252
console.log("indexOf", arr.indexOf(13595666252))


// console.log("binSearch", binSearch(arr, 12314181960)) //13,595,666,252
// console.log("indexOf", arr.indexOf(12314181960))
