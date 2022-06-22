import { query, onSnapshot, collection } from "firebase/firestore";
import { db } from "../../helpers/firebase";
import React, { useEffect, useState } from "react";
import './calender.css';
const Calender = () => {

  const [lists, setLists] = useState([])
  const reservationsRef = collection(db, 'reservations');

  useEffect(() => {
    const test = query(reservationsRef);
    let calender;
    const subscriber = onSnapshot(test, (querySnapshot) => {
      querySnapshot.docChanges().forEach((change) => {
        console.log(change.doc.data())
        calender = change.doc.data()
      });
      console.log("Current cities in CA: ", calender.timeStart.toDate().toDateString());
      setLists(calender)
      return calender
    });

    // Stop listening for updates when no longer required
    return () => subscriber();
  }, []);



  const hours = []
  for (var i = 0; i <7; i++) {
      // hours.push(<div key={i} className="hourOccupied"></div>)

    if (i.toString() == lists.test) {
      hours.push(<div key={i} className="hourOccupied red"></div>)
    }else{
      hours.push(<div key={i} className="hourFree green"></div>)
    }
  }

  return (
    <div className="calender">
      {/* {lists.timeStart.toDate().toDateString()} */}
    {hours}
    </div >
  );
}

export default Calender;

