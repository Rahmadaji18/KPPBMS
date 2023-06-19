const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const session = require("express-session");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_inikaryakita",
});

const app = express();
app.use(cookieParser());
app.use(
  session({
    secret: "userFist",
    cookie: {
      maxAge: 7200000,
      secure: true,
    },
    resave: true,
    saveUninitialized: true,
    unset: "destroy",
  })
);
app.use(
  cors({
    origin: ["http://localhost:8080", "http://localhost:8080/login"],
    credentials: true,
    exposedHeaders: ["set-cookie"],
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

//Route To Home
app.get("/", (req, res) => {
  res.sendFile(__dirname + "@/views/HomeView.vue");
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected successfully to MySql server");
});

// app.use(bodyParser());
app.post("/login", (req, response) => {
  let username = req.body.username;
  let password = req.body.password;

  if (username && password) {
    // Execute SQL query that'll select the account from the database based on the specified username and password
    connection.query("SELECT * FROM login WHERE username = ? AND password = ?", [username, password], function (err, results) {
      // If there is an issue with the query, output the error
      if (err) {
        console.log(err);
        response.status(500).send("Internal Server Error");
        return;
      }
      // If the account exists
      if (results.length > 0) {
        // Authenticate the user
        req.session.loggedin = true;
        req.session.username = username;
        // Redirect to home page
        response.send("Login Success");
      } else {
        response.send("Incorrect Username and/or Password!");
      }
      response.end();
    });
  } else {
    response.send("Please enter Username and Password!");
    response.end();
  }
});

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const confirm_password = req.body.confirm_password;
  const email = req.body.email;

  if (username && password && confirm_password && email) {
    if (password !== confirm_password) {
      res.send({ msg: "Password Salah" });
    } else {
      connection.query("SELECT * FROM login WHERE username = ?", [username], function (err, data) {
        if (err) {
          console.log(err);
          res.status(500).send("Internal Server Error");
          return;
        }

        if (data.length > 0) {
          console.log("Username Sudah Terdaftar!");
          res.send({ msg: "Username Sudah Terdaftar!" });
        } else {
          connection.query("SELECT * FROM login WHERE email = ?", [email], function (err, data) {
            if (err) {
              console.log(err);
              res.status(500).send("Internal Server Error");
              return;
            }

            if (data.length > 0) {
              console.log("Email Sudah Terdaftar!");
              res.send({ msg: "Email Sudah Terdaftar!" });
            } else {
              connection.query("INSERT INTO login (email, username, password, confirm_password) VALUES (?, ?, ?, ?)", [email, username, password, confirm_password, "0", "0", "0", "0"], (err) => {
                if (err) {
                  console.log(err);
                  res.status(500).send("Internal Server Error");
                  return;
                }

                console.log("Signup Berhasil!");
                res.send({ msg: "Signup Berhasil!" });
              });
            }
          });
        }
      });
    }
  } else {
    console.log("Masukkan Data Terlebih Dahulu!");
    res.send({ msg: "Masukkan Data Terlebih Dahulu!" });
  }
});

app.post("/dashboard/schedule", (req, res) => {
  const nama = req.body.nama;
  const phone = req.body.phone;
  const email = req.body.email;
  const company = req.body.company;
  const subjek = req.body.subjek;
  const message = req.body.message;

  if (nama && phone && email && company && subjek && message) {
    connection.query("SELECT * FROM login WHERE email = ?", [email], function (err, data) {
      if (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
        return;
      }

      if (data.length === 0) {
        console.log("Email Belum Terdaftar!");
        res.send({ msg: "Email Belum Terdaftar!" });
      } else {
        connection.query("INSERT INTO schedule (nama, phone, email, company, subjek, message) VALUES (?, ?, ?, ?, ?, ?)", [nama, phone, email, company, subjek, message], (err) => {
          if (err) {
            console.log(err);
            res.status(500).send("Internal Server Error");
            return;
          }
          console.log("Respon Terkirim!");
          res.send({ msg: "Respon Terkirim!" });
        });
      }
    });
  } else {
    console.log("Masukkan Data Terlebih Dahulu!");
    res.send({ msg: "Masukkan Data Terlebih Dahulu!" });
  }
});

app.post("/dashboard/schedule", (req, res) => {
  const nama = req.body.nama;
  const phone = req.body.phone;
  const email = req.body.email;
  const company = req.body.company;
  const subjek = req.body.subjek;
  const message = req.body.message;

  if (nama && phone && email && company && subjek && message) {
    connection.query("SELECT * FROM login WHERE email = ?", [email], function (err, data) {
      if (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
        return;
      }

      if (data.length === 0) {
        console.log("Email Belum Terdaftar!");
        res.send({ msg: "Email Belum Terdaftar!" });
      } else {
        connection.query("INSERT INTO schedule (nama, phone, email, company, subjek, message) VALUES (?, ?, ?, ?, ?, ?)", [nama, phone, email, company, subjek, message], (err) => {
          if (err) {
            console.log(err);
            res.status(500).send("Internal Server Error");
            return;
          }
          console.log("Respon Terkirim!");
          res.send({ msg: "Respon Terkirim!" });
        });
      }
    });
  } else {
    console.log("Masukkan Data Terlebih Dahulu!");
    res.send({ msg: "Masukkan Data Terlebih Dahulu!" });
  }
});

app.listen(8081, () => {
  console.log("Server started PORT 8081");
});
