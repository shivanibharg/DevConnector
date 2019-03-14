const express = require('express');
const router = express.Router();

router.get('/test', (req,res)=>res.json({msg:'User api works'}));   //api/user/test

//Load user model
const User = require('../../models/User');

//@route POST api/users/register
//@desc Register User
//@access public

module.exports = router;
