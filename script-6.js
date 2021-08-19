// 6) Написать функцию, которая с помощью prompt спрашивает у пользователя число от 1 до 10. 
// При это функция тоже генерирует случайное число от 1 до 10. Если числа совпадут, 
// то выводится ответ “You guessed it right!”. Если числа не совпадают, то выдается ответ “Sorry. You lost”

let guess = prompt("Число от 1 до 10?");

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

if(randomInteger(1, 10) == guess ){
    alert("You guessed it right!");
} else {
    alert("Sorry. You lost");
}