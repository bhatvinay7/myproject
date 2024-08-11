import axios from 'axios';
const login=async ({email,password})=>{
    try{
    const body={'email':email,'password':password}   
    
   const response=await axios.post('http://localhost:3004/api/login',body);
   return response.data;
    }
    catch(err){
        throw err
}
}
const signin=async ({email,password})=>{
    try{
    const body={'email':email,'password':password}   
   const response=await axios.post('http://localhost:3004/api/signin',body);
    }
    catch(err){
        throw err
    }
}
export {signin,login};