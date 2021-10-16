class Hex{
    constructor(value) {
        this.value = value;
    }

    valueOf(){
        return this.value;
    }

    toString(){
        let yourNumber  = this.value;
        return `0X${yourNumber.toString(16).toUpperCase()}`;
    }

    plus(value){
        if(!Number.isInteger(value)){
            value = parseInt('00ff0000', value);
        }
        console.log(value);
        this.value += value;
        return this.value;
    }
}


let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 === 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
// console.log(FF.parse('AAA'));

