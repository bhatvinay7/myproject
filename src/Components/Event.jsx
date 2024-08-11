import React from 'react';
import ReactDOM from 'react-dom';
import Markdown from 'react-markdown'
import { useEffect, useState } from 'react';
import { useLoaderData, Link,useSearchParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays,faFilter } from '@fortawesome/free-solid-svg-icons';
import { getEvents } from '../../fetch/getdata.js';
import { getDate } from '../../HelperFunctions/getDate.js';
import { filter } from '../../HelperFunctions/filter.js';
import { FaUserAltSlash } from 'react-icons/fa';
import { arrayBufferToBase64 } from '../../HelperFunctions/arrayBuffer.js';
import './Styles/Event.css';
import { authRequire } from '../../HelperFunctions/AuthRequire.js';

export async function loader({ params }) {
  if(authRequire()){
  let res = await getEvents(params.id);
  console.log(res);
  return res;
  }
  else{
    throw new Error("please login to your account")
  }
}
export default function Event() {
  const [searchParams,setSearchParams]=useSearchParams()
  const [filterArrays, setFilterArrays] = useState([]);
  const [typeFilter, setFilter] = useState(null);
  const [filterOut,setFilterOut]=useState([])
  async function handleSearch(e,eachfilter) { 
   e.preventDefault()
    // const currentTypeFilter = searchParams.get("type");
    setFilter(eachfilter)
    let res = await getEvents();
    const filterArray=res.filter((each,index)=>{
     // console.log(eachfilter,each.type)
      return   each.type===eachfilter
    })
    setFilterOut(filterArray)
    console.log(filterArray)
  }
  
  

  useEffect(() => {
    const loadFilter = async () => {
      let res = await getEvents();
      const allTypes = res.map((eachType) => {
        return eachType.type
      })
      const filteredOut = await filter(allTypes)
      setFilterArrays(filteredOut)
    }
    loadFilter()
  }, []);



function clearHandleSearch(e) {
  e.preventDefault()
  //const currentTypeFilter = searchParams.get(null);
// const url = new URL(window.location);
// const searchParams = new URLSearchParams(url.search);

// Remove the 'type' parameter
  setFilter(null)
}
const filterButtons = filterArrays.map((eachfilter, index) => {
  return (
    <div key={index} >
      <button className="filterButtonStyle" style={typeFilter === eachfilter ? { textDecoration: "underline",backgroundColor:"greenyellow" }:null}  onClick={(e)=>handleSearch(e,eachfilter)}>{eachfilter}</button>
    </div>
  )
})

const events = useLoaderData();
console.log(events);
const eventList = typeFilter ? filterOut : events
const displayElements = eventList.map((event) => {

  const base64String = arrayBufferToBase64(event.img.data.data);
  return (
    <div key={event._id} className='events'>
      <Link className="link" to={`/${event._id}`}>
        <div className="Inlink">
          <img src={`data:image/png;base64,${base64String}`} />
          <div className="content">
            <span id="eventname">{event.name}</span>
            <div className="type_date">
              <div>
                <FontAwesomeIcon icon={faCalendarDays} />
                <span className='text'>{getDate(event.date)}</span>
              </div>
              <span className='text'>{event.type}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
})

return (
  <>
    <h1>Events</h1>
    <div className='flitersDiv'>
    <FontAwesomeIcon icon={faFilter} style={{size:"lg",color: "#74C0FC",}} />
      {filterButtons}
      {typeFilter ?<button className='filterButtonStyle' onClick={(e)=>clearHandleSearch(e)}>clear fliter</button>:null}
    </div>
    <div className="Eventcontainer">{displayElements}</div>
  </>
)
  }
