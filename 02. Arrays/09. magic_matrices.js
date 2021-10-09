function magicMatrix(array) {

    let rows = array.length;
    let allSums = [];
    let is_magick = false;

    // for (let a = 1; a < array.length; a++){
    //     if (array[a].length != array[a-1].length){
    //         return true;
    //     }
    // }


    for (let i =0; i<rows; i++){
        let sumRow = 0;
        let sumCols = 0;


        for (let j =0; j < rows; j++){
            sumRow += array[i][j];
            sumCols += array[j][i];
        }

        allSums.push(sumRow);
        allSums.push(sumCols);
    }
    if (allSums.length > 0){

        is_magick = allSums.every(a => a == allSums[0])
    }
  return is_magick;

}


console.log(magicMatrix([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]))

console.log(magicMatrix([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]))

console.log(magicMatrix([[0],
    [0],
    [1]]))


function magicMatrix_old(array) {
    let magic = true;
    let sums = [];

    for (let i = 0; i < array.length; i++) {
        let result = 0;

        result = array[i].reduce(((accumulator, current) => {
            accumulator += current;
            return accumulator;
        }), 0)
        sums.push(result);

    }

    for (let i = 0; i < array.length; i++) {
        let col_sum = 0;
        for (let k = 0; k < array[i].length; k++) {
            col_sum += array[k][i];
        }
        sums.push(col_sum);
    }
    return sums.every((el) => el === sums[0]);

}