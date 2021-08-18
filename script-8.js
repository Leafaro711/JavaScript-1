// 8) Функция, которая возвращает число, которые мы отправили, только в кубе

let num = prompt("Введи число и получи его куб", "любое число")

function cubed(num) {
  return num * num * num;
}

alert(`Ответ: ${cubed(num)}`);