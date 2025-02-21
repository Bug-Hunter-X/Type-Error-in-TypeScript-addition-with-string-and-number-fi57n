function add(a: number, b: number): number {
  return a + b;
}

function isNumber(x: any): x is number {
  return typeof x === 'number';
}

function addSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  } else {
    console.error("Invalid input: Both arguments must be numbers.");
    return 0; // Or throw an error
  }
}

let result1 = addSafe(1, 2); // Correct
let result2 = addSafe("1", 2); // Error Handling
let result3 = addSafe(1, "2"); // Error Handling
console.log(result1, result2, result3); 