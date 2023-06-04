 export const coreTwo = (num1, operator, num2) => {
    let result;
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
    default:
      throw new Error("Некоректный оператор");
     
  }
  return result
}
  