// 2) Четное и Hечетное

let i = prompt("Введите число и узнайте, четное оно или нечетное");
if (i == null) {
  alert("Отмена");
} else {
  if (i % 2 == 0) {
    alert(i + " Четное");
  } else if (i % 2 == 1) {
    alert(i + " Hечетное");
  }
}
