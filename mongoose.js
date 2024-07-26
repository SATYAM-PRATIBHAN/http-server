const mongoose = require('mongoose')
const express = require("express");
const app = express()

app.use(express.json())

mongoose.connect('mongodb+srv://admin:Om%40773825@cluster0.cepoq6c.mongodb.net/usernewapp')

const User = mongoose.model('Users', {
    name : String,
    email : String,
    password : String
});
app.post('signup',async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const userExists = await User.findOne({email : email});
    const nameExists = await User.findOne({name : name});

    if(nameExists){
        res.status(411).json({
            msg : "Choose a different name as it already been registered"
        })
    }
    if(userExists){
        return res.status(403).json({
            msg : "User already exist"
        })
    }
    const user = new User({
        name : name,
        email : email,
        password : password
    });
    user.save();

    res.json({
        msg : "User Successfully resgitered"
    })
})


app.listen(3000);

