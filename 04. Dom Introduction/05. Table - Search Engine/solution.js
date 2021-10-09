function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);

    function onClick() {
        let searchFor = document.getElementById('searchField').value;

        function searchTextInTable(tr) {
            let result = [];
            for (let el of tr) {
                if (el.textContent.includes(searchFor)) {
                    result.push(el);
                }
            }
            return result;
        }

        let tableRows = document.querySelectorAll('tbody tr');
        tableRows = Array.from(tableRows);
        tableRows.map(a => a.classList.remove('select'));

        let result = searchTextInTable(tableRows);
        result.map(a => a.classList.add('select'));
    }
}