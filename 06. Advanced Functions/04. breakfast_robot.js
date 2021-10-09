function solution() {

    const products = {
        'apple': {'carbohydrate': 1, 'flavour': 2},
        'lemonade': {'carbohydrate': 10, 'flavour': 20},
        'burger': {'carbohydrate': 5, 'fat': 7, 'flavour': 3},
        'eggs': {'protein': 5, 'fat': 1, 'flavour': 1},
        'turkey': {'protein': 10, 'carbohydrate': 10, 'fat': 10, 'flavour': 10},
    }

    const container = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,

    }


    function restock(params) {
        let [microel, quantity] = params;
        container[microel] += Number(quantity);
        return 'Success';
    }

    function prepare(params) {
        let [recipe, quantity] = params;
        quantity = Number(quantity);
        for (let i = 0; i < quantity; i++){
            for (const [key, value] of Object.entries(products[recipe])){
                if (container[key] < value){
                    return `Error: not enough ${key} in stock`;
                }
                container[key] -= value;
            }

        }
        return 'Success';


    }

    function report() {
        let report = [];
        for (const key of Object.keys(container)){
            report.push(`${key}=${container[key]}`)
        }
        return report.join(' ');
    }


    function manager(string) {

        let [command, ...params] = string.split(' ');
        if (command === 'restock') {
            return restock(params);
        } else if (command === 'prepare') {
            return prepare(params);
        } else {
            return report();
        }

    }

    return manager
}


let manager = solution ();
console.log (manager ("prepare turkey")); // Success
console.log (manager ("prepare lemonade 4")); // Error: not enough carbohydrate in stock
console.log (manager ("restock flavour 50"));
console.log (manager ("prepare lemonade 4"));
console.log (manager ("restock carbohydrate 10"));
console.log (manager ("restock flavour 10"));
console.log (manager ("prepare apple 1"));
console.log (manager ("restock fat 10"));
console.log (manager ("prepare burger 1"));
console.log (manager ("report"));
console.log (manager ("prepare turkey 1"));
console.log (manager ("restock protein 10"));
console.log (manager ("prepare turkey 1"));
console.log (manager ("restock carbohydrate 10"));



