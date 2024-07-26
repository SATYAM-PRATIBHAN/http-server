const express = require('express')
const jwt = require('jsonwebtoken')
const zod = require('zod')

const app = express()

app.use(express.json())

const passwordSchema = zod.string().min(6);
const emailSchema = zod.string().email();
const jwtpass = "secret";

function signjwt(username, password){
    const emailResponse = emailSchema.safeParse(username);
    const passResponse = passwordSchema.safeParse(password);

    if(!emailResponse.success || !passResponse.success){
        return null;
    }

    const signature = jwt.sign({
        username
    }, jwtpass)
    return signature;
}
function decode(token){
    const decoded = jwt.decode(token);
    console.log(decoded);
    if(decoded){
        return true
    } else { 
        return null
    }
}
function verifyjwt(token){
    try{
        const verify = jwt.verify(token,jwtpass);
        console.log(verify);
        if(verify){
            return true
        } else { 
            return null
        }
    } catch(e){
        return "invalid token"
    }
} 

const ans = signjwt("satyam@gmail.com","1234456")
console.log(ans);
console.log(decode(ans));
console.log(verifyjwt(ans));