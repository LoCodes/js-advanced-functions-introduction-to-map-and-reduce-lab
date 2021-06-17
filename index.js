// Your code here

// mapToNegativize returns an array with all values made negative
// ✓ transforms correctly

function mapToNegativize (array) {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
      newArray.push(-1 * array[i])
    }
    return newArray
}


// mapToNoChange returns an array with the original values
// ✓ transforms correctly  

function mapToNoChange(array) {
    return array
}


// mapToDouble returns an array with the original values multiplied by 2
//         ✓ transforms correctly

function mapToDouble(array) {
    const newArray  = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i] * 2)
    }
    return newArray
}


// mapToSquare returns an array with the original values squared
//         ✓ transforms correctly

function mapToSquare(array) {
    const newArray  = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i] **2)
    }
    return newArray
}

// reduceToTotal returns a running total when not given a starting point
//       ✓ reduces correctly
//     reduceToTotal returns a running total when given a starting point
//       ✓ reduces correctly

function reduceToTotal(sourceArray, startingPoint = 0) {
    let runningTotal = startingPoint
    for (let i = 0; i < sourceArray.length; i++ ) {
        runningTotal += sourceArray[i]
    }
    return runningTotal
}


// reduceToAllTrue returns true when all values are truthy
//       ✓ reduces correctly
//     reduceToAllTrue returns false when any value is falsy
//       ✓ reduces correctly

function reduceToAllTrue(array) { // calling the original array
    for(let i = 0; i < array.length; i++){  // iterate over each index of array
        if(!array[i]){  // if each index of array is not true return false 
            return false
        }
    }
    return true
}


// reduceToAnyTrue returns true when a true value is present
//       ✓ reduces correctly
//     reduceToAnyTrue returns false when no true value is present
//       ✓ reduces correctly


function reduceToAnyTrue(array){
    for(let i = 0; i < array.length; i++){
        if(array[i]){
            return true
        }
    }
    return false
}