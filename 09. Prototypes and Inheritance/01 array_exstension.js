(function (){
    Array.prototype.last = function(){
        return this[this.length - 1];
    };
    Array.prototype.skip = function(n){
        return this.slice(n);
    };
    Array.prototype.take = function(m){
        return this.slice(0,m);
    };
    Array.prototype.sum = function(){
        return this.reduce(((acc,curr) => acc + curr),0);
    }
    Array.prototype.average = function(){
        return this.sum() / this.length
    }
}())



let l = [2,3,4,6,7,8];

console.log(l.last());
console.log(l.average());