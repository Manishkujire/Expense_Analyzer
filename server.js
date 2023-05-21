const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const users = [];
app.set("view-engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.render("index.ejs", { name: "manish", age: 19 });
});
app.get("/login", (req, res) => {
  res.render("login.ejs");
});
app.get("/register", (req, res) => {
  res.render("register.ejs");
});
app.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.pass, 10);
    users.push({
      id: Date.now().toString(),
      email: req.body.email,
      pass: req.body.pass,
    });
    res.redirect("/");
  } catch {
    res.redirect("/login");
  }
  console.log(users);
});
app.post("/login",(req, res) => {
  try {
    if (users.some(check)) {
      res.redirect("/");
    }
    else{
      res.redirect("/login");
    }
    function check(value, index, array) {
      console.log(value['email']+"  "+value['pass']+"  "+req.body.email+"  "+req.body.pass);
      if (value["email"] == req.body.email) {
        if (value["pass"] == req.body.pass) {
          return true;
        } else {
          console.log("password error")
          return false
        }
      } else{
        console.log("account error")
        return false
      }
    }
  } catch {
    res.redirect("/login");
    console.log("error");

  }
});

app.listen(3000);
