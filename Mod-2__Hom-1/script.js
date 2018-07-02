let UserInput,
    EnteredNumbers = [];
let finish = null;

while (UserInput !== finish) {
    UserInput = prompt('Введите любое число');
    EnteredNumbers.push(parseFloat(UserInput));
}

EnteredNumbers === EnteredNumbers.pop();
console.log(EnteredNumbers);

// for (i = 0; i < EnteredNumbers.length; i++) {
//     if (isNaN(EnteredNumbers[i]))
//     {
//         EnteredNumbers[i].delete();
//     }
// }
let sum = 0;
for (i=0; i < EnteredNumbers.length; i++) {
    sum += EnteredNumbers[i];
}

console.log ('Сумма элементов массива: ' +sum);