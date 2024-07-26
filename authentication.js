const express = require('express')
const jwt = require('jsonwebtoken')
const jwtPassword = "123456"
const port = process.env.port || 3000

const app = express();
app.use(express.json())

const ALL_USERS = [{
    username : "harkirat@gmail.com",
    password : "123",
    name : "harkirat singh"
}, {
    username : "raman@gmail.com",
    password : "123321",
    name : "Raman singh"
}, {
    username : "priya@gmail.com",
    password : "123321",
    name : "Priya kumari"
}, {
    username : "satyam@gmail.com",
    password : "321123",
    name : "Satyam Pratibhan"
}];

function userExists(username, password){
    for(let i = 0;i < ALL_USERS.length;i++){
        if(username == ALL_USERS[i].username && password == ALL_USERS[i].password){
            return true;
        } else {
            return false;
        } 
    }
}

app.post("/signin",(req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if(!userExists(username, password)){
        return res.status(403).json({
            msg : "User doesn't exist in our memory db"
        })
    }

    var token = jwt.sign({username : username}, jwtPassword);
    return res.json({
        token,
    });
}
)
app.get("/users",(req, res) => {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        res.json({
            users : ALL_USERS.filter((value) => {
                if(value.username == username){
                    return false
                } else {
                    return true
                }
            })
        })
    } catch(err) {
        return res.status(403).json({
            msg : "Invalid token"
        })
    }
})

app.listen(port,() => {
    console.log(`The server is running at the port ${port}`);
});
