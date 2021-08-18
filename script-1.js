// 1) День Недели

let day = prompt('Choose number between 1 to 7', '1-7');
switch (day)
{
case "1":
    alert("Week day is Monday"); break;
case "2":
    alert("Week day is Tuesday"); break;
case "3":
   alert("Week day is Wednesday"); break;
case "4":
    alert("Week day is Thirsday"); break;
case "5":
    alert("Week day is Friday"); break;
case "6":
    alert("Week day is Saturday"); break;
case "7":
    alert("Week day is Sunday"); break;
default:
    alert("Wrong Number, Try Again");
}