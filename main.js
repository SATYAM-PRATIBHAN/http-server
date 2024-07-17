const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(express.json());

const users = [{
    name : "satyam",
    kidneys : [{
        healthy : false
    }]
}];

app.get('/',(req, res) => {
    const johnkidneys = users[0].kidneys;
    const numberOfKidneys = johnkidneys.length;
    let healthykidneys = 0
    for(let i = 0;i < johnkidneys.length;i++){
        if(johnkidneys[i].healthy){
            healthykidneys = healthykidneys + 1;
        }
    }
    const unhealthykidneys = numberOfKidneys - healthykidneys;
    res.json({
        numberOfKidneys,
        healthykidneys,
        unhealthykidneys
    })
})
app.post('/',(req, res) => {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy : isHealthy
    })
    res.json({
        msg: "done"
    })
})
app.put('/',(req, res) => {
    for(let i= 0;i < users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy = true;
    }
    res.send({})
})
app.delete('/',(req, res) => {
    const newkidneys =  [];
    for(let i = 0; users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy){
            newkidneys.push({
                healthy: true
            })
        }
    }
    users[0].kidneys = newkidneys;
    res.json({
        msg : "done"
    })
})

app.listen(3007);