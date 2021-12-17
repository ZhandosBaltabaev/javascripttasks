var price = prompt("Сумма:"); // Запрашиваем сумму
var years = prompt("Годы:"); // Запрашиваем годы
var procent = prompt("Процент:"); // Запрашиваем проценты
// Вычисляем проценты за каждый год
for (var i = 1; i < years; i++) {
// Вычисление процента за каждый год
price *= 1 + procent / 100;
// Выводим все в консоль
console.log(i + " год - " + Math.round(price));
}
// Выводим все в консоль
console.log("После " + (i - 1) + " лет сумма будет - " + Math.round(price*(1 +
procent / 100)));