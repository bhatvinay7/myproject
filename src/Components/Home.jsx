import React from 'react';
import ReactDOM from 'react-dom';
import {useEffect} from "react";
import { useNavigation } from 'react-router-dom';
import { authRequire } from '../../HelperFunctions/AuthRequire';
export default function Home(){
const navigate=useNavigation()
   useEffect(()=>{
       if(!authRequire()){
       navigate('/login')
       }
   },[])

    return(
        <>
        <h2>welcome to Connectr</h2>
        </>
    )
}