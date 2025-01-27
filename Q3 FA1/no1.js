
let nickname = prompt("Enter your nickname:");
let height = parseInt(prompt("Enter your height (in inches):"));
let weight = parseFloat(prompt("Enter your weight (in kg):"));

let feet = Math.floor(height / 12);
let inches = height % 12;

let weightInLbs = (weight * 2.20462).toFixed(3);

alert("Name: " + nickname + "\n" +
      "Height: " + feet + "'" + inches + "\"\n" +
      "Weight: " + weightInLbs + " lbs");
