import { Link } from "react-router-dom";

export default function Navbar(){

    return(
        <nav className="navbar">
            <h1>The Blog</h1>
            <div className="links">
            <Link to="/">home</Link>
            <Link to="/create">add blog</Link>
            </div>
        </nav>
    ); 

}