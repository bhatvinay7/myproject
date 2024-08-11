import React from 'react';
import ReactDOM from 'react-dom'; 
import { Outlet } from 'react-router-dom';
<link href="https://fonts.googleapis.com/css2?family=Signika+Negative&display=swap" rel="stylesheet"></link>
import {NavLink} from 'react-router-dom';
import Dropdown from './Drop/Dropdown/Dropdown';
import Footer from './Footer.jsx';
import './Styles/Layout.css';
import './Styles/Footer.css';


export default function Layout(){
  const style={
    color:"rgba(0, 0, 0, 0.826)",
    textDecoration:"underline"
  }
 return(
  <div className='layout'>
    <header>
      <h1>Connectr</h1>
      <nav className='nav'>  
    <NavLink className="link" style={({isActive})=>
      (isActive ? style:null)
    } to="/"><span className="link" >Home</span></NavLink>
    <Dropdown/>
    <NavLink className="link" style={({isActive})=>
      (isActive ? style:null)} to="about"><span className="link">About</span></NavLink>
    <div className="SignIn">  
    <NavLink className="Signin" to="signin">Sign In</NavLink>  
     </div> 
    </nav>
    </header>
    <Outlet/>
    <Footer/> 
    </div>
      
    )
}