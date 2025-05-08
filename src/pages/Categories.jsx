import { useEffect, useState } from "react";
import CategoryCard from "../components/CategoryCard";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCategories = async () => {
    try {
      const res = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
      const data = await res.json();
      setCategories(data.categories);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching categories:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  if (loading) return <div className="text-center text-lg mt-8">Loading categories...</div>;

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {categories.map((category) => (
        <CategoryCard key={category.idCategory} category={category} />
      ))}
    </div>
  );
};

export default Categories;
