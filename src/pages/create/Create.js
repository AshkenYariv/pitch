import { useRef, useState } from 'react'
import './create.css';
import {refreshPage, sendEmail} from "../../helpers/functions";
import {email_template_add_field} from "../../helpers/defines";
import Popup from "../../components/general/popup/Popup";
import React from 'react';

const Create = () => {
    const form = useRef();
    const [popupIsOpen, setPopupIsOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Sending Email")
        sendEmail(email_template_add_field, form.current)
        console.log("Email Sent")
        e.target.reset();
        setPopupIsOpen(!popupIsOpen);
    }

    const togglePopup = () => {
        setPopupIsOpen(!popupIsOpen);
        refreshPage();
    }

    return (
        <div className="create">
            <h2>הוספת מגרש</h2>
            <p>להוספת מגרש או שאלות מלאו את הפרטים וניצור קשר ב-24 שעות הקרובות</p>
            <br/>
            <form ref={form} onSubmit={handleSubmit} id="add-field-form">
                <label>שם המגרש</label>
                <input type='text' name="fieldname" />
                <label>כתובת המגרש</label>
                <input type='text' name="fieldAddress" />
                <label>אי-מייל</label>
                <input type='email' name="contactEmail" />
                <label>טלפון</label>
                <input type='text' name="contactPhoneNumber" />
                <label>הערות</label>
                <textarea name="generalComment" />
                <button type="submit" value="Submit">שלח בקשה</button>

                <br/>
                <br/>
                <p>טלפון: 055-881-7442</p>
            </form>
            <div className="pop-up" id="pop-up">
                {popupIsOpen && <Popup id="pop-up"
                    content={<>
                        <b>!בקשה נשלחה</b>
                        <br/>
                        <br/>
                        <button onClick={togglePopup}>סגור</button>
                    </>}
                />}
            </div>
        </div>
    );
}

export default Create;