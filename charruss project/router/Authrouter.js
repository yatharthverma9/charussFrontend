const { response } = require('express');
const express = require('express');
const Clientlogin = require('../model/Clientlogin')
const router = express.Router();

router.post('/save',async(req,res)=>{

    const response = await Clientlogin.save(req.body)
    res.json(response);

})


router.post('/login',async(req,res)=>{
    let response= req.body;
      response = await Clientlogin.login(response)

      res.json(response);

})



module.exports =router;