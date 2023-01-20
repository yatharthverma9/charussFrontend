const mongoose =require('mongoose');
const jwt =require('../JwtManager')
mongoose.connect('mongodb://localhost:27017/charudb');
const {Schema}=mongoose;
const ApiResponse = require("../router/Responce/Apiresponse");

const loginSchema =new Schema ({
    email:{type:String,required:true},
    password:{type:String,required:true}
})
const model = mongoose.model('login',loginSchema,'login')
class Clientlogin
{
    save(reqdata){
        return new Promise(async (resolve,reject)=>
        {
            try{
                let obj =new model(reqdata);
                obj =await obj.save()
                resolve(new ApiResponse(true,obj,"Succes"))
                }
                catch(err)
                {
                    resolve(new ApiResponse(false,null,err))
                }

            })
    }

    login(userdata)
    {
        return new Promise (async(resolve,reject)=>{
            try{
            let obj =model.findOne({email:userdata.email,password:userdata.password},(err,data)=>{
                if(data==null)
                {
                    resolve(new ApiResponse(false,(err),"Wrong id passowrd"))
                }
                else
                {
                    console.log(data)
                    const token = jwt.generateAccessToken(obj._id)
                    resolve(new ApiResponse(true,{token},"login Succses"))
                }
            })
        }
        catch(err)
        {
            resolve(new ApiResponse(false,null,err))
        }


        })


        
        
    }

}
let client =new Clientlogin();
module.exports =client;