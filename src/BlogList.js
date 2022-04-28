import { Link } from "react-router-dom";

const BlogList = ({ fields, title}) => {

    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {fields.map((field) => (
                <div className="blog-preview" >
                    <Link to={`/detailed_field/${field.id}`}>
                        <h2>{field.name}</h2>
                        <p>{field.address}</p>
                    </Link>
                </div>
            ))}
        </div>
        
     );
}
 
export default BlogList;