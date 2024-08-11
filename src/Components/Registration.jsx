import React from "react";
import ReactDOM from "react-dom";
// import {Form } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { useState,useEffect } from "react";
import "./Styles/Registration.css";
import Form from './Form.jsx';
import {postparticipantsDetails} from '../../fetch/registration.js';
export default function Registration({eventType}) {
  const [filter,setFilter]=useState([])
  const [Loading,setLoading]=useState(false);
  const [isSuccessful,SetSuccessful]=useState(false);
  const [Error,setError]=useState(false);
  const [groupNameFieldValue, setGroupNameField] = useState({ groupName: "" });
  const [inputfields, setinputfields] = useState([{
    emailId: "", participentName: "", mobileNumber: ""
  }]);
  function handleChange(e,index){
    const Fields = [...inputfields]
    Fields[index] = { ...Fields[index], [e.target.name]: e.target.value };
    setinputfields(Fields)
  }
  async function  handleSubmit(e) {
    e.preventDefault();
   
    const body = {eventType:eventType, groupName: groupNameFieldValue.groupName, participentDetails: [...inputfields] }
    try{
      setLoading(true);
    const data=await postparticipantsDetails(body);
    if(data){
      setTimeout(() => {
        setLoading(false);
        SetSuccessful(true);
    }, 3000); 
    }
     
    }
    catch(err){
      setError(err)
    }
    finally{
    setTimeout(() => {
      SetSuccessful(false);
  }, 6000); 
  
    }
  }
  function addField(e) {
    e.preventDefault();
    const allFields =[...inputfields,{
      emailId: "", participentName: "", mobileNumber: ""
    }]
    setinputfields(allFields)
  }
  function handleDelete(e,id) {
    e.preventDefault();
     const ResetFields=[...inputfields]
    // const ResetFields = inputfields.slice(0,inputfields.length-1);
    const filtered=ResetFields.filter((each,index)=>{
      console.log(id,index)
      return  index!=id  
     })
    setinputfields(filtered)
  
  }
  // useEffect(()=>{

  // },[inputfields])
  function handleGroupChange(e) {
    setGroupNameField({ groupName: e.target.value })
  }
  if(Error){
    return(
      <h1>try again,network error,{Error.getMessage}</h1>
    )
  }
  return (
    <>
       <div className="registrationheaders">
      <h1 >Event registration</h1>
      {isSuccessful ? <h2 className="registrationStatus">Registration Successful</h2> :null}
      </div>
      <div className="formdiv">
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
          <input type="text" className={`inputStyle groupFieldStyle`} onChange={(e) => handleGroupChange(e)} placeholder="group name" value={groupNameFieldValue.groupName}></input>
          {inputfields.map((inputfield,index) => {
            return (
              <Form
              key={index}
              id={index}
              participentName={inputfield.participentName}
              emailId={inputfield.emailId}
              mobileNumber={inputfield.mobileNumber}
              handleDelete={handleDelete}
              handleChange={handleChange}
              Length={inputfields.length}
              />
             )
          }
        )
        }
          <button onClick={(e) => addField(e)} className={`buttonicon addButtonStyle`}><FontAwesomeIcon icon={faUserPlus} size="2xl" /></button>
          <button disabled={Loading} type="submit" className="registerButtonStyle"> {Loading ? 'Registering....' : 'Register'}</button>
        </form>
      </div>

    </>
  )
}
