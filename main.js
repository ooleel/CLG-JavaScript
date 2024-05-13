alert("This is not a drill, but an alert!");

console.log("This is a console log message.");
console.log(1 + 1);

let message = "Peek-a-boo!";
console.log(message);

document.querySelector("#logo").style.transform = "rotate(-15deg)";

// Changes colour when the user clicks on the element
function colorPop() {
  let title = document.querySelector("#topic");
  console.log(title);
  title.style.color = "navy";
  title.style.backgroundColor = "hotpink";
}
