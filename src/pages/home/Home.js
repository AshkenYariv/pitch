import BlogList from './BlogList';
import { MapGL } from '../../components';
import useFetch from '../../helpers/useFetch';
import { useState } from 'react';
import './home.css';


const Home = () => {
    const { data: fields, isPending, error } = useFetch('http://localhost:8080/fields')

    const [title, setTitle] = useState('')
    const [city, setCity] = useState('all')
    const [author, setAuthor] = useState('mario')

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
          
            <div className='homepage-text'>
                {error && <div>{error}</div>}
                {isPending && <div>...טוען</div>}
                {fields && <BlogList fields={fields.filter((field) => city === 'all' || field.city === city)} title='מגרשים' />}
            </div>

            <div className='homepage-map'>
                {fields && <MapGL fields={fields} />}
            </div>

        </div>
     );
}
 
export default Home;