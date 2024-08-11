const mongoose=require('mongoose');
const RegistrationSchema=mongoose.Schema({
    eventType:{
      type:String,
      required:true
    },
    groupName:{
        type:String,
        required:false
    },
       
    participentDetails:[{emailId:{
        type:String,
        lowercase:true,
        required:true
       },
       participentName:{
        type:String,
        required:true
    },
       mobileNumber:{
        type:Number,
        required:true
      }}
    ]
    
},
{
  timeStamps:true
}
)

const Reg=mongoose.model("registration",RegistrationSchema);
module.exports=Reg;