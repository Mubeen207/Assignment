let num1 = ["1", "2", "3", "4"];
let num2 = ["1", "0", "1", "2"];
let num3 = ["2", "1", "0", "1"];

console.log(num1[0], num1[1], num1[2], num1[3]);
console.log(num2[0], num2[1], num2[2], num2[3]);
console.log(num3[0], num3[1], num3[2], num3[3]);

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

let table_Num = +prompt("Enter Your Table Number");
let table_length = +prompt("Enter Your Table length");
if (table_length > 1) {
  for (let i = 1; i <= table_length; i++) {
    console.log(table_Num + " X " + i + " = " + table_Num * i);
  }
} else {
  console.log("Please Enter Number Greater Then 1");
}

let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
for (let i = 0; i < fruits.length; i++) {
  console.log("Element At Index " + i + " Is " + fruits[i]);
}

console.log("Counting:");
let counting = "";
for (let i = 1; i <= 15; i++) {
  counting = counting + i + ", ";
}
console.log(counting);

console.log("Reverse Counting:");
let reverse = "";
for (let i = 10; i >= 1; i--) {
  reverse = reverse + i + ", ";
}
console.log(reverse);

console.log("Even:");
let even = "";
for (let i = 0; i <= 20; i += 2) {
  even = even + i + ", ";
}
console.log(even);

console.log("Odd:");
let odd = "";
for (let i = 1; i < 20; i += 2) {
  odd = odd + i + ", ";
}
console.log(odd);

console.log("Series:");
let series = "";
for (let i = 2; i <= 20; i += 2) {
  series = series + i + "k" + ", ";
}
console.log(series);

let items = ["cake", "apple pie", "cookie", "chips", "patties"];
console.log(items);
let found = true;
let Find_Item = prompt("Enter Your Item Name");

let Lower_Case = Find_Item.toLocaleLowerCase();

for (let i = 0; i < items.length; i++) {
  if (Lower_Case === items[i]) {
    console.log("Cookie Is available at Index " + i + " in our bakery");
    found = false;
    break;
  }
}
if (found) {
  console.log("We Are Sorry. pastry Is not available in our bakery");
}

let largestNum = [24, 53, 78, 91, 12];

let max = largestNum[0];

for (let i = 1; i < largestNum.length; i++) {
  if (largestNum[i] > max) {
    max = largestNum[i];
  }
}
console.log("Largest number is: " + max);
let smallestNum = [24, 53, 78, 91, 12];

let small = smallestNum[0];

for (let i = 1; i < smallestNum.length; i++) {
  if (smallestNum[i] < small) {
    small = smallestNum[i];
  }
}
console.log("Smallest number is: " + small);

let counting1 = "";
for (let i = 1; i <= 100; i++) {
  i = i + 4;
  counting1 = counting1 + i + ", ";
}
console.log(counting1);
