function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    function onClick() {
        let userInput = document.querySelector('#inputs textarea');
        let inputText = JSON.parse(userInput.value);
        let bestRestaurantElement = document.querySelector('#outputs p');
        bestRestaurantElement.textContent = '';
        let workersElement = document.querySelector('#workers p');
        workersElement.textContent = '';

        //['Mikes - Steve 1000, Ivan 200, Paul 800', 'Fleet - Maria 850, Janet 650', 'Mikes - Andrew 1000, Raul 200']
        let restaurants = {}

        //  Creating objects restaurant['Name'] with .workers = [employees] and 2 functions
        //  Each object has 2 functions to sort the employees by salary and to return average salary

        inputText.forEach((a) => {
            let [restaurant, employees] = a.split(' - ');
            employees = employees.split(', ');

            if (!restaurants[restaurant]) {
                restaurants[restaurant] = {
                    workers: [],
                    sortEmployees() {
                        this.workers.sort((a, b) => Number(b.split(' ')[1]) - Number(a.split(' ')[1]))
                    },
                    getAverage() {
                        const reducer = (accumulator, currentValue) => accumulator + Number(currentValue.split(' ')[1]);
                        const allSalaries = this.workers.reduce(reducer, 0)
                        return allSalaries / this.workers.length;
                    }
                };
            }
            restaurants[restaurant].workers = restaurants[restaurant].workers.concat(employees);
        })

        // Main Logic
        let bestRestaurant = null;
        let containerSalary = Number.MIN_SAFE_INTEGER;
        for (let item in restaurants) {
            if (restaurants[item].getAverage() > containerSalary) {
                bestRestaurant = restaurants[item];
                bestRestaurant.name = item;
                containerSalary = restaurants[item].getAverage();
            }
        }


        bestRestaurant.sortEmployees();

        for (let worker of bestRestaurant.workers) {
            let [name, salary] = worker.split(' ');
            workersElement.textContent += `Name: ${name} With Salary: ${Number(salary)} `;
        }

        bestRestaurantElement.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.getAverage().toFixed(2)} Best Salary: ${Number(bestRestaurant.workers[0].split(' ')[1]).toFixed(2)}`;
    }
}