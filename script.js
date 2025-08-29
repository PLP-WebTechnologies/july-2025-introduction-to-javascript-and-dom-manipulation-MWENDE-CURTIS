// Part 1: Basics (Variables + Conditionals)
// --------------------------
document.getElementById("checkAgeBtn").addEventListener("click", function() {
  let age = prompt("Enter your age:");
  age = Number(age);

  if (age >= 18) {
    document.getElementById("ageResult").textContent = "You are an adult ✅";
  } else {
    document.getElementById("ageResult").textContent = "You are a minor ❌";
  }
});

// --------------------------
// Part 2: Functions
// --------------------------
// Function to calculate total price
function calculateTotal(prices) {
  let sum = 0;
  for (let price of prices) {
    sum += price;
  }
  return sum;
}

document.getElementById("calculateBtn").addEventListener("click", function() {
  let prices = [10, 20, 30];
  let total = calculateTotal(prices);
  document.getElementById("totalResult").textContent = "Total = $" + total;
});

// Another reusable function: format string
function formatString(str) {
  return str.toUpperCase();
}

// --------------------------
// Part 3: Loops
// --------------------------
document.getElementById("listBtn").addEventListener("click", function() {
  let items = ["Apples", "Bananas", "Oranges"];
  let list = document.getElementById("itemList");
  list.innerHTML = ""; // clear before adding new

  // Example with for loop
  for (let i = 0; i < items.length; i++) {
    let li = document.createElement("li");
    li.textContent = items[i];
    list.appendChild(li);
  }
});

// --------------------------
// Part 4: DOM Manipulation
// --------------------------
document.getElementById("toggleBtn").addEventListener("click", function() {
  let text = document.getElementById("domText");
  text.classList.toggle("highlight"); // toggles highlight class
});

// Another DOM example: dynamically add content
let newPara = document.createElement("p");
newPara.textContent = "This paragraph was added with JavaScript!";
document.body.appendChild(newPara);

// Another DOM example: change title
document.title = "JavaScript Assignment (Interactive)";