import BlogList from './BlogList';
import { MapGL } from '../../components';
import {  useState } from 'react';
import './home.css';

import useFetchFirestore from '../../helpers/useFetchFirestore';




const Home = () => {
//    const { data: fields, isPending, errortmp } = useFetch('http://localhost:8000/fields')
    const { data: fields, isPending, error } = useFetchFirestore()
    const [city, setCity] = useState('all')

    return (
        <div className="home">
            <div className="search-bar">
                <form>
                    {!isPending && <button>חפש</button>}
                    {isPending && <button disabled>...מחפש</button>}

                    <select value={city}
                        onChange={(e) => setCity(e.target.value)}>
                        <option value='all'>בחר עיר</option>
                        <option value='tel-aviv'>תל אביב</option>
                        <option value='herzliya'>הרצליה</option>
                    </select>

                </form>
            </div>
            {fields && fields.map((field) => (
                <div key={fields.id}>{field.data.phone} </div>
            ))}
            {error && <div>{error}</div>}
            {isPending && <div>...טוען</div>}
            <div className='homepage-text'>
                {error && <div>{error}</div>}
                {isPending && <div>...טוען</div>}
                {fields && <BlogList fields={fields} title='מגרשים' />}
                {/* {fields && <BlogList fields={fields.filter((field) => city === 'all' || field.data.city === city)} title='מגרשים' />} */}
            </div>
            {console.log(fields)}
            <div className='homepage-map'>
                {fields && <MapGL fields={fields} />}
            </div>

        </div>
    );
}

export default Home;