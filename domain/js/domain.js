var website = prompt("Введите адрес сайта: ");
var split = website.split('.'); // Разделяем слово по символу точка
// Выводим второй элемент из получившегося массива
console.log("Доменное имя: ." + split[1]);