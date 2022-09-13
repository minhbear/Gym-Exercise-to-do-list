const express  =require('express');
//controller function
const { loginUser, signupUser } = require("../controllers/userController");

const router = express.Router();

//login route
router.post('/login', loginUser)

//signup rout
router.post('/signup', signupUser)

module.exports = router;