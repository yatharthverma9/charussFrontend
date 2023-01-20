const { response } = require('express');
const express = require('express')
const router = express.Router();
const {client} = require("../model/ClientPost")
//img 
router.use("/uploads",express.static('Uploads'))
router.get("/userapi",async(req,res)=>{
    const response =await client.getData()
    res.json(response);

})
router.get("/onlypost",async(req,res)=>{
    console.log(req.query.id)
   const response =await client.getonlyData(req.query.id+"")
    res.json(response);


})




module.exports = router