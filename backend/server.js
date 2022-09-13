const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');

const workoutRouters = require('./routes/workout')
const userRouters = require('./routes/user')

//express app
const app = express();

//midleware
app.use(express.json());

//route
app.use('/api/workouts' ,workoutRouters);
app.use('/api/user' ,userRouters);

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => [
        //Listen for request when connect to database
        app.listen(process.env.PORT, () => {
            console.log('Connect to DB & Lisstening on port ',process.env.PORT)
        })
    ])
    .catch((error) => {
        console.log(error)
    })
