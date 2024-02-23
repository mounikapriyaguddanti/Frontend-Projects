greet(); // Output: Hi, there.
function greet() {
  console.log("Hi, there.");
}

hello(); // Output: Uncaught TypeError: hello is not a function
let hello = function() {
  console.log("Hello.");
}