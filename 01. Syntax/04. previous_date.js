function previousDate(year, month, day) {
    let dateSubmitted = new Date(year, month -1, day);
    dateSubmitted.setDate(dateSubmitted.getDate() - 1)
    let resYear = dateSubmitted.getFullYear();
    let resMonth = dateSubmitted.getMonth() + 1;
    let resDay = dateSubmitted.getDate();
    console.log(`${resYear}-${resMonth}-${resDay} `);
}


previousDate(2016, 9, 30);
previousDate(2016, 10, 1);


// apelev@gmail.com