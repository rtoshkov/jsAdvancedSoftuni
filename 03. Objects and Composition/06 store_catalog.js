function storeCatalog(arr) {
    let catalog = {};

    arr.forEach(el => {
        let firstLetter = el[0];

        if (!catalog[firstLetter]) {
            catalog[firstLetter] = {};
        }

        let [product, price] = el.split(' : ');
        catalog[firstLetter][product] = Number(price);
    })

    let sortedCapitals = Object.keys(catalog).sort((a, b) => a.localeCompare(b));

    for (let key of sortedCapitals) {
        let sorted = Object.entries(catalog[key]).sort((a, b) => a[0].localeCompare(b[0]));
        console.log(key);
        for (let item of sorted) {
            console.log(`  ${item[0]}: ${item[1]}`);
        }

    }

}


// storeCatalog(['Appricot : 20.4',
//     'Fridge : 1500',
//     'TV : 1499',
//     'Deodorant : 10',
//     'Boiler : 300',
//     'Apple : 1.25',
//     'Anti-Bug Spray : 15',
//     'T-Shirt : 10']
// );


storeCatalog(['Banana : 2',
    'Rubic\'s Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10'])