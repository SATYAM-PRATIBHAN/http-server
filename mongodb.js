const mongoose = require('mongoose');
const { number } = require('zod');

mongoose.connect('mongodb+srv://admin:Om%40773825@cluster0.cepoq6c.mongodb.net/usernewapp');

const UserSchema = new mongoose.Schema({
    email : String,
    password : String,
    purhcasedCourses : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "courses"
    }]
})
const CoursesSchema = new mongoose.Schema({
    title : String,
    price : 5999
})

const user = mongoose.model("users", UserSchema);
const course = mongoose.model("courses", CoursesSchema);