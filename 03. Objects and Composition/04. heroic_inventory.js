function heroicInventory(arr) {
    let result = [];

    arr.forEach((el) =>{
        let hero = {};
        let [name, level, items] = el.split('/ ')
        hero = {
            name : name.trim(),
            level: Number(level.trim()),
            items: [],
        }

        if (items){
            hero.items = items.split(', ');
        }

        result.push(hero)
    })


    return JSON.stringify(result);
}


console.log(heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']));

console.log('--------------------------------------------------------');


console.log(heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']));
