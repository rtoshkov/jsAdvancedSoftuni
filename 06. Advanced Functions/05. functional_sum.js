function add(a){
    let sum = 0;


    function funcSum(a){
        sum += a;
        return funcSum;
    }
    funcSum.toString = () => {return sum}

    return funcSum(a);
}

