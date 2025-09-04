document.body.style.fontFamily =
  "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
let style = document.createElement("style");
style.innerHTML = "p { font-size: 30px; }";
document.head.appendChild(style);
//-------------------------------------------------------------------
function concat() {
  let fullnameEl = document.getElementById("fullname");
  let firstName = prompt("Enter Your First Name");
  let lastName = prompt("Enter Your Last Name");
  let fullName = firstName + " " + lastName;
  fullnameEl.innerHTML = fullName;
}

//----------------------------------------------------
function favPhone() {
  let favPhone = document.getElementById("favPhone");
  let lenghtString = document.getElementById("lenghtString");
  let favorite_mobile = prompt("Favorite mobile phone model.");
  favPhone.innerHTML = "My Favorate Phone Is: " + favorite_mobile;
  lenghtString.innerHTML = "Lenght Of String: " + favorite_mobile.length;
}
// favPhone();
//---------------------------------------------------------
function n_index() {
  let n_index = document.getElementById("n_index");
  let string = document.getElementById("string");
  let word = prompt("Please Enter Your Word Hear for ' n ' ");

  for (let i = 0; i < word.length; i++) {
    if (word[i] === "n") {
      string.innerHTML = "String: " + word;
      n_index.innerHTML = "Index of 'n': " + i;
      break;
    } else if (word[i] === "N") {
      string.innerHTML = "String: " + word;
      n_index.innerHTML = "Index of 'N': " + i;
      break;
    } else {
      n_index.innerHTML = "'N' or 'n' Not Found.";
    }
  }
}
// n_index();
//----------------------------------------------------------
function l_index() {
  let l_index = document.getElementById("l_index");
  let string1 = document.getElementById("string1");
  let word1 = prompt("Please Enter Your Word Hear for ' l ' ");
  let indexNum = 0;
  let flag = false;
  let flag1 = false;
  for (let i = 0; i < word1.length; i++) {
    if (word1[i] === "l" || word1[i] === "L") {
      indexNum = i;
      flag = true;
    } else {
      flag1 = true;
    }
  }
  if (flag) {
    string1.innerHTML = "String: " + word1;
    l_index.innerHTML = "Index of 'l': " + indexNum;
    flag1 = false;
  }
  if (flag1) {
    l_index.innerHTML = "'L' or 'l' Not Found.";
  }
}
// l_index();

//-----------------------------------------------------------
function i_index() {
  let i_index = document.getElementById("i_index");
  let string2 = document.getElementById("string2");
  let word2 = prompt("Please Enter Your Word Hear for ' i ' ");
  let flag_i = true;
  for (let i = 0; i < word2.length; i++) {
    if (word2[i] === "i" && flag_i) {
      string2.innerHTML = "String: " + word2;
      i_index.innerHTML = "Index of 'i': " + i;
      flag_i = false;
    }
  }
}
// i_index();
//----------------------------------------------------------------

// concat();

//----------------------------------------------------------------
function Before_After() {
  let city_Before = document.getElementById("city-Before");
  let city_After = document.getElementById("city-After");
  let city = "Hyderabad";

  let newCity = city.replace("Hyder", "Islam");

  city_Before.innerHTML = "String Before: " + city;
  city_After.innerHTML = "String After: " + newCity;
}
// Before_After();
//-------------------------------------------------------------------
function Before_After_text() {
  let text_Before = document.getElementById("text-Before");
  let text_After = document.getElementById("text-After");
  let text =
    "Ali and Sami are best friends and they play together and study together.";
  text_Before.innerHTML = text;
  let newText = text.replace(/and/g, "&");
  text_After.innerHTML = newText;
}
// Before_After_text();
//-----------------------------------------------------------------------
function Before_After_type() {
  let type_Before = document.getElementById("Type-Before");
  let type_After = document.getElementById("Type-After");
  let value_Before = document.getElementById("Value-Before");
  let value_After = document.getElementById("Value-After");

  let string3 = "472";

  type_Before.innerHTML = "Value: " + string3;
  value_Before.innerHTML = "Type: " + typeof string3;

  let number = Number(string3);

  type_After.innerHTML = "Value: " + number;
  value_After.innerHTML = "Type: " + typeof number;
}
// Before_After_type();
//---------------------------------------------------------------------------
function lowercase() {
  let lowercase_Before = document.getElementById("lowercase-Before");
  let lowercase_After = document.getElementById("lowercase-After");
  let lowercaseString = prompt(
    "Enter Your Word Do You Want To Convert To LowerCase"
  );
  lowercase_Before.innerHTML = lowercaseString;

  lowercase_After.innerHTML = lowercaseString.toLowerCase();
}
// lowercase();
//-------------------------------------------------------------------------------
function Titlecase() {
  let Titlecase_Before = document.getElementById("Titlecase-Before");
  let Titlecase_After = document.getElementById("Titlecase-After");
  let TitlecaseString = prompt(
    "Enter Your Word Do You Want To Convert To TitlecaseCase"
  );
  Titlecase_Before.innerHTML = TitlecaseString;
  let TitlecaseStringUpdated =
    TitlecaseString[0].toUpperCase() + TitlecaseString.slice(1);

  Titlecase_After.innerHTML = TitlecaseStringUpdated;
}
// Titlecase();
//---------------------------------------------------------------------------------
function NumTOStr() {
  let NumTOStr_Before = document.getElementById("NumTOStr-Before");
  let NumTOStr_After = document.getElementById("NumTOStr-After");

  let number = +prompt("Enter Number Please Convert To String");
  NumTOStr_Before.innerHTML = "Number: " + number;
  let string = number.toString().replace(".", "");

  NumTOStr_After.innerHTML = "String: " + string;
}
// NumTOStr();
//------------------------------------------------------------------------------------
function Username_Validation() {
  let username;
  let isValid = false;

  // Repeat until a valid username is entered
  while (!isValid) {
    username = prompt("Enter your username:");
    isValid = true; // assume valid first

    for (let i = 0; i < username.length; i++) {
      let charCode = username.charCodeAt(i);
      console.log(username.charCodeAt(i));
      

      // Invalid characters check
      if (
        charCode === 64 ||
        charCode === 46 ||
        charCode === 44 ||
        charCode === 33
      ) {
        isValid = false;
        alert("Invalid username! Please avoid using [@ . , !]");
        break; // no need to check more
      }
    }
  }

  // Final valid username display
  console.log("✅ Valid Username: " + username);
}
Username_Validation();
