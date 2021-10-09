function getFibonator(){
    let prev = 1;
    let next = 0;

    function fibonacci(){
        let temp = prev + next;
        prev = next;
        next = temp;
        return next;
    }
    return fibonacci;
}





let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
