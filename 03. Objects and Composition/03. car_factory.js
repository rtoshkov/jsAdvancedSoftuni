function carFactory(obj) {
    const result = {
        model: obj.model,
    };

    if (obj.power <= 90){
        result.engine = { power: 90, volume: 1800 };
    }else if (obj.power <= 120){
        result.engine = { power: 120, volume: 2400 };
    }else{
        result.engine = { power: 200, volume: 3500 };
    }

    const carriage = {
        'hatchback' : { type: 'hatchback', color: obj.color },
        'coupe': { type: 'coupe', color: obj.color },
    }

    result.carriage = carriage[obj.carriage];

    if (obj.wheelsize % 2 === 0){
        obj.wheelsize -= 1;
    }
    result.wheels = Array(4).fill(obj.wheelsize);
    return result;
}


console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));

console.log('------------------------------------------------');

console.log(carFactory({
        model: 'Opel Vectra',
        power: 110,
        color: 'grey',
        carriage: 'coupe',
        wheelsize: 17
    }));


console.log('------------------------------------------------');

