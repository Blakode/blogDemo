
import Bloglist from "./Bloglist";
import useFetch from "./useFetch";

export default  function Home(){

const{data: blogs, isLoading, error} = useFetch('http://localhost:9000/blogs')
  
    return(
        <div className="home">
        {error && <div>{error}</div>  }
        {isLoading && 'Loading ...' }
        {blogs &&  <Bloglist blogs={blogs} title='All Blogs'   />}
        </div> 
         

    );

}