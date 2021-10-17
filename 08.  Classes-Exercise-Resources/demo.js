let recordBook = new Map();
let model = new Map();
model.set('a', 2)


recordBook.set('A1', model);
// recordBook.get('A1').get(a);
console.log(recordBook.get('A1'));
recordBook.get('A1').set('a',3)
console.log(recordBook.get('A1').get('a'))