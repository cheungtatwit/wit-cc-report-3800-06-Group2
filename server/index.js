const express = require("express");
const app = express();
const mysql = require("mysql")
const cors = require("cors");

app.use(cors());
app.use(express.json());

require("dotenv").config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: "CCFinalProject",
});

app.post("/register", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    var token;
    require('crypto').randomBytes(48, function(ex, buf) {
        token = buf.toString('hex');
        db.query("SELECT * FROM Users WHERE token = ?", token, (error,resp) => {
            if(resp.length > 0){
                res.json({message:"Error: Try again"});
            } else {
                db.query("SELECT * FROM Users WHERE username = ?", username,
                (error, resp) => {
                    if(error) console.log(error);
                    if(resp.length > 0) {
                        res.json({message: "User already exists"});
                    } else {
                        db.query("INSERT INTO Users (username, password, token) VALUES (?,?,?);", [username, password, token],
                        (error, resp) => {
                            if(error) console.log(error);
                            res.send({message: "Success", usertoken: token});
                        }
                        ); 
                    }
                }
                );  
            }
        });  
    });
});

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    db.query(
        "SELECT * FROM Users WHERE username = ?;", username,
        (error, resp) => {
            if(error) console.log(error);
            if(resp.length > 0){
                if(password == resp[0].password){
                    res.json({loggedIn: true, token:resp[0].token});
                } else {
                    res.json({loggedIn: false, message:"Wrong username or password"});
                }
            } else {
                res.json({loggedIn:false, message: "User does not exist"});
            }
        }
    );
});

app.get("/posts", (req,res) => {
   db.query("SELECT author, description, DATE_FORMAT(created, \"%m/%d/%Y %h:%i%p\") as date FROM Posts order by created DESC;", (error,resp) => {
       if(error) console.log(error);
       res.send(resp);
   });
});

app.post("/post", (req,res) => {
    const post = req.body.post;
    const token = req.body.token;
    db.query("SELECT * FROM Users WHERE token = ?", token, (error,resp) => {
        var username = resp[0].username;
        db.query("INSERT INTO Posts (author, description) VALUES (?, ?);", [username, post],
        (error, resp) => {
            if(error) console.log(error);
            res.send(resp);
        }); 
    });
});

app.get("/profile/:username", (req, res) => {
    const username = req.params.username;
    db.query("SELECT author, description, DATE_FORMAT(created, \"%m/%d/%Y %h:%i%p\") as date FROM Posts WHERE author = ? order by created DESC;", username, (error, resp) => {
       if(error) console.log(error);
       res.send(resp);
    });
});

app.listen(3001, (req, res) => {
  console.log("Server running...");
});