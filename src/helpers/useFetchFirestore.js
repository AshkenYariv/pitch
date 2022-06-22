import { useState, useEffect } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore"
import { db, unsubscribe} from '../helpers/firebase';

const useFetchFirestore = () => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)
    

    useEffect(() => {
        const q = query(collection(db, 'fields'), orderBy('name', 'desc'))
        onSnapshot(q, (querySnapshot) => {
            setData(querySnapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
            setIsPending(false)
            setError(null)
        })
    }, [])

    return { data, isPending, error }
}

export default useFetchFirestore