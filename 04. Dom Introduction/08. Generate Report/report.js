function generateReport() {
    let headers = document.querySelectorAll('table th');
    let tableColumns = document.querySelectorAll('table tbody tr');
    console.log(tableColumns);
    let output = document.getElementById('output')
    tableColumns = Array.from(tableColumns);
    headers = Array.from(headers);

    // Collecting info which checkedColumns to gather
    let checkedColumns = [];
    headers.forEach((a, i) => {
        if (a.children[0].checked) {
            checkedColumns.push(i);
        }
    })

    let containerObjects = [];
    // Creating Objects
    for (let i = 0; i < tableColumns.length; i++) {
        let td = Array.from(tableColumns[i].children);
        let temp_container = {}
        for (let number of checkedColumns) {
            let name = headers[number].textContent.trim().toLowerCase();
            temp_container[name] = td[number].textContent;
        }
        containerObjects.push(temp_container);
    }


    output.textContent = JSON.stringify(containerObjects);
}