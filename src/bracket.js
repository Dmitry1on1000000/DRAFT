// Получаем строку из аргументов командной строки
const str = process.argv[2];

// Функция для определения типа скобки
const checkBracketType = (char) => {
  const result = {
    isBracket: false,
    isOpenType: false,
  };
  switch (char) {
    case "(":
    case "[":
    case "{":
    case "<":
      return {
        isBracket: true,
        isOpenType: true,
      };
    case ")":
    case "]":
    case "}":
    case ">":
      return {
        isBracket: true,
        isOpenType: false,
      };
    default:
      break;
  }
  return result;
};

// Функция для получения закрывающей скобки по открывающей
const getCloseBracket = (char) => {
  switch (char) {
    case "(":
      return ")";
    case "[":
      return "]";
    case "{":
      return "}";
    case "<":
      return ">";
    default:
      return false;
  }
};

// Основная функция для проверки скобок в строке
const bracket = (str) => {
  const stack = []; // Создаем пустой стек
  for (let i = 0; i < str.length; i++) {
    // Проходим по каждому символу в строке
    const char = str[i]; // Получаем текущий символ
    const flags = checkBracketType(char); // Определяем тип скобки (открывающая/закрывающая)
    if (!flags.isBracket) continue; // Если текущий символ не является скобкой, переходим к следующему
    if (flags.isOpenType) {
      // Если текущая скобка открывающая
      stack.push(char); // Добавляем ее в стек
    } else if (stack.length) {
      // Если текущая скобка закрывающая и стек не пустой
      const open = stack.pop(); // Получаем последнюю открывающую скобку из стека
      if (getCloseBracket(open) === char) {
        // Если закрывающая скобка соответствует открывающей
        continue; // Продолжаем проверку
      } else {
        return false; // Если закрывающая скобка не соответствует открывающей, возвращаем false
      }
    }
  }
  return stack.length === 0 ? true : false; // Если стек пустой, возвращаем true, иначе - false
};

console.log(str); // Выводим исходную строку
console.log(bracket(str)); // Выводим результат проверки скобок в строке (true/false)
