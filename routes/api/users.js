const express = require('express');
const router = express.Router();

router.get('/test', (req,res)=>res.json({msg:'User api works'}));   //api/user/test

module.exports = router;
