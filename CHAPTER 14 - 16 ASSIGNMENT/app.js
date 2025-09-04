let qualifications = [
  "SSC",
  "HSC",
  "BCS",
  "BS",
  "BCOM",
  "MS",
  "M.Phil.",
  "PhD",
];

console.log(qualifications);

let students = ["Mubeen", "Zaheer", "Hassan"];

let scores = [400, 350, 450];

let totalMarks = 500;

for (let i = 0; i < students.length; i++) {
  let percentage = (scores[i] / totalMarks) * 100;
  console.log(
    students[i] +
      " scored " +
      scores[i] +
      " out of " +
      totalMarks +
      " (" +
      percentage.toFixed(2) +
      "%)"
  );
}

let cars = ["Toyota", "Honda", "Suzuki", "Kia", "Hyundai"];
let AddCarStart = prompt("Enter Your Car Name");
console.log(cars);
cars.unshift(AddCarStart);
console.log(cars);
let AddCarEnd = prompt("Enter Your Car Name");
cars.push(AddCarEnd);
console.log(cars);
cars.shift();
console.log(cars);
cars.pop();
console.log(cars);
cars.slice(0, 3);
console.log(cars.slice(0, 3));

let cities = [
  "Karachi",
  "Lahore",
  "Islamabad",
  "Faisalabad",
  "Rawalpindi",
  "Multan",
  "Peshawar",
  "Quetta",
  "Hyderabad",
  "Sialkot",
];

console.log(cities);
console.log("Selected Cities List", cities[0], cities[2]);

let message = ["This ", "Is ", "My ", "Arry "];

console.log(message);
console.log(message[0] + message[1], message[2], message[3]);

let Devices = ["Keyboard ", "Mouse ", "Printer ", "Monitor "];
console.log(Devices);
for (let i = 0; i < Devices.length; i++) {
  console.log(Devices[i]);
}

let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<select>");

for (let i = 0; i < manufacturers.length; i++) {
  document.write("<option>" + manufacturers[i] + "</option>");
}

document.write("</select>");
