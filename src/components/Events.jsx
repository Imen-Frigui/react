import React, {useEffect, useState} from "react";
//import eventList from "../data/events.json";
import Event from "./event";
import NavigationBar from "./NavigationBar";
import {getallEvents} from "../service/api.js"
function Events() {
  // const [selectedEvent, setSelectedEvent] = useState(null);
    const [ events, setEvents ] = useState([]);
    useEffect(() => {
        fetchdata() ;
    }, []);

    const fetchdata = async () =>
    {
        const response = await getallEvents()
        setEvents(response.data ) ;
    }


    return (
    <>
      <NavigationBar />
      <h1 className="font-bold text-3xl">Events List</h1>
      <div className="flex mt-4 p-5 space-x-5">
        {events.map((e, i) => {
          return (
            <Event
                id={e.id}
              img={e.img}
              name={e.name}
              price={e.price}
              key={i}
              nbTickets={e.nbTickets}
              nbParticipants={e.nbParticipants}
            />
          );
        })}
      </div>
    </>
  );
}

export default Events;
