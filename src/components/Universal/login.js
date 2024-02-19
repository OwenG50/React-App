const express = require("express");
const mysql = require("mysql");

const Login = express();

Login.use(express.json());

Login.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});

const db = mysql.createConnection({
    host: 'pittlibrarymanager.cvi6kwoe0r7c.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'ChasePip3251$!',
    database: 'PittLibraryManagerDB',
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to database');
});

Login.post('/register', (req, res) => {
    const { username, password, email } = req.body;
    const createdAt = new Date(); // Current timestamp for created_at
    const lastLogin = null; // Assuming last_login is initially null
    const isActive = 1; // Assuming is_active is initially true

    const query = "INSERT INTO users (username, password, email, created_at, last_login, is_active) VALUES (?, ?, ?, ?, ?, ?)";
    const values = [username, password, email, createdAt, lastLogin, isActive];

    db.query(query, values, (err, result) => {
        if (err) {
            console.error('Error inserting user:', err);
            return res.status(500).send('Error inserting user');
        }
        console.log('User inserted successfully');
        res.status(200).send('User inserted successfully');
    });
});

Login.listen(3001, () => { 
    console.log("running server");
});
