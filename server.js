const express = require('express')
const app = express()
const Profile = require('./models/profile');
const mongoose = require('mongoose')
const config = require('./db')


app.set("view engine", "ejs")

app.get('/add-profile', (req, res) =>{
    const profile = new Profile({
            name: "Mark Bahor",
            body: "Hello, I am a computer science major",
            image: "https://markbahorprofilebucket.s3.amazonaws.com/mbprofile.jpg"
        })
    profile.save()


    .then((result) => {
    res.send(result)
    })
    .catch((err) => {
    console.log(err);
    })
})

app.get('/all-profiles', (req, res) => {
    Profile.find()
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err);
    });
})

app.get('/', (req, res) =>{
    console.log('Here')
    Profile.find()
        .then((profiles) => {
            console.log(profiles)
            res.render("index", {profiles})
        })


})

const connectDatabase = () => {mongoose.connect('mongodb://mongo:27017/mydb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(con => {
    console.log('MongoDB Database connected with HOST ');
})
.catch((err) => {
        console.log(err);
    });
}
connectDatabase();
app.listen(8080)




