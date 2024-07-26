const express = require('express');

const app = express();

app.use(express.json())

app.post('/health-checkup',(req, res) => {
    const kidneys = req.body.kidneys; 

    //here kidneys in the body should be an array
    const kidneysLength = kidneys.length;

    res.send("you have " + kidneysLength + " kidneys");

    //global catches
    app.use((err, req, res, next) => {
        res.status(500).json({
            msg : "sorry something is up on our serverside"
        })
    })
})

app.listen(3000)