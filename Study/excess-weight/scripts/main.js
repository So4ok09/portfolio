let height = prompt("Введите ваш рост(в метрах):");
let weight = prompt("Введите ваш вес");
let imt = weight / (height * height);

alert("Вы имеете лишний вес: " + (imt > 27.9));