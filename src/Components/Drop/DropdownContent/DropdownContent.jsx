import React from "react";
import { Link } from "react-router-dom";
import "./DropdownContent.css";
export default function DropdownContent({ open,toggle }) {
  return (
    <div className={`dropdown-content ${open ? 'content-open' : null}`}>
      <div className='lrow'>
        <Link  onClick={toggle} to="resource" className='Lstyle' >Coding club</Link>
        </div >
        <div className='lrow'>
          <Link onClick={toggle} to="events" className='Lstyle'>Events</Link>
          </div>
        </div>
        )
}
