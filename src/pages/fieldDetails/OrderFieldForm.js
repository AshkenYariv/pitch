import './fieldDetails.css';
import {useState, useRef} from "react";
import {getCurrentDate, refreshPage, sendEmail} from "../../helpers/functions";
import useFetch from "../../helpers/useFetch";
import React from 'react';
import "../../components/general/popup/Popup"
import Popup from "../../components/general/popup/Popup";
import PostRequest from "../../helpers/PostRequest";
import {
    backend_field_by_id_url,
    backend_fields_db_url,
    backend_url,
    email_template_book_field
} from "../../helpers/defines";

const OrderFieldForm = ({ field, id }) => {
    // Defines
    const booking_time = "booking_time";
    const id_url = backend_field_by_id_url + "/" + id;

    const form = useRef();
    const currentDate = getCurrentDate();
    const [userDate, setUserDate] = useState(currentDate);
    const [userTime, setUserTime] = useState();
    const { data: availableTimes, availableTimesIsPending, availableTimesError } = useFetch( id_url + "/" + userDate)
    const [popupIsOpen, setPopupIsOpen] = useState(false);

    const orderField = (e) => {
        e.preventDefault();

        const postContent = {
            "date": userDate,
            "time": userTime
        };
        PostRequest(id_url + "/order", postContent)

        sendEmail(email_template_book_field, form.current)
        e.target.reset();
        setPopupIsOpen(!popupIsOpen);
    };

    const togglePopup = () => {
        setPopupIsOpen(!popupIsOpen);
        refreshPage();
    }

    document.addEventListener('input',(e)=>{
        if(e.target.getAttribute('name') === booking_time) {
            setUserTime(e.target.value)
        }
    })

    return (
        <div className="order-field-form">
            <h2>הזמן מגרש</h2>

            <form ref={form} onSubmit={orderField} id="reserve_field">
                <input type="hidden" name="field_name" value={field.name}/>
                <input type="hidden" name="field_phone_number" value={field.phoneNumber}/>
                <input id="user_full_name" name="user_full_name" type="text" className="validate"/>
                    <label> שם מלא</label>
                <br/>
                <input id="user_phone_number" name="user_phone_number" type="text" className="validate"/>
                    <label> טלפון</label>
                <input type="date" defaultValue={currentDate} id="booking_date" name="booking_date"
                       onChange={(event) => setUserDate(event.target.value)} />
                <br/>
                <div>
                    <br/>
                    <h2>שעות פנויות</h2>
                    {availableTimesIsPending && <div>טוען...</div>}
                    {availableTimesError && <div>{availableTimesError}</div>}
                    {availableTimes && (
                        availableTimes.map((slot) => (
                            <div>
                                <label>{slot} </label>
                                <input type="radio" name={booking_time} value={slot} />
                            </div>
                        ))
                    )}
                </div>
                <button type="submit"  value="Submit" >הזמן מגרש</button>
            </form>
            {popupIsOpen && <Popup
                content={<>
                    <b>!המגרש הוזמן בהצלחה</b>
                    <p>{field.name}</p>
                    <p>{userDate}</p>
                    <p>{userTime}</p>
                    <button onClick={togglePopup}>סגור</button>
                </>}
            />}
        </div>

    );
}

export default OrderFieldForm;
