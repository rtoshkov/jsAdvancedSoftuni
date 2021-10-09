function extractIncreasing(arr){
    let biggest = Number.MIN_SAFE_INTEGER;
    let result = [];

    arr.reduce(((accumulator,current) => {
        if (current >= biggest){
            accumulator.push(current);
            biggest = current;
        }
        return accumulator;
    }),result )

    return result;
}


// console.log(extractIncreasing([1,
//     3,
//     8,
//     4,
//     10,
//     12,
//     3,
//     2,
//     24]))
//
// console.log(extractIncreasing([1,
//     2,
//     3,
//     4]))

console.log(extractIncreasing([20,
    3,
    2,
    15,
    6,
    1]))