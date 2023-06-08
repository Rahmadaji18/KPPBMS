const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();
const cors = require('cors')
app.use(cors());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'database_personalweb'
});

app.get("/", (req, res)=>{
    res.send("Hello from the server");
})

connection.connect((err) => {
    if (err) throw err;
    console.log("Connected successfully to MySql server")
});

app.use(bodyParser());
app.post("/login", (req, response) =>{
    let username = req.body.username;
    let password = req.body.password;

    if (username && password) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		// FROM accounts (accounts nya itu sesuaiin sendiri sama punya kalian)
		connection.query('SELECT * FROM login WHERE username = ? AND password = ?', [username, password], function(err, results) {
			// If there is an issue with the query, output the error
			if (err) throw err;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				//request.session.loggedin = true;
				//request.session.username = username;
				// Redirect to home page
				response.send('Login Success');

			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

app.listen(8080,()=>{
    console.log("Server started PORT 8080");
})