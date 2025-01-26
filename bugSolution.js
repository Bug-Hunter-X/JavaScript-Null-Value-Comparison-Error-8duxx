function myFunction(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values explicitly
  }
  return a + b;
}

console.log(myFunction(null, 5)); // Output: 0
console.log(myFunction(10, null)); // Output: 0
console.log(myFunction(5, 5)); // Output: 10
console.log(myFunction(undefined,5)); // Output: 0
console.log(myFunction(5,undefined)); // Output: 0