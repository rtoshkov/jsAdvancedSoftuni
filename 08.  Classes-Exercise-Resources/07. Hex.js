class Hex{
    constructor(value) {
        this.value = value;
    }

    valueOf(){
        return this.value;
    }

    toString(){
        let yourNumber  = this.value;
        return `0x${yourNumber.toString(16).toUpperCase()}`;
    }

    plus(value){
        if(!Number.isInteger(value)){
            value = parseInt(value, 16);
        }
        let result = this.value + value;
        return new Hex(result);
    }

    minus(value){
        if(!Number.isInteger(value)){
            value = parseInt(value, 16);
        }
        let result = this.value - value;
        return new Hex(result);
    }
    parse(string){
        return parseInt(string, 16);
    }

}


let a = new Hex(10);
let b = new Hex(5);
let c = new Hex(155);
let act2 = a.plus(c).toString();
let exp2 = "0xA5";
let act3 = a.minus(b).toString();
let exp3 = "0x5";
console.log(act3)
console.log(act3 == exp3)


