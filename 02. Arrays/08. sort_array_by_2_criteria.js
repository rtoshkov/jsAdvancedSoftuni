function sortBy2Things(array){
    array.sort((a,b) => {
        if (a.length === b.length){
            return a.localeCompare(b);
        } else {
            return a.length - b.length;
        }
    })

    console.log(array.join('\n'));
}

// sortBy2Things(['alpha',
//     'beta',
//     'gamma'])


// sortBy2Things(['Isacc',
//     'Theodor',
//     'Jack',
//     'Harrison',
//     'George']
// )

sortBy2Things(['test',
    'Deny',
    'omen',
    'Default'])