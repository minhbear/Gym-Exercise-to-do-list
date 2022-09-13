const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const requireAuth = async (req, res, next) => {
    
    //verify authentication
    const { authorization } = req.headers;

    if(!authorization){
        return res.status(401).json({error: 'Authorization token required'});
    }

    console.log(authorization)
    //Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmY4YWU2ODJhYjE0MjMzYjE3NmI5YTQiLCJpYXQiOjE2NjA0Njk5ODQsImV4cCI6MTY2MDcyOTE4NH0.6brqL2NE486rXCr7Dpx4oyU2L9s2R1OCokNY-Nha-vc
    const token = authorization.split(' ')[1];

    try {
        const {_id} = jwt.verify(token, process.env.SECRET);

        req.user = await User.findOne({ _id }).select('_id');
        next();
    } catch (error) {
        res.status(401).json({error: "Request is not authoriza"})
    }
}

module.exports = requireAuth