import React from "react";
import ReactDom from 'react-dom';
import "./DropdownButton.css";
import '../DropdownContent/DropdownContent.css';
import { FaChevronDown,FaChevronUp } from "react-icons/fa";
export default function DropdownButton({open, toggle }) {
  return (
    <>
    <div className={`dropdown-btn ${open ? 'button-open' :null}`} onClick={toggle}>
      
      <span className='link'>Explore</span>
      <span className="toggle-icon">
       {open ? <FaChevronDown/>: <FaChevronUp/>}
      </span>
    </div>
      </>
  )
}
