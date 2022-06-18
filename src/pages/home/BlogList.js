import { Link } from "react-router-dom";
import './home.css';

const BlogList = ({ fields, title }) => {


    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {fields.map((field) => (
                <div className="blog-preview" >
                    <Link to={ `/detailed_field/${field.id}`} state={{ field: field.data }}>
                        <h2>{field.data.name}</h2>
                        <p>{field.data.address}</p>
                    </Link>
                </div>
            ))}
        </div>

    );
}

export default BlogList;