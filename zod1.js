//more practise on zod 

const zod = require('zod');
const express = require('express');
const app = express();

app.use(express.json())
 
function validateInput(obj){
    const schema = zod.object({
        email : zod.string().email(),
        password : zod.string().min(8)
    })

    const response = schema.safeParse(obj);
    return response;
}
validateInput({
    email : "satyam@gmail.com",
    password : "393792"  
})

app.post("/login",(req, res) => {
    const response = validateInput(req.body);
    if(!response.success){
        res.status(411).json({
            msg : "wrong input"
        })
    
    } else {
        res.send("you are authorized")
    }
})

app.listen(3000)