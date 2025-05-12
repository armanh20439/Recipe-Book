
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer   flex items-center justify-around p-10 bg-base-200 text-base-content mt-10">
      <div>
        <span className="text-xl font-bold text-primary">Recipe Book</span>
        <p>Your daily dose of delicious recipes.<br />Simple. Tasty. Inspiring.</p>
      </div>

      <div>
        <span className="footer-title">Navigation</span>
        <Link to="/" className="link link-hover">Home</Link>
        <Link to="/recipes" className="link link-hover">Recipes</Link>
        <Link to="/categories" className="link link-hover">Categories</Link>
        <Link to="/about" className="link link-hover">About</Link>
      </div>

      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>

      <div>
        <span className="footer-title">Contact</span>
        <a className="link link-hover">info@recipebook.com</a>
        <a className="link link-hover">+880 1234-567890</a>
        <p className="text-sm mt-2 text-gray-500">© {new Date().getFullYear()} Recipe Book</p>
      </div>
    </footer>
  );
}
