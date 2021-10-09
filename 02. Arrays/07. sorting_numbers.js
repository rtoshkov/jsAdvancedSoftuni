function solve7(arr) {
    arr = arr.sort((a, b) => {
        return a - b;
    })
    const result = [];
    while (arr.length !== 0) {
        result.push(arr.shift());
        if (arr.length === 0){
            break;
        }
        result.push(arr.pop())
    }

    return result;
}