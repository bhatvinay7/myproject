const mongoose=require('mongoose');
const SignInSchema=mongoose.Schema({
  emailId:{
    type:String,
  reqyured:true,
  lowercase:true
  },
  password:{
    type:String,
    required:true

  }

},

{timestamps:true}

)
const User=mongoose.model('User',SignInSchema);
module.exports=User;
