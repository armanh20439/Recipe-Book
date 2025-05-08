import { Link } from "react-router-dom";

const RecipeCard = ({ meal }) => {
  return (
    <div className="card bg-base-100 shadow-md">
      <figure>
        <img src={meal.strMealThumb} alt={meal.strMeal} className="h-48 w-full object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{meal.strMeal}</h2>
        <div className="card-actions justify-end">
          <Link to={`/recipes/${meal.idMeal}`} className="btn btn-outline btn-primary btn-sm">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
