import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () =>
 {
const[title, setTitle] = useState('');
const[body, setBody] = useState(''); 
const[author, setAuthor] = useState('Olack Jills '); 
const[ispending, setIsPending] = useState(false)
const history = useHistory()

const HandleSubmit = (e) => {
    setIsPending(true)
    e.preventDefault(); 
    const blog = {title, body, author}
    console.log(blog)

    fetch( 'http://localhost:9000/blogs/', 
    {       method : 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
}
    ).then( () => {
        console.log('new blog added')
        setIsPending(false)
        history.push('/')
     } );
 }

    return(
        <div className="create">
            <h2>Create New Blog</h2>
            <form onSubmit={HandleSubmit}>
                <label>Blog Title:   </label>
                <input type='text' 
                        required   value={title} 
                        onChange = {(e) => setTitle(e.target.value)}>
                </input>

                <label>Blog Body:   </label>
                <textarea type='text' 
                        required value={body} 
                        onChange={(e) => setBody(e.target.value)}
                ></textarea>

                <label>Blog Author:   </label>
                <select 
                required value={author}
                onChange={(e) => setAuthor(e.target.value)} >
                    <option>Olack Jills</option>
                    <option>John Jills</option>
                </select>

              {  !ispending && <button type="submit">Submit</button>}
              {  ispending && <button type="submit">adding blog ...</button>}
            </form>
        </div>
    )
        
}

export default Create; 