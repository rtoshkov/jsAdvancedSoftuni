function solve4(arr) {
    const result = [];
    let biggest = Number.MIN_SAFE_INTEGER;

    arr.reduce(
        (accumulated, current) => {
            if (current >= biggest) {
                biggest = current;
                accumulated.push(current);
            }

            return accumulated;
        }, result)

    return result;
}


// console.log(solve4([-1, 5, 1, 10, 2, 3, 4]))


function solve7(arr) {
    arr = arr.sort((a, b) => {
        return a - b;
    })
    const result = [];
    while (arr.length !== 0) {
        result.push(arr.shift(), arr.pop());
    }

    return result;
}

//
// console.log(solve7([1, 14, 2, 4, 10]))


let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

// Filter array items based on search criteria (query)
function filterItems(arr, query) {
    return arr.filter(function (el) {
        return el.toLowerCase()
            .indexOf(query.toLowerCase()) !== -1;
    });
}

console.log(filterItems(fruits, 'ap')); // ['apple', 'grapes']


let fruits2 = ['apple', 'banana', 'grapes', 'mango', 'orange'];

console.log(fruits2.indexOf('ap'))


const numbersArr = [30, 50, 40, 10, 70];

const average =
    numbersArr.reduce((total, number, index, array) => {
        total += number;
        if (index === array.length - 1) {
            return total / array.length;
        } else {
            return total;
        }
    })

console.log(average) // 40