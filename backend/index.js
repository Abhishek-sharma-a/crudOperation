const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql")
app.use(bodyParser.json());
app.use(cors())
const bcrypt = require("bcrypt");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
const jwt = require("jsonwebtoken");
const KEY = "secret";

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'crud',
    port: 3306,
    user: 'root',
    password: ''
});
app.get("/api/get", (req, res) => {
    console.log(req.params.id);
    const sqlGet = "SELECT * FROM register"
    connection.query(sqlGet, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);

        }
    });
});

app.post("/api/post", (req, res) => {
   var { name, email, contact, password } = req.body;
    var saltRounds = bcrypt.genSaltSync(10);
   var password= bcrypt.hashSync(password, saltRounds);
    const sqlInsert = "Insert into register (name,email,contact,password) Values(?,?,?,?)";
    connection.query(sqlInsert, [name, email, contact, password], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);

        }
    });
})

app.delete("/api/remove/:id", (req, res) => {
    const { id } = req.params;
    const sqlRemove = "DELETE FROM register WHERE id=?";
    connection.query(sqlRemove, id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);

        }
    });
})

app.get("/api/get/:id", (req, res) => {
    const { id } = req.params;
    const sqlGet = "SELECT * FROM register WHERE id=?"
    connection.query(sqlGet, id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});
app.put("/api/update/:id", (req, res) => {
    const { id } = req.params;
    const { name, email, contact, password } = req.body
    const sqlUpdate = "UPDATE register SET name=?,email=?,contact=?,password=? WHERE id=?"
    connection.query(sqlUpdate, [name, email, contact, password, id], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});
app.post("/login", (req, res) => {
    const { email, password } = req.body;
  
    if(req.body.email.trim()===''||req.body.password.trim()===''){
        return res.status(400).send({msg:"email or password must not be empty"})
    
    }

    connection.query("SELECT * FROM register WHERE email=?",email,(err,result)=>{

        if(err){
            return res.status(400).send({
                msg:err
            })
        }

        //check whether the user with that email exists or not
        if(result.length===0){
            return res.status(401).send({
                msg:'email or password is incorrect'
            })
            }

           //check password
           bcrypt.compare(password,result[0].password).then(isMatch=>{
               
              if(isMatch===false){
                  return res.status(401).send({
                    msg:"email or Password is incorrect "
                })
            }

             //generate token
             const token=jwt.sign({id:result[0].user_id},KEY)   
               return res.status(200).send({
                msg:"logged in successfully",
                user:result[0],
                token
             })
          
          })

    })
  });
  

app.listen(5000, () => {
    console.log("server is running on port 5000");
})
