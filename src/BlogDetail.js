import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const BlogDetail = () => {

    const {id} = useParams()
    const history = useHistory()
    const{data: blog, isLoading, error} = useFetch('http://localhost:9000/blogs/' + id)

    const handleClick = () => {
        fetch('http://localhost:9000/blogs/' + blog.id, 
        {method : 'DELETE' }
        ).then( () => 
            history.push('/')
        );  }

    return ( 
    <div className="blog-details">
            {isLoading && <div> 'Loading ...' </div>}
            {error &&  <div>{error}</div>}
            {blog && (
                <article>
                <h2>{blog.title}</h2>
                <small>{blog.author}</small>
                <div><p>{blog.body}</p></div>
                <button onClick={handleClick}>Delete</button>
                </article>
            ) }
     
    </div> 
    );
}
 
export default BlogDetail;

