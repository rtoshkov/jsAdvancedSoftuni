function addRemoveEl(array){
    const result = []
    let counter = 1;
    for (let element of array){
        if (element === 'add'){
            result.push(counter);
        } else{
            result.pop();
        }
        counter++;
    }
    return result.length > 0 ? result.join('\n') : 'Empty';
}

console.log(addRemoveEl(['remove',
    'remove',
    'remove']
))