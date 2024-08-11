import React from "react";
import ReactDOM from "react-dom";
import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Outlet, useLoaderData } from "react-router-dom";
import { getEvents } from "../../fetch/getdata.js";
import { arrayBufferToBase64 } from "../../HelperFunctions/arrayBuffer.js";
import { getDate } from "../../HelperFunctions/getDate.js";
//import './Styles/Event.css';
import "./Styles/EventDetails.css";
import Registration from './Registration.jsx';
import ReactMarkdown from "react-markdown";
export async function loader({ params }) {
  return await getEvents(params.id);
}
export default function EventDetails() {
  const eventdetail = useLoaderData();
  // const [eventType,setEventType]=useState("");
  // setEventType(eventdetail.type);
  console.log(eventdetail);
  const base64String = arrayBufferToBase64(eventdetail.img.data.data);
  const Eventdetails = (<>
    <div key={eventdetail._id} className="eventdetails">
      <h1 id="eventname_">{eventdetail.name}</h1>
      <img className="img" src={`data:image/png;base64,${base64String}`} />
      <div className="spancontainer ">
        <div className="span1">
          <span className="textcolor intencity" >{getDate(eventdetail.date)}</span>
          <span className="textcolor">{eventdetail.type}</span>
        </div>
        <div className="span2">
          <span className="textcolor">Organiser: {eventdetail.organiser}</span>
          <span className="textcolor"><FontAwesomeIcon icon={faLocationDot} size="xl" style={{color: "#ed0c39",paddingRiht:"1rem"}} />{eventdetail.place}</span>
        </div>
      </div>
      <div className="divtextinfo">
        <div className="textinfo">
          <ReactMarkdown>{eventdetail.information[0]}</ReactMarkdown>
        </div>
        <div className="coordinator">
          <ReactMarkdown>{eventdetail.coordinators[0]}</ReactMarkdown>
        </div>
      </div>
    </div>
    <div className="registrationdiv">
      <Registration eventType={eventdetail.name} />
    </div>
      </>
  );

  return <div className="eventcontainer">
    {Eventdetails}
    </div>;
}
