import { Link } from "react-router-dom";

const BlogList = ({ fields, title}) => {

    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            <p>This Worked 1</p>
            {fields.map((blog) => (
                
                <div className="blog-preview" >
                    {/* <Link to={ `/blogs/${blog.id}` }>
                        <h2>{blog.name}</h2>
                        <p>{blog.address}</p>
                    </Link> */}
                    <p>This is in Blog List</p>
                    
                </div>
            ))}
        </div>
        
     );
}
 
export default BlogList;