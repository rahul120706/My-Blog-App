const express = require('express');
const router = express.Router();
const User = require('../models/User')


console.log("entered user routes");

router.get('/:username', async (req, res)=>{
    try{
        const username = req.params.username;
        const user = await User.findOne({username: req.params.username});
        console.log(user);
        if(!user) {
            return res.status(404).json({message: 'User Not Found'})
        }

        res.json(user)    
    }catch(err){
        return res.status(500).json({error: 'Something went Wrong'})
    }
    
})

module.exports = router;