function sortArray(array, string){
    string === 'asc'
        ? array.sort((a,b) => Number(a) - Number(b))
        : array.sort((a,b) => Number(b) - Number(a))
    return array;
}


console.log(sortArray([14, 7, 17, 6, 8], 'asc'));
console.log(sortArray([14, 7, 17, 6, 8], 'desc'));