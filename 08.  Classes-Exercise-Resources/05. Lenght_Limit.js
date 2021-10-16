class Stringer{
    constructor(string,length){
        this.innerString = string;
        this.innerLength = length;
    }

    decrease(length){
        this.innerLength -= length;
        if(this.innerLength < 0){
            this.innerLength = 0;
        }
    }

    increase(length){
        this.innerLength += length;
    }

    toString(){
        let result = this.innerString;
        if(result.length > this.innerLength){
            result = `${Array.from(this.innerString).splice(0,this.innerLength).join('')}...`;
        }
        return result
    }
}


let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test
