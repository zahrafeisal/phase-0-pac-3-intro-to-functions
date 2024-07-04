// Follow along with the examples here
function doNothing() {}

function sayHello() {
    console.log("Hello!");
}
sayHello();

function sayHelloToGuadalupe() {
    console.log("Hello, Guadalupe!");
}
sayHelloToGuadalupe();

function sayHelloToLiz() {
    console.log("Hello, Liz!");
}
sayHelloToLiz();

function sayHelloToSamip() {
    console.log("Hello, Samip!");
}
sayHelloToSamip();


function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}!`);
}
sayHelloTo("Hilda");
sayHelloTo("James");


function say(greetings, firstName) {
    console.log(`${greetings}, ${firstName}`);
}
say("Goodbye", "Julio");


function say(greetings, firstName) {
    console.log("firstName: ", firstName);
    console.log("greetings: ", greetings);
    console.log(`${greetings}, ${firstName}`);
}
say("Julio", "hello");


function add(x, y) {
    return x + y;
}
console.log(add(1, 2));
add(1, 2);


function add(num1, num2) {
    return num1 + num2;
}
 let num1 = 21;
 let num2 = 10;
const message = `The sum of the numbers is: ${add(num1, num2)}.`;
console.log(message);