 const tryCatch = require('./tryCatch.cjs');
const core = require('./core.cjs');

/* // Объявляем функцию programm, которая будет работать как калькулятор
const programm = () => {
  // Проверяем, что количество аргументов в командной строке не превышает 5
  if (process.argv.length > 5) {
    throw new Error("Слишком много аргументов");
  }

  // Деструктурируем массив process.argv и извлекаем значения аргументов
  const [_, , n1, operator, n2] = process.argv;

  // Объявляем переменную help с сообщением для помощи в использовании программы
  const help = "Программа-калькулятор, введите комманду в формате num1 + num2";

  // Если первый аргумент равен "-h" или "--help", выводим сообщение help и возвращаем пустой объект
  if (n1 == "-h" || n1 == "--help") {
    console.log(help);
    return {};
  }

  // Преобразуем значения n1 и n2 в числа
  const num1 = Number(n1);
  const num2 = Number(n2);

  // Проверяем, что значения num1 и num2 являются числами
  if (isNaN(num1) || isNaN(num2)) {
    throw new Error("Введены некорректные числа");
  }

  // Объявляем переменную result, в которую будет записываться результат математической операции
  let result;

  // С помощью оператора switch проверяем значение переменной operator и выполняем соответствующую математическую операцию
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;

    case "-":
      result = num1 - num2;
      break;

    case "*":
      result = num1 * num2;
      break;

    case "/":
      result = num1 / num2;
      break;

    case "%":
      result = num1 % num2;
      break;
      
    // Если значение operator не соответствует ни одному из знаков математических операций, выбрасываем исключение
    default:
      throw new Error("Некоректный оператор");
  }

  // Возвращаем объект с полями number1, operator, number2, result, содержащими соответствующие значения
  return {
    number1: num1,
    operator,
    number2: num2,
    result,
  };
};

// Объявляем декоратор tryCatchDecorator, который будет обрабатывать ошибки
const tryCatchDecorator = (callback) => (...args) => {
  try {
    // Вызываем функцию callback с переданными аргументами и возвращаем ее результат
    return callback(...args);
  } catch (error) {
    // Если произошла ошибка, выводим сообщение об ошибке и возвращаем объект с полем message, содержащим сообщение об ошибке
    console.log(error.message);
    return {
      message: error.message
    }
  }
};

// Объявляем декорированную функцию decorProgramm, которая будет вызывать функцию programm с обработкой ошибок
const decorProgramm = tryCatchDecorator(programm);

// Вызываем декорированную функцию decorProgramm и выводим результат ее работы
console.log(decorProgramm()); */

const programm = () => {
  if (process.argv.length > 5) {
    throw new Error("Слишком много аргументов");
  }

  const [_, __, n1, operator, n2] = process.argv;

  const help = "Программа-калькулятор, введите комманду в формате num1 + num2";

  if (n1 == "-h" || n1 == "--help") {
    console.log(help);
    return {};
  }
  const num1 = Number(n1);
  const num2 = Number(n2);

  if (isNaN(num1) || isNaN(num2)) {
    throw new Error("Введены некорректные числа");
  }
   const result = core.core(num1, operator, num2) 
  
   return {
    nomber1: num1,
    operator,
    number2: num2,
    result,
  };
};

const decorProgramm = tryCatch.func(programm);
console.log(decorProgramm()); 