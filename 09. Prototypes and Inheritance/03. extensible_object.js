function extensibleObject(){
    let prototype = {};
    let result = Object.create(prototype);
    prototype.extend = function(obj){
        for(let k in obj){
            if(typeof(obj[k]) === 'function'){
                prototype[k] = obj[k];
            }else{
                result[k] = obj[k];
            }
        }
    };

    return result;
}


const myObj = extensibleObject();

const template = {
    extensionMethod: function () {},
    extensionProperty: 'someString'
}
myObj.extend(template);
