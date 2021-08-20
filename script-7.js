// 7) Функция, которая принимает число до 1000 и возвращает массив из делителей этого числа

let userNumber = prompt("Введите число от 1 до 1000");
function devisers(userNumber) {
    let array = [];
    for(i = 1; i < 1000; i++) {
        if(userNumber % i === 0) {
            array[i - 1] = i;
            alert(array);
        }
    }
}

devisers(userNumber);