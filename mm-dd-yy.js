// Создаем объект на основе класса Date
var today = new Date();
// Получаем нынешний день
var day = today.getDate();
// Получаем нынешний месяц
// Здесь отсчет идет с нуля, поэтому добавляем +1
var month= today.getMonth() + 1;
// Получаем нынешний год
var year = today.getFullYear();
// Если день менее 10, то перед числом еще
// будем писать 0
if(day < 10)
day = '0' + day;
// Создаем переменную в формате: m-dd-yyyy
today = month + '-' + day + '-' + year;
// Выводим дату
console.log(today);