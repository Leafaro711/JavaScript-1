// 10) Функция, которая принимает число и возвращает ответ, сложное оно или простое

let num = prompt('Введите число, чтобы узнать простое оно или сложное');

let flag = true;
for (let i = 2; i < num; i++) {
	if (num % i == 0) {
		flag = false;
		break;
	}
}

function answer() {
    if(flag === true) {
        alert('Число простое')
}
else{
    alert('Число сложное')
}
}

answer();