//My functions
// Changes colour when the user clicks on the element
document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.getElementById("salut")

  function colourPop(startColor, endColor) {
    textElement.style.background = "linear-gradient(90deg, ${startColor}, ${endColor})";
    textElement.style.webkitBackgroungClip = "text";
    textElement.style.webkitTextFillColor = "transparent";
  }
});

//Top to bottom
alert("This is not a drill, but an alert!");

console.log("This is a console log message.");
console.log(1 + 1);

let message = "Peek-a-boo!";
console.log(message);

document.querySelector("#logo").style.transform = "rotate(-15deg)";

//Data types
const pi = 3.14;
const euler = 2.7182;
const golbenNb = 1.6180;
const speedLight = 299792458;
console.log("The speed of light is ${speedLight} meters per second.")

// let circleRadius = 4;
function circlePerimeter(radius){
  let rad = 4; 
  let result = radius * 2 * pi;
}
circlePerimeter();

let streetFood = "sotteok sotteok";
let typeFood = "savoury";
let spicyLevel = "medium";
console.log("This food is called " + streetFood);
console.log("It is a ${typeFood} food with a ${spicyLevel} spicy level.");
console.warn("Be careful, it can be very spicy!");
console.clear();

setTimeout(console.log("Be careful!"), 5000);
setTimeout(console.log("Focus!"), 3000); 
