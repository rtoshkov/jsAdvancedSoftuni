function validityChecker(a1, b1, a2, b2) {

    function distance(x1, y1, x2, y2) {
        let y = x2 - x1;
        let x = y2 - y1;

        return Math.sqrt(x * x + y * y);
    }

    const OneToZero = distance(a1,b1,0,0);
    console.log(`{${a1}, ${b1}} to {0, 0} is ${(Number.isInteger(OneToZero) ? 'valid': 'invalid')}`);
    const TwoToZero = distance(a2,b2,0,0);
    console.log(`{${a2}, ${b2}} to {0, 0} is ${(Number.isInteger(TwoToZero) ? 'valid': 'invalid')}`);
    const ToEachOther = distance(a1,b1,a2,b2);
    console.log(`{${a1}, ${b1}} to {${a2}, ${b2}} is ${(Number.isInteger(ToEachOther) ? 'valid': 'invalid')}`);
}


validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1);