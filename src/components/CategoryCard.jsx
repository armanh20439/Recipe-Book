const CategoryCard = ({ category }) => {
  return (
    <div className="card bg-base-100 shadow-md">
      <figure className="px-4 pt-4">
        <img src={category.strCategoryThumb} alt={category.strCategory} className="rounded-xl h-32 w-full object-cover" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{category.strCategory}</h2>
        <p className="text-sm">{category.strCategoryDescription.slice(0, 100)}...</p>
      </div>
    </div>
  );
};

export default CategoryCard;
