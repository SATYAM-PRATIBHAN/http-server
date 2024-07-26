const express = require('express')
const app = express();
const zod = require('zod');

app.use(express.json())

const schema = zod.array(zod.number());

/*creating a schema with conditions :
{
    email : string => email
    password : atleast 8 letters
    country : "IN" or "US"
} 
*/


app.post('/health-checkup', (req, res) => {
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    const kidneylength = kidneys.length;
    if(!response.success){
        res.status(411).json({
            msg : "invalid input"
        })
    } else {
        res.send({
            response
        })
    }
})

app.listen(3000);
