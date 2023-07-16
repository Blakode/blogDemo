import { Link } from "react-router-dom";

const PageNotFound = () => {
    return ( 
        <div className="pageNotFound">
            <h1> PAGE NOT FOUND ! </h1>

            <Link to='/'>Back to the Home Page</Link>
        </div>
     );
}
 
export default PageNotFound;