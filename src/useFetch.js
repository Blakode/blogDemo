import { useState, useEffect } from "react";

const useFetch = (url) =>{

    const [data, setData] = useState(null); 
    const[isLoading, stillLoadding] = useState(true)
    const[error, setError] = useState(null)

    useEffect(() => {
            const abortReq = new AbortController()
            
        setTimeout(() => {
            fetch(url, {signal: abortReq.signal})
            .then(    res => { 
                    if (!res.ok)
                    { throw Error( 'Could not fetch resource for the Blogs' ); }
                    return res.json();  
            })
            .then(data => {
                        setData(data);
                        stillLoadding(false);
                        setError(null);
             }).catch(err => {
                 if(err.name === 'AbortError'){
                    console.log('Fetch Aborted');
                 } else {
                    setError(err.message)
                    stillLoadding(false) 
                 }
          
             })
        }, 1000);

        return () => abortReq.abort(); 
    }, [url]);

    return{data, error,  isLoading}
}

export default useFetch;  