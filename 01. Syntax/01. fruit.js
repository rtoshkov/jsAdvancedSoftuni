function price_of_fruit(fruit, weight_grams, price_per_kilo) {
    const weight_in_kilo = weight_grams / 1000;
    const money = weight_in_kilo * price_per_kilo;

    console.log(`I need $${money.toFixed(2)} to buy ${weight_in_kilo.toFixed(2)} kilograms ${fruit}.`);
}


price_of_fruit('orange', 2500, 1.80);
price_of_fruit('apple', 1563, 2.35);
