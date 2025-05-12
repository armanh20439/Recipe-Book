import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-md px-4">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">Recipe Book</Link>
      </div>
      <div className="flex-none gap-4">
        <Link to="/" className="btn btn-ghost">Home</Link>
        <Link to="/recipes" className="btn btn-ghost">Recipes</Link>
        <Link to="/categories" className="btn btn-ghost">Categories</Link>
        <Link to="/about" className="btn btn-ghost">About</Link>
        <Link to="/login" className="btn btn-ghost">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
