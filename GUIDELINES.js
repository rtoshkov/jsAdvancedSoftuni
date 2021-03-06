// 0.1 Отделете повече време да си прочетете условието, целта е не само да се прочете
// а да се разбере, това ще ви спести адски много проблеми
// 0.2 НЕ СПЕКУЛИРАЙТЕ с условието, не е мястото на изпита да изпадаме в спекулации, за
// как трябва да е
// 0.3 Не пробвайте нови неща на изпита, използвайте си подходите които са ви най ясни
// и сте ползвали и тествали преди

// 1. Прочетете си пак условието, дума по дума, картинка по картинка ако трябва
// 2. Ако е DOM задача, погледнете да не използвате неща които judge не разбира, ако
// изпаднете в ситуации където при вас работи а в judge не, шанса е че ползвате нещо
// от което judge не разбира
// 3. Нулеви тестове - понякога в judge има повече нулеви тестове от колкото в условието,
// но през нормалния екран не се вижда минали ли са или не, погледнете в details, ако имаме
// нулеви тестове които не минават, може лесно да се ориентираме къде имаме грешка.
// Ако задачата е DOM обаче, може да е объркващо да разберем грешката така че, ако не
// разбирате от теста бързо къде е проблема, може да пропуснем тази стъпка
// 4. Ако сме изхабили 20-30 минути в търсене на грешка, а ни остават още задачи за решаване
// тук е време да оставим задачата до където е и да отидем да решим останалите,
// после ще се върнем като сме изкарали точките си, ако сте решили всичко или се връщате
// на задачата пак, изчистете всичко от мозъка си, може да вземете 1-2 мин почивка и почнете
// пак от условието
// 5. Може да ползваме същите подходи като при unit test-ването, все пак Judge прави
// Unit testing на кода ни
// 6. Тук вече може да спекулираме




// 2 DOM
// Лесен принцип по който да се водим, за да избегнем проблеми е:
Array.from() // Винаги ползвайте "Array.from" върху DOM колекции, така дори и да деструкторирате и
// т.н. по тях все ще работят

// DOM cheat sheet
// Selecting DOM elements
let elem1 = document.getElementById('test');
document.querySelector('#test');
document.querySelectorAll('#test li');

// Get/Set content
elem1.value;
elem1.textContent;

// Traversing DOM
elem1.parentElement;
elem1.children;

// Create element
let createdElem = document.createElement('p');

// Adding to DOM
elem1.appendChild(createdElem);

// Delete from DOM
createdElem.remove();

// Events
elem1.addEventListener('click', someFunc);
e.target

// maybe
e.preventDefault(); // Buttons in Forms have default behaviour, which we may need to prevent
elem1.removeEventListener('click', someFunc);

// HTML Attributes
elem1.setAttribute('name','myName');
elem1.getAttribute('name');
elem1.classList.add('test');
elem1.classList.remove('test');

// Styling <=> CSS
elem1.style.setProperty('font-weight','bold');
elem1.style.getPropertyValue('font-weight')


// 5 UNIT TESTING
// Trivial cases
// 1. All 'bad' exit conditions - 'throws' and 'returns' for special values signifying work could not be done
//      ...1 test for each check leading to such a condition
// 2. All 'good' exit condition - where the function received correct values and managed to complete its work
//      2.a Some simple correct values we can think of - it's a good idea to check with at least 2 different
//          values so we don't fall for default return values
//      2.b Edge cases:
//          2.b.1 Edge cases that come from the data type we're using for example for Numbers - integers,
//          floating point numbers, positive, negative, NaN, numbers above max allowed values etc. Alternatively for arrays it could be
//          an empty array, an array with 1 element or an array with many elements
//          2.b.2 Edge cases that come from the specification for example using a number as an index -
//          check it's an Integer, check it's >= 0, check it's < length of whatever we should search in
// Non Trivial Cases
// 3. Check the source code to ensure we have full code coverage - that we have tests checking every row and
// expression/statement in that row i.e. line coverage
// 4. Non-trivial Edge cases - for every statement/expression try to think of a way it can be implemented to work
// almost correctly, this will let us think of non-standard edge cases to test
// For example if we're asked to check if something is a number, the correct check might be
// typeof num === 'number', but someone could write it as !isNaN(Number(num)) which would introduce
// edge cases with invalid logic, write tests to differentiate the correct implementation from the almost correct one