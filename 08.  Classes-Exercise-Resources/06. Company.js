class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        const invalidInput = ['', undefined, null];
        if (invalidInput.includes(name)
            || invalidInput.includes(salary)
            || invalidInput.includes(position)
            || invalidInput.includes(department)) {
            throw new Error('Invalid input!');
        }

        if (salary < 0) {
            throw new Error('Invalid input!');
        }

        if (this.departments[department] === undefined) {
            this.departments[department] = []
        }

        this.departments[department].push({
            name: name,
            salary: salary,
            position: position,
            department: department,
        })
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }


    _averageSalary(obj) {
        let reducer = (acc, curr) => {
            return acc += curr.salary
        };
        let divider = Array.from(Object.keys(obj)).length;
        return obj.reduce(reducer, 0) / divider;
    }

    bestDepartment() {
        let allDepartments = Array.from(Object.values(this.departments))
            .sort((a, b) => this._averageSalary(b) - this._averageSalary(a));

        let result = `Best Department is: ${allDepartments[0][0].department}\nAverage salary: ${this._averageSalary(allDepartments[0]).toFixed(2)}\n`

        allDepartments[0].sort((a,b) => {
            let temp = b.salary - a.salary;
            if(temp === 0){
              return a.name.localeCompare(b.name);
            }
            return temp;
        })
        let temp = [];
        allDepartments[0].forEach((e) => {
            // console.log(e)
            // console.log('--------------')
            temp.push(`${e.name} ${e.salary} ${e.position}`)
        })
        result += temp.join('\n');
        return result;
    }
}

