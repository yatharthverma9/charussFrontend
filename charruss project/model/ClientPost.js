const Dbconn = require("./Dbconnection")
const multer = require("multer")
const mongoose = require("mongoose")
const{Schema} = mongoose;
require('./Dbconnection')
const ApiResponse = require('../router/Responce/Apiresponse')
const PostSchema = new Schema ({
    id:{type:String,required:true},
    title:{type:String,required:true},
    img:{data:Buffer,contenType:String},
    description:{type:String,required:true},
    category:{type:String},
    imgUrl:{type:String,required:true},
    status:[Boolean]//img:
    //title descreption status

})
const model =mongoose.model("PostModel",PostSchema,"PostModel")
class Clientpost{
    getonlyData(id){
        return new Promise(async(resolve,reject)=>{
            let obj =model.findOne({id:id},(err,user)=>{
                if(err)
                    {
                        console.log(err)
                       return resolve(new ApiResponse(false,"Error occers",err))
                    }
                    else
                    {
                        console.log(user)
                        return resolve(user)
                    }
    
            });
    

        })
        
    }
   
    getData()
    {
        return new Promise(async(resolve,reject)=>{
            let obj = model.find({},(err,users)=>{
                if(err)
                {
                   return resolve(new ApiResponse(false,"Error occers",err))
                }
                else
                {
                    return resolve(users)
                }
               })
        });
        



    }

    }

let client =new Clientpost();
module.exports= {client,model};