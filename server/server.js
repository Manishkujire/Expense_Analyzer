const express = require("express");
const bodyParser = require('body-parser')
const pool = require("./Database").pool;
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(
  cors({ origin: ["http://localhost:3000", "http://192.168.248.1:3000"] })
);
app.get("/", async (req, res) => {
  await pool.query(
    `select * from users where id=?`,
    [1],
    (error, data, fie) => {
      if (error) console.log("error");
      else res.send(data);
    }
  );
});
app.post("/login", async (req, res) => {
  await pool.query(
    `select * from from users where user_name=? and password=? `,
    [req.body.email, req.body.password],
    (error, data, fie) => {
      if (error) console.log("error");
      else {
        if (length.data > 0) {
          res.send(data);
          res.redirect("http://localhost:3000/home")
        }
      }
    }
  );
});
app.listen(5000, () => {
  console.log("server started");
});
app.post("/register", (req, res) => {
  try {
    console.log(req.body);
    
    pool.query(
      `INSERT INTO users (user_name, password) VALUES ( ?, ?);`,
      [req.body.email, req.body.password],
      (error, data) => {
        if (error) console.log(req.body, "error insert");
        else {    res.send({authorized:true,message:"ACCOUNT CREATED"})
        }
      }
    );
  } catch {
    console.log("error");
  }
});
