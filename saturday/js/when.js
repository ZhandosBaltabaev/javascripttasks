var even = 0;
var odd = 0;
console.log("Введите число: ")
// Получение число от пользователя
var user_num = prompt("Укажите число");
// Мы будем делить число на 10,
// поэтому цикл будет работать пока число user_num будет больше за 0
while(user_num > 0) {
// Проверяем является ли число четным
// Для этого получаем остаток при делении на 2
if (user_num % 2 == 0)
even += 1; // Если четное, то +1 к переменной четных чисел
else
odd += 1; // Если не четное, то +1 к переменной не четных чисел
// Число делим на 10 и округляем, чтобы получить число без
последней цифры
user_num = Math.floor(user_num / 10);
}
// Выводим все значения
console.log("Четных: " + even);
console.log("Не четных: " + odd);