// 11) Повторяющийся элемент: Нужно создать массив с разными элементами. Некоторые элементы должны повторятся. 
//     Нужно удалить из массива повторяющийся элемент.

var array = [1, 2, 1, 10, 5, 3, 4, 40, 50, 4],

     i = array.length,

     result = [];

 array.sort(function (a, b) {

     return a - b;

 });

 for (var i = 0; i < array.length; i++) {

     array[i] != array[i - 1] && result.push(array[i])

 }

console.log(result);