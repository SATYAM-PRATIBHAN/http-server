const express = require('express');

const app = express();

let requestCount = 0;//counts the number of requests
let requests = {};//ratelimitter
let errorCount = 0;//counts the number of times the error is thrown

setInterval(() => [
    requests = {}
], 1000)

app.use((req, res, next) => {
    const userId = req.headers["user-id"];
    if(requests[userId]){
        requests[userId] = requests[userId] + 1;
        if(requests[userId] > 5){
            res.status(404).send("you are blocked")
        } else {
            next();
        }
    } else {
        requests[userId] = 1;
        next();
    }
})

app.use((req, res, next) => {
    requestCount = requestCount + 1;
    next();
})

app.get('/user1',(req, res) => {
    throw new Error("something went wrong on our server")
})
app.get('/user',(req, res) => {
    res.status(200).json({name : 'john'});
});

app.post('/user',(req, res) => {
    res.status(200).json({msg : 'Created Dummy User'})
});

app.get('/requestCount',(req, res) => {
    res.status(200).json({requestCount});
});

app.use((err, req, res, next) => {
    res.status(404).send("error occured");
    errorCount = errorCount + 1;
})

app.listen(3000);