const express = require("express");
const bodyParser = require("body-parser");
const { getUserByCompanyid, getOrdersPast7Days } = require("./mymodules.js");

const app = express();

app.use(bodyParser.json());
app.use(express.json());

app.set("view engine", "ejs");

// API for a user to login using username and password

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const response = { error: {} };

  // Checking if username is alphanumeric and between 6-12 characters
  const alphanumericRegex = /^[a-zA-Z0-9]+$/;
  if (
    !alphanumericRegex.test(username) ||
    username.length < 6 ||
    username.length > 12
  ) {
    response.error.username =
      "Invalid username. Username should be alphanumeric and between 6-12 characters.";
  }

  // Checking if password is at least 6 characters
  if (password.length < 6) {
    response.error.password =
      "Invalid password. Password should be at least 6 characters.";
  }

  if (Object.keys(response.error).length === 0) {
    response.message = "Login successful";
  }

  res.json(response);
});

// function for getting all users by companyid
getUserByCompanyid(1, (error, users) => {
  if (error) {
    console.log(error);
  } else {
    console.log(users);
  }
});

// Function for getting all orders created at past 7 days
getOrdersPast7Days((error, orders) => {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("Orders:", orders);
  }
});

// Class for fruit
class Fruit {
  constructor(id, name, color) {
    this.id = id;
    this.name = name;
    this.color = color;
  }
}

// dummy fruits
const fruits = [
  new Fruit(1, "Banana", "Yellow"),
  new Fruit(2, "Apple", "Red"),
  new Fruit(3, "Orange", "Orange"),
  new Fruit(4, "Grapes", "Green"),
  new Fruit(5, "Blackberries", "Black"),
];

// Api for sorted fruits
app.get("/fruits", (req, res) => {
  const sortedfruits = fruits.sort((f1, f2) => {
    if (f1.color < f2.color) {
      return -1;
    } else if (f1.color > f2.color) {
      return 1;
    } else {
      return 0;
    }
  });
  res.json({
    message: "all fruits sorted by their colors",
    sortedfruits: sortedfruits,
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
