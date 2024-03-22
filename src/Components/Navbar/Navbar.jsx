import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        
        <div>
            <h2 className="text-3xl">My simple website</h2>
        <nav className="flex justify-between">
      <Link to="/about">About</Link>
       <Link to="/home">Home</Link>
       <Link to="/contact">Contuct Us</Link>
       <Link to="/posts">Posts</Link>
       <Link to="/users">Users</Link>
   </nav>
        </div>
    );
};

export default Navbar;