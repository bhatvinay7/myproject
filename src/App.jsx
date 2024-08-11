import React from "react";
import ReactDOM from 'react-dom';
import {RouterProvider,createBrowserRouter,
  createRoutesFromElements,Route} from "react-router-dom";
import Layout from './Components/Layout.jsx'; 
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import SignIn,{action as formaction} from './Components/SignIn.jsx';
import {action as loginactionloader} from './Components/SignIn.jsx';
import Coderesource, {loader as resourceloader} from "./Components/Coderesource.jsx";
import Event,{loader as eventloader} from "./Components/Event.jsx";
import CoderesourceError from "./Components/ErrorComponent/CoderesourceError.jsx";
import EventDetails,{loader as eventdetailsloader} from './Components/EventDetails.jsx';
import EventError from "./Components/ErrorComponent/EventError.jsx";
import Registration from './Components/Registration.jsx';

localStorage.setItem("login",false);

const router=createBrowserRouter(createRoutesFromElements(
      <Route path='/' element={<Layout/>} >
      <Route index element={<Home/> } ></Route> 
      <Route path="about" element={<About/>}/>
      <Route path="resource" element={<Coderesource/>}
      loader={resourceloader}
      errorElement={<CoderesourceError/>}
      />
      <Route path="events" element={<Event/>}
      loader={eventloader}
      errorElement={<EventError/>}
      />
      <Route path='/signin' element={<SignIn/>}
      action={formaction}
      />
      <Route path='/login' element={<SignIn/>}  
      //loader={loginactionloader}
      action={formaction}
      />
       <Route path="/:id" element={<EventDetails/>}
       loader={eventdetailsloader}
       >
        
       </Route>
      <Route path="/registration" element={<Registration/>}
      //  loader={registrationloader}
       /> 
      

 



      </Route>
))  
function App() { 
  return (
    <RouterProvider router={router}/>
  )
}

export default App;
