class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products) {
        let record = [];
        for (let oneProduct of products) {
            let [productName, productQuantity, productTotalPrice] = oneProduct.split(' ');
            productQuantity = Number(productQuantity);
            productTotalPrice = Number(productTotalPrice);
            // console.log(productName,productQuantity,productTotalPrice);

            if(productTotalPrice <= this.budgetMoney){

                if(this.stockProducts[productName] === undefined){
                    this.stockProducts[productName] = 0;
                }

                this.stockProducts[productName] += productQuantity;
                this.budgetMoney -= productTotalPrice;
                record.push(`Successfully loaded ${productQuantity} ${productName}`);
            }else{
                record.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }
        }
        this.history = this.history.concat(record);
        return this.history.join('\n');  //TODO Виж дали трябва да връща record или целият this.history;

    }

    addToMenu(meal,neededProducts,price ){
        price = Number(price) //TODO пробвай без него
        if(this.menu.hasOwnProperty(meal)){
            return `The ${meal} is already in the our menu, try something different.`
        }
        this.menu[meal] = {'neededProducts': neededProducts,'price': price };

        const mealNumber = Object.keys(this.menu).length;
        if (mealNumber === 1){
            return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
        }

        return `Great idea! Now with the ${meal} we have ${mealNumber} meals in the menu, other ideas?`
    }

    showTheMenu(){
        if(Object.keys(this.menu).length === 0){
            return `Our menu is not ready yet, please come later...`;
        }

        let allMeals = [];
        for (let [key, value] of Object.entries(this.menu)){
            allMeals.push(`${key} - $ ${value['price']}`);
        }

        return allMeals.join('\n');
    }

    makeTheOrder(meal){
        if(!this.menu[meal]){
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        }
        let missingItems = this.menu[meal]['neededProducts'].filter((e) => {
            let [productName, productQuantity] = e.split(' ');
            productQuantity = Number(productQuantity);
            if(!Object.keys(this.stockProducts).includes(productName) || !this.stockProducts[productName] >= productQuantity){
                return e
            }});

        if (missingItems.length > 0){
            return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
        }

        this.menu[meal]['neededProducts'].forEach((e) => {
            let [productName, productQuantity] = e.split(' ');
            productQuantity = Number(productQuantity);
            this.stockProducts[productName] -= productQuantity;
            })
        this.budgetMoney += this.menu[meal]['price'];

        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal]['price']}.`
    }
}


let kitchen = new Restaurant(115);


console.log(kitchen.loadProducts(['Flour 0.5 40', 'Oil 0.2 10', 'Yeast 0.5 30', 'Salt 0.1 10', 'Sugar 0.1 15', 'Honey 5 50']));
console.log(kitchen.addToMenu('frozen Yogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log(kitchen.makeTheOrder('Pizza'))