import React from 'react';
import ReactDOM from 'react-dom';
import {useState} from 'react';
import {Form,useActionData,Link, redirect, Navigate} from 'react-router-dom';
import './Styles/SignIn.css';
import {login,signin } from '../../fetch/login.js';
import { authRequire } from '../../HelperFunctions/AuthRequire.js';

// export async function loader(){
//        if(authRequire){
//         throw redirect("/")
//        }
//        redirect("/login")   
// }
export async function action(obj){

const formData=await obj.request.formData();
const email=formData.get('email')
const password=formData.get('password')
try{
  // console.log(obj.request.url);
const data= obj.request.url=='http://localhost:5173/signin' ? await signin({email,password}) : await login({email,password});
// if(data){
  console.log(true);
  // throw redirect("/event")
// }
return "Sign Up successful"
}
catch(err){

  return err.response.data.message
  
}
  }
export default function SignIn(){ 
  const message=useActionData();
    const [state,setState ]=useState(true);
    const [isclick,click ]=useState(false);

    function handleClick(current){
         setState(current)
    }
    return(
    <div className='formDiv'>
      <h1 className="formHeading">Login to continue</h1>
      <div className='innerformDiv'>
      <div className='signUiBox'>
        <div  className="signUI">
        <Link to="/signin" className={`signUpIn ${state ? null :"styles"}`} onClick={()=>{handleClick(true)}} >Sign In</Link>
        <Link to="/login"className={`signUpIn ${state ?"styles" :null}`} onClick={()=>{handleClick(false)}}>Sign Up</Link>
        </div>
        <span id="errorMessage">{message}</span>
      </div>
      <Form className='form' method="post" >
       <div className='innerform'>
       <input className="input" type='email' name='email' placeholder='Email address' required autoFocus/>
       <input className="input" type='password' name='password' placeholder='password' required/>
      <button className="state" >{state ? 'Sign In' : 'Sign Up'}</button>
       </div> 
      </Form>
    </div>
    </div>
    )
}