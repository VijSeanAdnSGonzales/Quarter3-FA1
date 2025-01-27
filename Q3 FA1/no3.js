
let nickname = "Karen";
let heightInInches = 62;
let weightInKg = 50;

let heightFeet = Math.floor(heightInInches / 12);
let heightInches = heightInInches % 12;
let heightFormatted = `${heightFeet}'${heightInches}"`;
let weightInLbs = (weightInKg * 2.20462).toFixed(3);


if (confirm("Do you agree to share your personal information?")) {
    console.log(`Name: ${nickname}`);
    console.log(`Height: ${heightFormatted}`);
    console.log(`Weight: ${weightInLbs} lbs`);
} else {
    console.log("User does not wish to share his/her information.");
}
