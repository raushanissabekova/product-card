function showTemperature(city, temp) {
    console.log(`Сейчас в ${city} температура — ${temp} градусов по Цельсию`);
}

showTemperature("Астана", 30);

const SPEED_OF_LIGHT = 299792458;

function checkSpeed(speed) {
    if (speed > SPEED_OF_LIGHT) {
        console.log("Сверхсветовая скорость");
    } else if (speed < SPEED_OF_LIGHT) {
        console.log("Субсветовая скорость");
    } else {
        console.log("Скорость света");
    }
}

checkSpeed(1000);         // "Субсветовая скорость"
checkSpeed(299792458);    // "Скорость света"
checkSpeed(500000000);    // "Сверхсветовая скорость"

const productName = "Подарочный набор №5";

const productPrice = 7520;

function buyProduct(currentBudget) {
    if (currentBudget >= productPrice) {
        console.log(`${productName} приобретён. Спасибо за покупку!`);
    } else {
        const difference = productPrice - currentBudget;
        console.log(`Вам не хватает ${difference} ₽, пополните баланс`);
    }
}

buyProduct(5000); // Не хватит -> "Вам не хватает 2520 ₽, пополните баланс"
buyProduct(10000); // Хватит -> "Подарочный набор №5 приобретён. Спасибо за покупку!"