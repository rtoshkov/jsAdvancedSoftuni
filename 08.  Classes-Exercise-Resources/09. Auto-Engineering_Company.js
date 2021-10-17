function engineeringCompany(array){
    let recordBook = new Map();

    function createNewRecord(name, iModel){
        if (recordBook.get(name) === undefined){
            let model = new Map();
            model.set(iModel, 0)
            recordBook.set(name, model);
        } else if(recordBook.get(name).get(iModel) === undefined){
            recordBook.get(name).set(iModel,0);
        }
    }

    array.forEach((e) => {
        let [brand,model,quantity] = e.split(' | ');
        quantity = Number(quantity);
        createNewRecord(brand,model);
        recordBook.get(brand).set(model, recordBook.get(brand).get(model) + quantity)

    })

    Array.from(recordBook).forEach((k) => {
        let [brandName, register] = [...k];
        console.log(brandName);
        Array.from(register).forEach((r) => {
            let [modelName, quantityResult] = [...r];
            console.log(`###${modelName} -> ${quantityResult}`);
        })
    } )

}



engineeringCompany(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
)