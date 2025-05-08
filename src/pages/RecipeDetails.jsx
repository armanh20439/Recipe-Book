import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const RecipeDetails = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchMealDetails = async () => {
    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await res.json();
      setMeal(data.meals[0]);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching meal details:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMealDetails();
  }, [id]);

  if (loading) return <div className="text-center text-lg mt-8">Loading recipe details...</div>;

  return (
    <div className="max-w-4xl mx-auto card bg-base-100 shadow-xl p-4">
      <figure>
        <img src={meal.strMealThumb} alt={meal.strMeal} className="rounded-xl w-full max-h-96 object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl">{meal.strMeal}</h2>
        <p><strong>Category:</strong> {meal.strCategory}</p>
        <p><strong>Area:</strong> {meal.strArea}</p>
        <p className="mt-4"><strong>Instructions:</strong></p>
        <p className="whitespace-pre-line">{meal.strInstructions}</p>

        <div className="card-actions mt-6 justify-end">
          <a href={meal.strYoutube} target="_blank" className="btn btn-outline btn-success btn-sm">Watch Video</a>
          <Link to="/recipes" className="btn btn-secondary btn-sm">Back to Recipes</Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
