// 9) Функция, которая возвращает факториал числа

let n = prompt("number")
function factorial(n){
    let result = 1;
    while(n){
        result *= n--;
    }
    return result;
}

alert(factorial(n));
