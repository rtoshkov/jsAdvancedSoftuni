function greatest_common_divisor(num1,num2){
    num1 = Math.abs(num1);
    num2 = Math.abs(num2);
    while(num2){
        let temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }
    return num1;
}

console.log(greatest_common_divisor(15,5));
console.log(greatest_common_divisor(2154,458));