import useFetch from "./useFetch";
import {useParams, useNavigate } from 'react-router-dom'

const BlogDetails = () => {
    const { id } = useParams()
    const { data: field, isPanding, error } = useFetch('http://localhost:8000/fields/' + id)
    const navigate = useNavigate()
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

    return ( 
        <div className="blog-details">
            { isPanding && <div>טוען...</div> }
            { error && <div>{ error }</div> }
            {field && (
                <field>
                    <h2>{ field.name }</h2>
                    <p>כתובת {field.address }</p>
                    <br />
                    <div> לכתוב בוייז מה שצריך</div>
                    <button onClick={handleHomeClick}>חזור למגרשים</button>
                    {/* <button onClick={handleDeleteClick}>delete</button> */}
                </field>
            ) }
        </div>
     );
}
 
export default BlogDetails;