let age = prompt("Введите свой возраст: ");
let height =  prompt("Введите свой рост в метрах: ");
let weight = prompt("Введите свой вес: ");
let bodyWeightIndex  = weight / (height *  height);
let groupNumber;

if(age >= 18 && age <= 25){
    groupNumber = 1;
} else if(age >=26  && age <= 46) {
    groupNumber = 2;
} else {
    groupNumber = 3;
}

if(groupNumber === 3) {
    alert("Для вашего возраста нет данных.");
} else if(groupNumber === 2) {
    if(bodyWeightIndex < 18) {
        alert("Ваш вес недостаточен, опасно для здоровья.");
    } else if(bodyWeightIndex >= 18 &&  bodyWeightIndex < 20) {
        alert("Ваш вес слегка снижен, неопасно для здоровья");
    } else if(bodyWeightIndex >= 20 && bodyWeightIndex <  26) {
        alert("Ваш вес нормальный");
    } else if(bodyWeightIndex >= 26  &&  bodyWeightIndex < 28) {
        alert("У вас излишний вес");
    } else if(bodyWeightIndex >= 28 && bodyWeightIndex < 31) {
        alert("У вас ожирение 1 степени");
    } else if(bodyWeightIndex >= 31 && bodyWeightIndex < 36) {
        alert("У вас ожирение 2 степени");
    } else if(bodyWeightIndex >= 36 && bodyWeightIndex < 41) {
        alert("У вас ожирение 3 степени");
    } else {
        alert("У вас ожирение 4 степени");
    }
} else {
    if(bodyWeightIndex < 17.5) {
        alert("Ваш вес недостаточен, опасно для здоровья.");
    } else if(bodyWeightIndex >= 17.5 &&  bodyWeightIndex < 19.5) {
        alert("Ваш вес слегка снижен, неопасно для здоровья");
    } else if(bodyWeightIndex >= 19.5 && bodyWeightIndex <  23) {
        alert("Ваш вес нормальный");
    } else if(bodyWeightIndex >= 23  &&  bodyWeightIndex < 27.5) {
        alert("У вас излишний вес");
    } else if(bodyWeightIndex >= 27.5 && bodyWeightIndex < 30) {
        alert("У вас ожирение 1 степени");
    } else if(bodyWeightIndex >= 30 && bodyWeightIndex < 35) {
        alert("У вас ожирение 2 степени");
    } else if(bodyWeightIndex >= 35 && bodyWeightIndex < 40) {
        alert("У вас ожирение 3 степени");
    } else {
        alert("У вас ожирение 4 степени");
    }
}