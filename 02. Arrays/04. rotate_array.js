function rotateArray(array,count){
    for (let i = 0; i < count; i++){
        array.unshift(array.pop());
    }
    return array.join(' ');
}


// console.log(rotateArray(['1',
//         '2',
//         '3',
//         '4'],
//     2))


console.log(rotateArray(['Banana',
        'Orange',
        'Coconut',
        'Apple'],
    15))