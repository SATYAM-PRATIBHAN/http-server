 
const express = require('express');

const app = express();
app.use(express.json())

function userMiddleware(req, res, next){
    const username = req.headers.username;
    const password = req.headers.password;

    if(username != "satyam" || password != "pass"){
        res.status(403).json({
            msg : "incorrect input"
        })    
    } else {
        next();
    }
}
function kidneysMiddleware(req, res, next){
    const kidneyID = req.query.kidneyID;

    if(kidneyID != 1 && kidneyID != 2){
        res.status(403).json({
            msg : "incorrect input"
        })
    } else {
        next(); 
    }
}

app.get('/health-checkup', userMiddleware, kidneysMiddleware, (req, res) => {
    res.send("Your health is totally fine");
})

app.get("/heart-checkup", userMiddleware, (req, res) => {
    res.send("Your heart is totally find");
})
app.listen(3000,() => [
    console.log("the program is listning aat 3000")
])