/* Данный код представляет собой пример декоратора функции, который добавляет логирование в файл. 

Функция loggerDecorator принимает два аргумента: функцию, которую нужно декорировать, и имя файла для записи логов. 

Затем создается новая функция sumWithLog, которая вызывает исходную функцию sum с переданными ей аргументами, сохраняет результат и добавляет запись в лог-файл. 

В консоль выводятся результаты вызовов функции sumWithLog с разными аргументами. */

// import нужных модулей
import { writeFileSync } from "fs"; // модуль для записи файлов
import { join } from "path"; // модуль для работы с путями файловой системы
import { EOL } from "os"; // модуль для получения символа переноса строки

// определение декоратора функции
const loggerDecorator = (func, logFileName) => (...args) => {
    const path = join(process.cwd(), 'src', logFileName); // формирование пути к лог-файлу
    const result = func(...args); // вызов исходной функции с переданными аргументами
    const strLog = `${new Date()}   функция: ${func.name}    аргументы: ${args}    результат: ${result}${EOL}`; // формирование строки лога
    writeFileSync(path, strLog, {flag: 'a+', encoding: 'utf8'}); // запись строки в лог-файл
    return result; // возврат результата исходной функции
}

// определение исходной функции
function sum (a, b) {
    return a + b;
}

// создание декорированной функции с логированием
const sumWithLog = loggerDecorator(sum, "log.txt");

// вызов декорированной функции с разными аргументами и вывод результатов в консоль
console.log(sumWithLog(1, 2));
console.log(sumWithLog(2, 2));
console.log(sumWithLog(3, 2));
console.log(sumWithLog(4, 2));