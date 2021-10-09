function printN(array, num) {
    const result = [];
    for (let i = 0; i < array.length; i += num) {
        result.push(array[i]);
    }
    return result;
}


console.log(printN(['1',
        '2',
        '3',
        '4',
        '5'],
    6
))