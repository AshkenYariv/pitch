import useFetch from "../../helpers/useFetch";
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useRef } from "react";
import { MapGL } from "../../components";
import './fieldDetails.css';
import { getCurrentDate } from "../../helpers/functions";
import emailjs from 'emailjs-com';
import { useLocation } from 'react-router-dom'


const FieldDetails = () => {
    const { id } = useParams()
    const location = useLocation()
    const { field } = location.state


    //const { data: field, isPanding, error } = useFetch('http://localhost:8000/fields/' + id)
    const user = {
        name: 'peleg',
        phone: '0526755240'
    }
    const navigate = useNavigate()
    const currentDate = getCurrentDate();
    const [userDate, setUserDate] = useState(currentDate);
    const [userTime, setUserTime] = useState();
    const form = useRef();
    console.log(field)

    // const history = useHistory()

    // const handleDeleteClick = () => {
    //     fetch('http://localhost:8000/blogs/' + blog.id, {
    //         method: 'DELETE'
    //     }).then(() => {
    //         history.push('/')
    //     })
    // }

    const handleHomeClick = () => {
        navigate("/")
    }

    function orderField(e) {
        e.preventDefault();
        var templateParams = {
            from_name: user.name,
            field_name: field.name,
            date: userDate,
            time: userTime,
            duration: '',
            user_number: user.phone,
            field_number: field.phone
        };

        emailjs.sendForm('service_k630q6m', 'template_fts276l', templateParams, 'guDHMPICwhsH6_B9W')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    }

    // <div>
    //        {field.name}
    //     </div>
    return (

        <div className="field-details">

            <div className="field-details-text">
                {field && (
                    <field>
                        <h2>{field.name}</h2>
                        <p><u>:כתובת</u></p>
                        <p>{field.address}</p>
                        <br />
                        <p><u>:שעות פעילות</u></p>
                        {field.openingHours.map((item) => {
                            return (
                                <div>
                                    <p>שעת פתיחה: {item['openHour']}</p>
                                    <p>שעת סגירה: {item['closeHour']}</p>
                                    <p>מחיר: {item['price']}</p>
                                </div>
                            )
                        })}
                        <br />
                        <form ref={form} onSubmit={orderField} id="reserve_field">
                            <input type="date" defaultValue={currentDate} id="datePicker" name="date"
                                onChange={(event) => setUserDate(event.target.value)} />
                            <input type="time" step="300" id="timePicker" name="time"
                                onChange={(event) => setUserTime(event.target.value)} />

                            <button type="submit" value="Submit" >הזמן מגרש</button>
                        </form>
                        <button onClick={handleHomeClick}>חזור למגרשים</button>
                        {/* <button onClick={handleDeleteClick}>delete</button> // THIS DOESN'T WORK YET! */}
                    </field>
                )}
            </div>

            {/* <div className='field-details-map'>
                 {field && <MapGL fields={field} />}
         </div> */}
        </div>
    );
}

export default FieldDetails;