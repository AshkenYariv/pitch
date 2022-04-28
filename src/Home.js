import BlogList from './BlogList';
import MapGL from './MapGL';
import useFetch from './useFetch';
import { useState } from 'react';

const Home = () => {
    const { data: fields, isPanding, error } = useFetch('http://localhost:8000/fields')

    const [title, setTitle] = useState('')
    const [city, setCity] = useState('')
    const [author, setAuthor] = useState('mario')
    const [isPending, setIsPending] = useState(false)
    const [searchTerm, setSearchTerm] = useState('all')
    // const history = useHistory()

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
                {isPanding && <div>...טוען</div>}
                {fields && <BlogList fields={fields} title='מגרשים' />}
            </div>

            <div className='homepage-map'>
                {fields && <MapGL fields={fields} />}
            </div>

        </div>
     );
}
 
export default Home;