// У вас є такі функції JavaScript:
// function showMessage(message) {
//   console.log(message);
// }
//=============================
// function calc(num1, num2) {
//   return num1 + num2;
// }
//=============================
// function customError() {
//   throw new Error('Error');
// }
// Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?

function showMessage(message: string): void {
  console.log(message);
}
//not returning anything

function calc(num1: number, num2: number): number {
  return num1 + num2;
}
//returns number

function customError(): never {
  throw new Error("Error");
}

//returns error

export { showMessage, calc, customError };
