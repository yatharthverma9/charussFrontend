const express  = require('express');
const {client,model} =require('../model/ClientPost')
const router = express.Router();
const multer = require("multer")
const {v4:uuidv4} = require('uuid');
const Dbconn =require("../model/Dbconnection");
const ApiResponse = require('./Responce/Apiresponse');
const { default: mongoose } = require('mongoose');
const fs = require('fs')

const Storage =multer.diskStorage({
    destination:'Uploads',
    filename:(req,file,cb)=>{
        cb(null,uuidv4()+file.originalname)
    }
});
const Uploads =multer({
    storage:Storage
}).single('img');


router.use("/uploads",express.static('Uploads'))

router.post("/save",async (req,res)=>{
   
    Uploads(req,res,(err)=>{
        console.log(req.file)
        if(err)
        {
            console.log(err)
        }
        else{
            try{
                console.log()
                
             obj = new model({
                id:uuidv4(),
                title:req.body.title,
                img:{
                    data:req.file.filename,
                    contenType:'image/jpg'
                },
                description:req.body.description,
                category:req.body.category,
                imgUrl:`http://localhost:8083/service/uploads/${req.file.filename}`,
                status:req.body.status
        });

            obj.save()
            res.json(new ApiResponse(true,obj,"Succes"))
        }
        catch(err)
        {
            console.log(err)
            res.json(new ApiResponse(false,null,err))
        }
        }
    });
})
router.post("/update",Uploads,async (req,res)=>{
    try{
        let _id=req.body._id;
    obj = await model.findByIdAndUpdate({_id:_id},{
         title:req.body.title,
         //img:{
           /// data:req.file.fieldname,
            //contenType:'image/png'
            //},
        description:req.body.description,
        category:req.body.category,
        status:req.body.status
    })
    res.json(new ApiResponse(true,obj,"Succesfull"))

}
catch(err)
{
    console.log(err)
    res.json(new ApiResponse(false,null,err))
}    
   /* Uploads(req,res,(err)=>{
        if(err)
        {
            console.log(err)
        }
        else{
            try{
             obj = new model({
                
        })
        obj.findOneAndUpdate(req.body.id,)

            
            res.json(new ApiResponse(true,obj,"Succes"))
        }
        catch(err)
        {
            console.log(err)
            res.json(new ApiResponse(false,null,err))
        }
        }
    });*/

    
   
})

router.post("/delete",async(req,res)=>{
    console.log(req.body)
    var id=req.body.id
    
    try{
    obj =await model.deleteOne({id:id},)
    res.json(new ApiResponse(true,obj,"Succsses"))
    }
    catch(err)
    {
        res.json(new ApiResponse(false,null,err))
    }
})


module.exports=router;