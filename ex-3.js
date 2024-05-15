//Exercise 3
// Ternary Operator
let lightBulbStatus = "Off";

lightBulbStatus === "on"
  ? console.log("Light bulb is on.")
  : lightBulbStatus === "Off"
    ? console.log("Light bulb is off.")
    : console.log("Please choose the correct input (On/Off)");