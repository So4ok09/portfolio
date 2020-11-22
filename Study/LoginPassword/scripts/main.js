let login = prompt("Введите логин");
let password = prompt("Введите пароль");

switch(true) {
    case login == "Danila" && password == 2001 :
        alert("Добро пожаловать, Данила");
        break;
    case login == "Maria" && password == 1978 :
        alert("Добро пожаловать, Мария");
        break;
    case login == "admin" && password == "admin" :
        alert("Вы можете редактировать сайт");
        break;
    default  :
        alert("Вы ввели неправильный логин и/или пароль");
        break;
}