function townsToJSON(arr){
    let result = [];

    arr.forEach(el => {
        el = el.substr(2,el.length-4);
        el = el.split(' | ');
        result.push(el);
    })

    let jsonRAW = []
    for (let row = 1; row < result.length; row++ ){
        let [city, firstValue, secondValue] = result[row];
        firstValue = Number(firstValue).toFixed(2);
        secondValue = Number(secondValue).toFixed(2);

        let attach = {};
        attach[result[0][0]] = city;
        attach[result[0][1]] = Number(firstValue);
        attach[result[0][2]] = Number(secondValue);

        jsonRAW.push(attach);
    }

    return JSON.stringify(jsonRAW);
}




console.log(townsToJSON(
    ['| Town | Latitude | Longitude |',
        '| Sofia | 42.696552 | 23.32601 |',
        '| Beijing | 39.913818 | 116.363625 |']
))


console.log(townsToJSON(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']))