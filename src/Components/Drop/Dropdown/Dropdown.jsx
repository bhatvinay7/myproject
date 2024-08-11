import React from "react";
import "./Dropdown.css";
import DropdownButton from "../DropdownButton/DropdownButton.jsx";
import DropdownContent from "../DropdownContent/DropdownContent.jsx";
import { useState } from "react";
export default function Dropdown({content }) {
  const [open, setOpen] = useState(false);
  function toggle() {
    setOpen(!open);
  }


  return (
    <div className="dropdown">
      <DropdownButton toggle={()=>toggle()} open={open}
      >
      </DropdownButton>
      <DropdownContent open={open} toggle={()=>toggle()}>{content}</DropdownContent>
    </div>
  )
}
