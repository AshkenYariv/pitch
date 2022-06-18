import BlogList from './BlogList';
import { MapGL } from '../../components';
import useFetch from '../../helpers/useFetch';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import './home.css';
import { getFields } from '../../helpers/firebase';
import { collection, query, orderBy, onSnapshot } from "firebase/firestore"
import { db } from '../../helpers/firebase';
import useFetchFirestore from '../../helpers/useFetchFirestore';




const Home = () => {
   const { data: fields, isPanding, errortmp } = useFetch('http://localhost:8000/fields')
    const { data: fields2, isPending, error } = useFetchFirestore()

    const [title, setTitle] = useState('')
    const [city, setCity] = useState('all')
    const [author, setAuthor] = useState('mario')
    // const history = useHistory()

    //TODO: need to think if should be at a different page like useFetch
    // useEffect(() => {
    //     const q = query(collection(db, 'fields'), orderBy('name', 'desc'))
    //     onSnapshot(q, (querySnapshot) => {
    //         setFields(querySnapshot.docs.map(doc => ({
    //             id: doc.id,
    //             data: doc.data()
    //         })))
    //     })
    // }, [])

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
            {fields2 && fields2.map((field) => (
                <div key={fields2.id}>{field.data.phone} </div>
            ))}
            {error && <div>{error}</div>}
            {isPending && <div>...טוען</div>}
            <div className='homepage-text'>
                {error && <div>{error}</div>}
                {isPending && <div>...טוען</div>}
                {fields2 && <BlogList fields={fields2} title='מגרשים' />}
                {/* {fields && <BlogList fields={fields.filter((field) => city === 'all' || field.data.city === city)} title='מגרשים' />} */}
            </div>
            {console.log(fields2)}
            <div className='homepage-map'>
                {fields2 && <MapGL fields={fields2} />}
            </div>

        </div>
    );
}

export default Home;