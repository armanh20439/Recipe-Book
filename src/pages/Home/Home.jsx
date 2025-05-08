import { Link } from "react-router-dom";
import Banner from "./Banner";

const Home = () => {
  return (
    <div className="hero min-h-screen bg-base-200 rounded-lg">
      <div className="hero-content text-center">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold">Welcome to Recipe Book!</h1>
          <p className="py-6">
            Discover delicious meals, explore categories, and get inspired to cook amazing dishes.
          </p>
          <Link to="/recipes" className="btn btn-primary">
            Explore Recipes
          </Link>
        </div>
      </div>
      <Banner></Banner>
    </div>
  );
};

export default Home;
