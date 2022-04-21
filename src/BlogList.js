import { Link } from "react-router-dom";

const BlogList = ({ fields, title}) => {

    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {fields.map((field) => (
                <div className="blog-preview" >
                    <h2>{field.name}</h2>
                    <p>{field.address}</p>
                    {/* <Link to={ `/blogs/${blog.id}` }>
                        <h2>{blog.name}</h2>
                        <p>{blog.address}</p>
                    </Link> */}
                    
                </div>
            ))}
        </div>
        
     );
}
 
export default BlogList;