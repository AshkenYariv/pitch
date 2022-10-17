import { useState, useRef } from 'react'
import './create.css';
import {sendEmail} from "../../helpers/functions";
import {email_template_add_field} from "../../helpers/defines";

const Create = () => {
    const form = useRef();
    const [fieldName, setFieldName] = useState('')
    const [fieldAddress, setFieldAddress] = useState('')
    const [contactEmail, setContactEmail] = useState('')
    const [contactPhoneNumber, setContactPhoneNumber] = useState('')
    const [generalComment, setGeneralComment] = useState('')

    const handleSubmit = (e) => {
        console.log("Sending Email")
        sendEmail(email_template_add_field, form.current)
        console.log("Email Sent")
    }

    return (
        <div className="create">
            <h2>הוספת מגרש</h2>
            <p>להוספת מגרש או שאלות מלאו את הפרטים וניצור קשר ב-24 שעות הקרובות</p>
            <br/>
            <form ref={form} onSubmit={handleSubmit} id="add-field-form">
                <label>שם המגרש</label>
                <input type='text' name="fieldname" required value={ fieldName }
                       onChange={(e) => setFieldName(e.target.value)} />
                <label>כתובת המגרש</label>
                <input type='text' name="fieldAddress" required value={ fieldAddress }
                       onChange={(e) => setFieldAddress(e.target.value)} />
                <label>אי-מייל</label>
                <input type='email' name="contactEmail" required value={ contactEmail }
                       onChange={(e) => setContactEmail(e.target.value)} />
                <label>טלפון</label>
                <input type='text' name="contactPhoneNumber" required value={ contactPhoneNumber }
                       onChange={(e) => setContactPhoneNumber(e.target.value)} />
                <label>הערות</label>
                <textarea name="generalComment" required value={ generalComment }
                          onChange={(e) => setGeneralComment(e.target.value)}/>

                <button type="submit" value="Submit">שלח בקשה</button>

                <br/>
                <br/>
                <p>טלפון: 055-881-7442</p>
            </form>
        </div>
    );
}

export default Create;