function cooking_by_numbers(...args){
    let result = args[0];

    for (let i = 1; i < args.length; i++){
       switch(true){
           case(args[i] === 'chop'):
               result = result / 2;
               break;
           case(args[i] === 'dice'):
               result = Math.sqrt(result);
               break;
           case(args[i] === 'spice'):
               result += 1;
               break;
           case(args[i] === 'bake'):
               result *= 3;
               break;
           case(args[i] === 'fillet'):
               result *= 0.8;
               break;
           default:
               break;
       }
       console.log(result);
    }
}




// cooking_by_numbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cooking_by_numbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
