function argumentInfo(...params){
    let printResult = '';
    let typeCounter = {};

    params.forEach((e) => {
        printResult += `${typeof e}: ${e}\n`;
        typeCounter[typeof e]
            ? typeCounter[typeof e] += 1
            : typeCounter[typeof e] = 1;
    })

    Object.keys(typeCounter).forEach((r) => printResult += `${r} = ${typeCounter[r]}\n`);
    console.log(printResult);
}

argumentInfo('cat', 42, 35, function () { console.log('Hello world!'); });