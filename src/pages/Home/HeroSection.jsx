
import { Link } from "react-router-dom";
import img from '../../assets/home/chef-special.jpg';

export default function HeroSection() {
  return (
    <div
      className="hero min-h-[75vh] rounded-xl"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* semi-transparent overlay for contrast */}
      <div className="hero-overlay bg-black bg-opacity-50 rounded-xl"></div>

      {/* content container */}
      <div className="hero-content w-full flex-col lg:flex-row-reverse items-start justify-end text-neutral-content px-6 lg:px-20">
        <div className="max-w-lg text-center lg:text-left">
          
          <h1 className="mb-4 text-4xl font-bold leading-tight">
            Discover fresh and easy recipes to inspire your meals every day.
          </h1>
          <p className="mb-6 text-gray-200">
            From quick breakfasts and light lunches to hearty dinners and indulgent desserts, find endless inspiration to make cooking simple, fun, and enjoyable!
          </p>
          <Link to="/recipes" className="btn btn-primary btn-lg">
            View Recipes
          </Link>
        </div>
      </div>
    </div>
  );
}
