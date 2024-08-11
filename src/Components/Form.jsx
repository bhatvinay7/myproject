import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import "./Styles/Registration.css";
function Form({id,mobileNumber,participentName,emailId,Length,handleChange,handleDelete}) {
    console.log(id)
  return (
    <div  className="inputformdiv">
    <input type='text' className="inputStyle" name="participentName" onChange={(e) => handleChange(e, id)} value={participentName} placeholder="username" required></input>
    <input type='email' className="inputStyle" name="emailId" onChange={(e) => handleChange(e, id)} value={emailId} placeholder="email id" required></input>
    <input type='text' className="inputStyle" name="mobileNumber" onChange={(e) => handleChange(e, id)} placeholder="mobile number" value={mobileNumber} required></input>
    {Length > 1 ? <button  onClick={(e) =>handleDelete(e,id)} className="buttonicon" ><FontAwesomeIcon icon={faTrashCan} size="2xl" /></button> : null}

    </div>
  )
}

export default Form
 