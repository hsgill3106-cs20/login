// USER LOGIN / SIGNUP

// HTML VARIABLES
let signInBtn = document.getElementById("sign-in-btn");
let signUpBtn = document.getElementById("sign-up-btn");
let usernameEl = document.getElementById("username");
let passwordEl = document.getElementById("password");
let CpasswordEl = document.getElementById("Cpassword");

//global variables
let users = loadUsers();

// SIGN UP BTN CLICKED
signUpBtn.addEventListener("click", signUpHandler);

function signUpHandler() {
  let inputusername = usernameEl.value;
  let inputpassword = passwordEl.value;
  let Cpassword = CpasswordEl.value;
  if (Cpassword === inputpassword && userCheck(inputusername) === -1) {
    users.push(newUser(inputusername, inputpassword));
    saveUsers();
    alert("Signup successful");
  } else {
    alert("Passwords do not match or Username is in use");
  }
}

// SIGN IN BTN CLICKED
signInBtn.addEventListener("click", signInHandler);

function signInHandler() {
  let inputusername = usernameEl.value;
  let inputpassword = passwordEl.value;
  for (let i = 0; i < users.length; i++) {
    if (userCheck(inputusername) == i) {
      alert("Valid login");
    } else if (userCheck(inputusername) == -1) {
      alert("Invalid login");
    }
  }
}

//HELPER FUNCTIONS
function newUser(username, password) {
  return {
    inputusername: username,
    inputpassword: password,
  };
}

function saveUsers() {
  localStorage.setItem("users", JSON.stringify(users));
}

function loadUsers() {
  let UserStr = localStorage.getItem("users");
  return JSON.parse(UserStr) ?? [];
}

function userCheck(usernametocheck) {
  for (let i = 0; i < users.length; i++) {
    if (usernametocheck == users[i].inputusername) {
      return i;
    }
  }
  return -1;
}
