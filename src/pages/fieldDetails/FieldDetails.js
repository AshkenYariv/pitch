import useFetch from "../../helpers/useFetch";
import { useParams, useNavigate } from 'react-router-dom';
import { MapGL } from "../../components";
import './fieldDetails.css';

import React from 'react';
import OrderFieldForm from "./OrderFieldForm";

const FieldDetails = () => {
    const { id } = useParams()
    const { data: field, isPending, error } = useFetch('http://localhost:8080/fields/id/' + id)
    const navigate = useNavigate()

    const handleHomeClick = () => {
        navigate("/")
    }

    return (
        <div className="field-details">
            <div className="field-details-text">
                {isPending && <div>טוען...</div>}
                {error && <div>{error}</div>}
                {field && (
                    <field>
                        <h2>{field.name}</h2>
                        <p><u>:כתובת</u></p>
                        <p>{field.address}</p>
                        <br />
                        <p><u>:שעות פעילות</u></p>
                        <p>{field.openingHours.map((item, index) => {
                            return <p>{item} מחיר: {field.prices[index]} ש"ח</p>
                        })}</p>
                        <br />
                        <OrderFieldForm field={field} id={id} />
                        <button onClick={handleHomeClick}>חזור למגרשים</button>
                    </field>
                )}
            </div>

            <div className='field-details-map'>
                {field && <MapGL fields={field} />}
            </div>
        </div>
    );
}

export default FieldDetails;
