function calorieObject(arr) {
    let result = {};
    for (let i = 0; i < arr.length; i += 2) {
        result[arr[i]] = Number(arr[i+1]);
    }
    console.log(result);
}


calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
console.log('-------------------------------------------------------------');
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);