const express = require('express');
const { 
    createWorkout,
    getSingleWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkOut
} = require('../controllers/workoutController');

const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

//require auth for all workout routes
router.use(requireAuth);

//get all workout
router.get('/', getWorkouts);

//Get a single workout
router.get('/:id', getSingleWorkout);

//Post a new workout
router.post('/', createWorkout);

//Delete a workout
router.delete('/:id', deleteWorkout);

//Update a workout
router.patch('/:id', updateWorkOut);

module.exports = router;