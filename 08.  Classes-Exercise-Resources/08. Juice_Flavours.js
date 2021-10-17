function juiceFlavors(array) {
    let bottles = new Map();
    let container = new Map();

    array.forEach((e) => {
        let [juice, quantity] = e.split(' => ');
        quantity = Number(quantity);

        if (container.get(juice) === undefined) {
            container.set(juice, 0);
        }

        container.set(juice, container.get(juice) + quantity);

        if (container.get(juice) >= 1000) {
            let bottle = Math.trunc(container.get(juice) / 1000)
            container.set(juice, container.get(juice) % 1000);
            bottles.get(juice) === undefined ? bottles.set(juice, bottle) : bottles.set(juice, bottles.get(juice) + bottle);
        }
    })

    Array.from(bottles).forEach((e) => {
        let [key, value] = [...e];
        console.log(`${key} => ${value}`);
    })
}


juiceFlavors(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
)