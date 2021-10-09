function calculator() {

    return  {
        init(selector1, selector2, resultSelector) {
            this.selector1 = selector1;
            this.selector2 = selector2;
            this.resultSelector = resultSelector
        },
        add(){
            let elementOne = document.querySelector(this.selector1).value;
            let elementTwo = document.querySelector(this.selector2).value;
            let resultElement = document.querySelector(this.resultSelector);
            resultElement.value = Number(elementOne) + Number(elementTwo);
        },
        subtract(){
            let elementOne = document.querySelector(this.selector1).value;
            let elementTwo = document.querySelector(this.selector2).value;
            let resultElement = document.querySelector(this.resultSelector);
            resultElement.value = Number(elementOne) - Number(elementTwo);
        },
        selector1: '',
        selector2: '',
        selector3: '',
    }
}

const calculate = calculator ();
calculate.init ('#num1', '#num2', '#result');





