function search() {
    let searchText = document.getElementById('searchText').value;
    let list = document.getElementById('towns');
    let elements = Array.from(list.children);
    let resultBox = document.getElementById('result')

    elements.forEach(a => {
        a.style.fontWeight = 'normal';
        a.style.textDecoration = 'none'
    })

    let results = elements.filter((a) => a.textContent.includes(searchText));
    results.forEach(a => {a.style.fontWeight = 'bold'; a.style.textDecoration = 'underline'})

    resultBox.textContent = `${results.length} matches found`;
}
