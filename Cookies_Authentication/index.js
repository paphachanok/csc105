const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();
const bcrypt = require("bcrypt");


const connection = mysql.createConnection({
	host: "server2.bsthun.com",
	port: "6105",
	user: "lab_1eekps",
	password: "qDmb7qM0YEvqQoNd",
	database: "lab_todo02_1e5vfhn",
});

connection.connect(() => {
	console.log("Database is connected");
});

app.use(bodyParser.json({ type: "application/json" }));

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.post("/basic/login", (req, res) => {
	const username = req.body.username;
	const password = req.body.password;

	var sql = mysql.format(
		"SELECT * FROM users WHERE username = ? AND password = ?",
		[username, password]
	);
	console.log("DEBUG: /basic/login => " + sql);
	connection.query(sql, (err, rows) => {
		if (err) {
			return res.json({
				success: false,
				data: null,
				error: err.message,
			});
		}

		numRows = rows.length;
		if (numRows == 0) {
			res.json({
				success: false,
				message: "Login credential is incorrect",
			});
		} else {
			res.json({
				success: true,
				message: "Login credential is correct",
				user: rows[0],
			});
		}
	});
});

// Hash 12345678
const example = async () => {
	const salt1 = await bcrypt.genSalt(10);
	console.log("Salt #1: ", salt1);
	const hash1 = await bcrypt.hash("12345678", salt1);
	console.log("Hash #1: ", hash1);

	const salt2 = await bcrypt.genSalt(10);
	console.log("Salt #2: ", salt2);
	const hash2 = await bcrypt.hash("asdf12123", salt1);
	console.log("Hash #2: ", hash2);

	const valid1 = await bcrypt.compare(
		"12345679",
		"$2b$10$fwkjdMXyeLb7DGaU2UKwTecPJfC7i3ktBP5pFwC3ov71dMSsehus2"
	);
	console.log("Validation #1: ", valid1);

	const valid2 = await bcrypt.compare(
		"12345679",
		"$2b$10$fwkjdMXyeLb7DGaU2UKwTecPJfC7i3ktBP5pFwC3ov71dMSsehus3" // Modify last charactor a little bit
	);
	console.log("Validation #2: ", valid2);

	const valid3 = await bcrypt.compare(
		"asdf12123",
		hash2 // Previously hgenerated hash
	);
	console.log("Validation #3: ", valid3);
};

example();

//! Homework
app.post("/login", (req, res) => {
	const username = req.body.username;
	const password = req.body.password;

	var sql = mysql.format(
		"SELECT * FROM users WHERE username = ?",
		[username]
	);

	console.log("DEBUG: /login => " + sql);
	connection.query(sql, (err, rows) => {
		if (err) {
			return res.json({
				success: false,
				data: null,
				error: err.message,
			});
		}

		const user = rows[0];
		bcrypt.compare(password, user.hashed_password, (error, result) => {
			if (error) {
				console.error(error);
				return res.status(500).json({ error: 'Internal server error' });
			}

			if (result) {
				return res.status(200).json({ message: 'Login successful' });
			}

			return res.status(401).json({ error: 'Invalid username or password' });
		});
	});
});

app.post("/register", (req, res) => {
	const username = req.body.username;
	const password = req.body.password;

	if (password.length < 8 ||
		!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(password)) {
		return res.status(400).json({ error: 'Invalid password format' });
	}

	const hashedPassword = bcrypt.hashSync(password, 10);

	connection.query(
		`INSERT INTO users (username, password, hashed_password) VALUES (?, ?, ?)`, [username, password, hashedPassword], (err, rows) => {
			// Check if cannot find the data in the database then return the error
			if (err) {
				res.json({
					success: false,
					data: null,
					error: err.message,
				});
			} else {
				// Return data to the client if success
				console.log(rows);
				if (rows) {
					res.json({
						success: true,
						data: {
							message: "create success",
						},
					});
				}
			}
		}
	);
});

