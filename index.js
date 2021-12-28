const express = require("express");
const pets = require("./data/pets.json");
const app = express();
const port = 8080;
const cors = require("cors")();
const bp = require("body-parser");
const fetch = require("cross-fetch");
const asynchanlder = require("express-async-handler");
const formData = require("express-form-data");

app.use(bp.json());

app.use(formData.parse());
app.use(express.json());

async function loadPets() {
  let response = await fetch("http://localhost:8080/pets");
  return await response.json();
}

app.get("/pets", (req, res) => {
  res.status(200);
  res.json(pets);
});

app.get("/loadpets", async (req, res) => {
  res.status(200);
  console.log(pets2);
  res.json(pets2);
});

app.set("views", __dirname + "/views");
app.use(express.static("public"));
// view engine, set view engine (files, instance)
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.get("/", async (req, res) => {
  res.status(200);
  let pets2 = await loadPets();
  res.render("home", { pets: pets2 });
});

app.get("/edit", (req, res) => {
  res.status(200);
  res.render("edit", req.query);
});

app.get("/delete", (req, res) => {
  res.status(200);
  res.render("delete");
});

app.get("/AddPet", (req, res) => {
  res.status(200);
  res.render("addPet");
});

app.get("/AddBreed", (req, res) => {
  res.status(200);
  res.render("addBreed");
});

app.post("/edit", (req, res) => {
  console.log(req.body);
  const { name, description, breed } = req.body;
  // res.send(name);

  // res.render("edit", { message: "This is a secret" });

  // Redirect for the get method
  res.redirect("/edit?message=Successfully Submitted!");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  // console.log(req.body);
  const { email, password } = req.body;

  // Validation
  if (email && password) {
    res.redirect("/");
  } else {
    res
      .status(401)
      .render("login", { message: "Invalid Username or Password" });
  }
});

app.listen(port, () => console.log("Running server"));

/**
 * Add registration (full name, email, password and password confirmation) and profile page
 *
 */
